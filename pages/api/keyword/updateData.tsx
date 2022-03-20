import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as puppeteer from 'puppeteer';
import cheerio from 'cheerio';




async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {

    const zumResult = await zumRanking();
    const nateResult = await getnateRanking();

    console.log(zumResult)
    console.log(nateResult);

    let zum =0;
    let nate1 =1;
    let nate2=0;
    let RankingTemp:any[] = [];
    let nateRanking: any[]= [];
  
    if(zumResult  && nateResult) {
      while(RankingTemp.includes(zumResult[zum])) { zum ++; }
      RankingTemp.push(zumResult[zum]);
      while(RankingTemp.includes(nateResult[nate1])) { nate1 ++; }
      RankingTemp.push(nateResult[nate1]);
      while(RankingTemp.includes(nateResult[nate1])) { nate1 ++; }
      RankingTemp.push(nateResult[nate1]);
      while(RankingTemp.includes(zumResult[zum])) { zum ++; }
      RankingTemp.push(zumResult[zum]);
      while(RankingTemp.includes(nateResult[nate1])) { nate1 ++; }
      RankingTemp.push(nateResult[nate1]);
      while(RankingTemp.includes(zumResult[zum])) { zum ++; }
      RankingTemp.push(zumResult[zum]);
      while(RankingTemp.includes(nateResult[nate1])) { nate1 ++; }
      RankingTemp.push(nateResult[nate1]);
      while(RankingTemp.includes(zumResult[zum])) { zum ++; }
      RankingTemp.push(zumResult[zum]);
      while(RankingTemp.includes(nateResult[nate1])) { nate1 ++; }
      RankingTemp.push(nateResult[nate1]);
      console.log(nate1)
      while(RankingTemp.includes(nateResult[nate1])) { nate1 ++; }
      RankingTemp.push(nateResult[nate1]);
  
    }
      console.log("ffff : " , RankingTemp)
      for(let i =0 ;i<RankingTemp.length; i++) {
        nateRanking.push({name: RankingTemp[i]});
      }
      console.log("ffff : " , nateRanking)
      const exist = await client.keyword.findMany({ take: 10});
      console.log("exit: ", exist)
      if(exist.length) {
        for(let i =0 ;i<10 ;i ++) {
          let up = 'up';
          for(let j =0 ;j < 10 ;j++) {
            if(nateRanking[i].name === exist[j].title) {
              if(i > j) {
                up = 'down';
                
              } else if(i === j) {
                up = 'same';
  
              } else {
                up = 'up';
              }
            }
          }

          nateRanking[i].up = up;
        };
        console.log("result : " ,nateRanking)

        for(let i =0 ;i< 10 ;i ++) {
          await client.keyword.update({
            where:{ rank: i+1 },
            data: {
              title: nateRanking[i].name,
              rank: i+1,
              up_down: nateRanking[i].up
            }
          })
        };
        return res.status(200).json({
          ok: true,
          message: 'updated data',
        });
        // await client.keyword.update(exist.id, {ranking: nateRanking});
      } else {
          for(let i =0 ;i< 10 ;i ++) {
            await client.keyword.create({
              data: {
                title: nateRanking[i].name,
                rank: i+1,
                up_down: 'same'
              }
            })
          }
          
      }
      
      return res.status(200).json({
        ok: true,
        message: 'created data',
      });

    } 
  

export default withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: false
});

async function zumRanking() {
  try {
      
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
    await page.goto('https://search.zum.com/search.zum?method=uni&option=accu&qm=f_typing&rd=1&query=%EC%8B%A4%EC%8B%9C%EA%B0%84');

    //#iskwClose > div > div.rank > ol > li:nth-child(1) > a > span
    const content = await page.content();
    // $에 cheerio를 로드한다.
    const $ = cheerio.load(content);
    const lists = $("#issue_wrap > ul:nth-child(1) > li");
    lists.each((index, list) => {
      const name = $(list).find("div > a:nth-child(1) > span.txt").text();
        nateRanking.push(name);
    });

    const lists2 = $("#issue_wrap > ul:nth-child(2) > li");
    lists2.each((index, list) => {
      const name = $(list).find("div > a:nth-child(1) > span.txt").text();
        nateRanking.push(name);
    });
      
  
    // 브라우저를 종료한다.
    browser.close();

    return nateRanking;
  } catch(e) {

  }
}

async function getnateRanking () {
  try {
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
    await page.goto('https://m.nate.com/');

    //#iskwClose > div > div.rank > ol > li:nth-child(1) > a > span
    const content = await page.content();
    // $에 cheerio를 로드한다.
    const $ = cheerio.load(content);
    const lists = $("#iskwClose > div > div.rank > ol > li");
    console.log(lists)
    lists.each((index, list) => {
      const name = $(list).find("a > span").text();
      if(index === 9) {
        nateRanking.push(name.substring(2,name.length));
      }else {
        nateRanking.push( name.substring(1,name.length));
      }
    });
    // const Content = await this.contents.findOne({category: 'keyword'});
    // if(Content) {
    //   this.contents.update({})
    // } else {
      
    
  
    // 브라우저를 종료한다.
    browser.close();
    return nateRanking;
    // return this.contents.findOne({where: { category: 'Keyword'}});
  } catch(e) {
    console.log(e);
  }
}
