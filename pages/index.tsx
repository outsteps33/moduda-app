import { TrendRanking } from "../components/Trend_Ranking"
// import { getKeywordRanking } from "../__generated__/getKeywordRanking";
import { TrendVideos } from "../components/Trend_Video";
import Image from 'next/image';
import { TrendRanking2 } from "../components/Trend_Ranking2";
import { TrendArticles } from "../components/Trending_Article";
// import { getArticleRanking } from "../__generated__/getArticleRanking";
import { TrendCoinRanking } from "../components/Trend_CoinRanking";
import { useEffect, useState } from "react";

import { NextPage } from "next";
import { KeyWordComponent } from "@components/KeyWordComponent";
import { NewsComponent } from "@components/NewsComponent";
import { YoutubeComponent } from "@components/YoutubeComponent";
import { Pixel } from "@components/Pixel";
import { Keyword, News, Youtube } from ".prisma/client";
import useSWR from "swr";


interface KeywordResponse {
  ok: boolean;
  keyword: Keyword[];
}

interface NewsdResponse {
  ok: boolean;
  news: News[];
}

interface YoutubeResponse {
  ok: boolean;
  youtube: Youtube[];
}
 
const TrendMain: NextPage = () => {
  const [ isShow, setIsShow] = useState(false);
  const [] = useState('')
  const week = new Array('일', '월', '화', '수', '목', '금', '토');
  
  const newses = {
    news: {
      title1:  '디즈니 플러스 연 4000원 돌려받는 방법',
      link1: 'https://reallive-click.tistory.com/7',
      title1Image: 'https://scoophousev1.s3.amazonaws.com/1642998204250test1.jpg',
      title2:  '버리는 포인트로 재테크 하는 법 / 금을 만드는 법 (진짜 금)',
      link2: 'https://reallive-click.tistory.com/8',
      title2Image: 'https://scoophousev1.s3.amazonaws.com/23.png',
    }

  };

  const customStyles = {
    content: {
      top: '10%',
      left: '10%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };
 
  
  const { data:keyword } = useSWR<KeywordResponse>("/api/keyword/getData");
  const { data: news } = useSWR<NewsdResponse>("/api/news/getData");
  const { data: youtube } = useSWR<YoutubeResponse>("/api/youtube/getData");
  

  return (
    <>
      {(keyword && news && youtube) ?

        <div className="py-10" style={{backgroundColor: "#eaeef3"}}>
          <KeyWordComponent keywords={keyword?.keyword} />
          <Pixel />
          <NewsComponent news={news?.news} />
          <Pixel />
          <YoutubeComponent youtubes={youtube?.youtube} />
        </div> 
      :
      <div style={{backgroundColor: "#eaeef3", height:'100vh'}}>
        <button type="button" className="bg-indigo-500 flex justify-center align-middle" disabled>
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
          </svg>
          Processing...
        </button>
      </div>
      }
    </>
  )
}
export default TrendMain;