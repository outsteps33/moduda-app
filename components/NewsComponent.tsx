

import { FC } from 'react'
import { ArrowUpIcon, ArrowDownIcon, RefreshIcon } from '@heroicons/react/solid';
import { useTimer } from 'react-timer-hook';
import styled from 'styled-components';
import { News } from '.prisma/client';

interface NewsProps {
  news: News[];
}


const Text1 = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const Text2 = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const array = [
  {
    title: '왜 옮기지? 길 막히나? 집값은?…청·국방부 주변, 뒤숭숭한 주민들',
    thumbnail :'https://thumb.zumst.com/120x68/https://static.news.zumst.com/images/35/2022/03/17/c8b467597e6a4fadaedf7d8ebf0e6c74.jpg',
    url: 'https://news.zum.com/articles/74424700'
  },
  {
    title: '[더뉴스] 인수위 인선 마무리...집무실 이전, 오늘 최종 보고',
    thumbnail :'https://thumb.zumst.com/120x68/https://static.news.zumst.com/images/4/2022/03/17/202203171527359417_t.jpg',
    url: 'https://news.zum.com/articles/74424700'
  },
  {
    title: '박명수 "내돈 300만원 떼먹은 개그맨 선배 두명, 잘먹고 잘살길"(라디오쇼)',
    thumbnail :'https://thumb.zumst.com/120x68/https://static.news.zumst.com/images/35/2022/03/17/c8b467597e6a4fadaedf7d8ebf0e6c74.jpg',
    url: 'https://news.zum.com/articles/74424700'
  },
  {
    title: `교육 전문가 빠진 '윤석열 인수위'…"백년대계 교육 홀대" 비판`,
    thumbnail :'https://thumb.zumst.com/120x68/https://static.news.zumst.com/images/35/2022/03/17/c8b467597e6a4fadaedf7d8ebf0e6c74.jpg',
    url: 'https://news.zum.com/articles/74424700'
  },
  {
    title: '조두순 둔기 폭행 20대 남성, 국민참여재판 받는다…5월 열려',
    thumbnail :'https://thumb.zumst.com/120x68/https://static.news.zumst.com/images/35/2022/03/17/c8b467597e6a4fadaedf7d8ebf0e6c74.jpg',
    url: 'https://news.zum.com/articles/74424700'
  },
  {
    title: '대리기사 욕하고 때리던 여성…경찰 신고하자 자해 "나도 맞았다"[영상]',
    thumbnail :'https://thumb.zumst.com/120x68/https://static.news.zumst.com/images/35/2022/03/17/c8b467597e6a4fadaedf7d8ebf0e6c74.jpg',
    url: 'https://news.zum.com/articles/74424700'
  },

]


export const NewsComponent:React.FC<NewsProps> = ({
  news
}) => {
  

  return (
    <div className="sm:max-w-md sm:mx-auto bg-white pb-5 shadow-md rounded-sm mt-5" style={{padding: '0px 15px 4px 15px'}}>
      <div className="flex justify-between items-center pt-5" style={{padding: '15px 5px 0px 5px'}}>  
        <div className="flex items-center">
          <div className="text-xl font-semibold">실시간 급상승 뉴스</div>
        </div>
        <div className="cursor-pointer mb-1" onClick={() => window.location.reload()}>
          <div className="flex align-middle  px-1 text-sm border-gray-300 border bg-gray-100" style={{paddingTop:"2.2px"}}>
            <RefreshIcon className="text-gray-600 h-3 w-3 mr-1" style={{marginTop:"4.5px"}} ></RefreshIcon><span style={{paddingTop:"1px"}}> 새로고침</span>
          </div>
        </div>
      </div>
      <div className="pt-3 grid grid-cols-2" > 
        {news.filter((t:any, i:any)=> i < 2 ).map((v:any,i:any)=> (
          <a style={{fontSize:"16px", lineHeight:'19px', padding: '0 5px 12px 5px'}}
            href={`${v.url}`} 
            target= "_blank"
          >
            <div style={{}}>
              <img src={v.thumbnail.includes('https') ? v.thumbnail : 'https:' + v.thumbnail} className="w-full rounded-md pb-1" />
            </div>
            <div className="px-1">
              <Text1 style={{color:'#303038', padding: '8px 6px 0px 2px'}}>{v.title}</Text1>
              {/* <span style={{color:'#303038', padding: '8px 6px 0px 2px'}}>{v.name.length > 25 ? v.name.substring(0,25) + '..'  : v.name}</span> */}
            </div>
          </a>
        ))}
      
        <div></div>
      </div>
      <div className="pt-2 pb-2"> 
        <div>
          {news.filter((t:any, i:any)=> i < 6 && i >1 ).map((v:any,i:any)=> (
            <div style={{ padding: '11px 6px 10px 2px', borderTop:'1px solid #efeff0'}}>
              <a className="" 
                href={`${v.url}`} 
                target= "_blank"
              >
                <Text2 className="text-gray-800 " style={{fontSize:'16px'}}>{v.title}</Text2>
                {/* <span {v.name.length > 28 ? v.name.substring(0,28) + '..'  : v.name}</span> */}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-2 pb-4 mx-auto grid justify-center">
        <div className="text-green-700 pb-2" style={{fontSize: "14px"}}>
          {new Date().getFullYear()}.{new Date().getMonth()+1}.{new Date().getDate()} {new Date().getHours() }:{new Date().getMinutes() < 10 ? 0 : ''}{new Date().getMinutes()}분 기준
        </div>
        <a className="rounded-xl text-sm py-1 px-3 border-green-700 font-semibold text-green-700 cursor-pointer text-center hover:bg-green-700 hover:text-white" href="https://mastventures.notion.site/a0fb1647c5fd497dadc1222bf086442a" style={{border: "1px solid"}} target="_blank">급상승 사용 설명서</a>
        <a className="text-sm pt-1 font-semibold text-green-700 grid justify-center hover:text-green-900" href="https://www.notion.so/mastventures/2e34d5aed7564967bc50aa2e2170ac76" target="_blank" >v.1.0.9</a>
      </div>
    </div>
  )

}