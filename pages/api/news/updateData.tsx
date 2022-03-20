import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';
import * as puppeteer from 'puppeteer';
import cheerio from 'cheerio';


async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {

  try {
    const { authorization } = req.headers;

    if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
      const browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--single-process'
        ],
      });
        const page = await browser.newPage();
        let nateRanking: any[]= [];
    
        
        // 페이지의 크기를 설정한다.
        await page.setViewport({
          width: 1366,
          height: 768
        });
    
        await page.goto('https://news.zum.com/issues?cm=news_lnb');
      
        const zcontent = await page.content();
        // $에 cheerio를 로드한다.
        const z$ = cheerio.load(zcontent);
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
    
    
        
        
        await page.goto('https://news.nate.com/rank/?mid=n1000');
      
        const content = await page.content();
        // $에 cheerio를 로드한다.
        const $ = cheerio.load(content);
        const lists = $("#newsContents > div > div.postRankSubjectList.f_clear > div");
    
        let temp = {
        }
        lists.each((index, list) => {
          console.log(index)
          if(index < 5 ) {
            const src = $(list).find("div > a").attr('href');
            const name = $(list).find("div > a > span.tb > strong").text();
            const up = $(list).find("dl > dd > span:nth-child(2) > em").text();
            const image = $(list).find("div > a > span.ib > em > img").attr('src');
            temp = {
              videoId: 'https:' + src,
              name,
              image: 'https:' + image
            }
            nateRanking.push(temp);
    
          }
        });
    
        // const list2 = $("#postRankSubject > ul");
        
        // list2.each((index, list) => {
        //   let num = 0;
        //   const src2 = $(list).find("li:nth-child(2) > a").attr('href');
        //   const up = $(list).find("li:nth-child(2) > dl > dd > span.up");
        //   const name2 = $(list).find("li:nth-child(2) > a").text();
          
        //   if(up.length === 1 && num <6) {
        //     nateRanking.push({
        //       name: name2,
        //       videoId: 'https:' +  src2,
        //       image: ""
        //     });
        //     num++;
        //   }
        // });
        
        const exist = await client.news.findMany({ take: 10});
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
          browser.close();
          return res.status(200).json({
            ok: true,
            message: 'updated data',
          });
        } else {
          nateRanking.forEach(async (v, i) => {
            await client.news.create({
              data: {
                title: nateRanking[i].name,
                thumbnail: nateRanking[i].image,
                url: nateRanking[i].videoId
              }
            })
          });
          browser.close();
          return res.status(200).json({
            ok: true,
            message: 'created data',
          });
    
        }
        // 브라우저를 종료한다.
    } else {
      res.status(401).json({ ok: false });
    }
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
    // const news = await client.news.findMany();
    
  
}

export default withHandler({
  methods: ["POST"], 
  handler, 
  isPrivate: false
});
