import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';
import * as puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import axios from 'axios';


async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  try {
    
    const nateRanking = await getNews();
    const exist = await client.news.findMany({ take: 10});
    console.log(exist)
    if(exist.length) {
      nateRanking.forEach(async (v, i) => {
        await client.news.update({
          where:{ id: i },
          data: {
            title: nateRanking[i].name,
            thumbnail: nateRanking[i].image,
            url: nateRanking[i].videoId
          }
        })
      });
      return res.status(200).json({
        ok: true,
        message: 'updated data',
        data: nateRanking
      });
    } else {
      nateRanking.forEach(async (v, i) => {
        await client.news.create({
          data: {
            title: (nateRanking[i].name),
            thumbnail: nateRanking[i].image,
            url: nateRanking[i].videoId
          }
        })
      });
    
      return res.status(200).json({
        ok: true,
        message: 'created data',
      });

    }
    // 브라우저를 종료한다.
   
    
  } catch(e) {
    console.log(e);
  }
    
  
}

export default withHandler({
  methods: ["POST"], 
  handler, 
  isPrivate: false
});

async function getNews() {
    const zcontent = await axios.get('https://news.zum.com/issues?cm=news_lnb');
    // $에 cheerio를 로드한다.
    let nateRanking: any[] = [];
    const z$ = cheerio.load(zcontent.data);
    const zlists = z$("#news_issue_wrap > div > div > aside > section.related_news_wrap > ul > li");

    let ztemp = {
      
    }
    zlists.each((index, list) => {
      if(index < 3) {
        const src = z$(list).find("a").attr('href');
        const name = z$(list).find("a > div.title").text();
        const image = z$(list).find("a > div.thumb > img").attr('src');
        ztemp = {
          videoId: 'https://news.zum.com' + src,
          name,
          image
        }

        nateRanking.push(ztemp);
      }
    });


    
    const zcontents = await axios.get('https://news.nate.com/rank/?mid=n1000');
    const $ = cheerio.load(zcontents.data);
    const lists = $("#newsContents > div > div.postRankSubjectList.f_clear > div");
    // console.log(zcontents.data)
    let temp = {
    }
    lists.each((index, list) => {
    
      if(index < 5 ) {
        const src = $(list).find("div > a").attr('href');
        const name = $(list).find("div > a > span.tb > strong").text();
        const up = $(list).find("dl > dd > span:nth-child(2) > em").text();
        const image = $(list).find("div > a > span.ib > em > img").attr('src');
        temp = {
          videoId: 'https:' + src,
          name:name,
          image: 'https:' + image
        }
        nateRanking.push(temp);

      }
    });
    return nateRanking;
}