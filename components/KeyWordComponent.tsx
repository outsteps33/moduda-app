

import { FC } from 'react'
import { ArrowUpIcon, ArrowDownIcon, RefreshIcon } from '@heroicons/react/solid';
import { useTimer } from 'react-timer-hook';
import useSWR from 'swr';
import { Keyword } from '.prisma/client';

interface KeywordProps {
  keywords: Keyword[];
}



const array = [
  {
    title: '소상공인',
    rank:1,
    up_down: 'up'
  },
  {
    title: '나는 솔로',
    rank:2,
    up_down: 'up'
  },
  {
    title: '김광현 81억',
    rank:3,
    up_down: 'same'
  },
  {
    title: '이재명',
    rank:4,
    up_down: 'down'
  },
  {
    title: '고스트나인 이강성',
    rank:5,
    up_down: 'up'
  },
  {
    title: '채이배',
    rank:6,
    up_down: 'down'
  },
  {
    title: '이근',
    rank:7,
    up_down: 'down'
  },
  {
    title: '강남 3구 아파트',
    rank:8,
    up_down: 'down'
  },
  {
    title: '신구권력 대치',
    rank: 9,
    up_down: 'up'
  },
  {
    title: '러시아 디폴트',
    rank: 10,
    up_down: 'up'
  },
]

export const KeyWordComponent:React.FC<KeywordProps> = ({
  keywords
}) => {
  return (
    <div className="px-5 sm:max-w-md sm:mx-auto bg-white shadow-md">
      <div className="flex justify-between items-center pt-5">  
        <div className="flex items-center">
          <div className="text-xl font-semibold ">실시간 급상승 검색</div>
        </div>
        <div className="cursor-pointer mb-1" onClick={() => window.location.reload()}>
          <div className="flex align-middle  px-1 text-sm border-gray-300 border bg-gray-100" style={{paddingTop:"2.2px"}}>
            <RefreshIcon className="text-gray-600 h-3 w-3 mr-1" style={{marginTop:"4.5px"}} ></RefreshIcon><span style={{paddingTop:"1px"}}> 새로고침</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-3 gap-4">
        <div className="">
          {keywords.filter((t:any, i:any)=> i < 5 ).map((v:any,i:any)=> (
            <a className="flex items-center justify-between cursor-pointer hover:bg-gray-300" style={{fontSize:"16px", padding: '9px 0px 8px 0px'}}
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${v.title}`} 
              target= "_blank"
            >
            <div>
              <span className="font-bold mr-3" style={{color:'#03c75a'}}>{v.rank}</span> 
              <span className="font-normal text-gray-800">{v.title.length > 8 ? v.title.substring(0,8) + '..'   : v.title}</span>
            </div>
            {v.up_down === 'up' && <ArrowUpIcon className="text-red-600 h-3 w-3"></ArrowUpIcon>}
            {v.up_down === 'down' && <ArrowDownIcon className="text-blue-600 h-3 w-3"></ArrowDownIcon>}
            {v.up_down === 'same' && <div style={{paddingRight:"3px"}}>-</div>}
          </a>
          ))}
        </div>
        <div className="">
          {keywords.filter((t:any, i:any)=> i < 10 && i > 4 ).map((v:any,i:any)=> (
            <a className="flex items-center justify-between cursor-pointer hover:bg-gray-300" style={{fontSize:"16px", padding: '9px 0px 8px 0px'}}
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${v.title}`} 
              target= "_blank"
            >
              <div>
                <span className="font-bold mr-3" style={{color:'black'}}>{v.rank}</span> 
                <span className="font-normal text-gray-800">{v.title.length > 8 ? v.title.substring(0,8) + '..'   : v.title}</span>
              </div>
              {v.up_down === 'up' && <ArrowUpIcon className="text-red-600 h-3 w-3"></ArrowUpIcon>}
              {v.up_down === 'down' && <ArrowDownIcon className="text-blue-600 h-3 w-3"></ArrowDownIcon>}
              {v.up_down === 'same' && <div style={{paddingRight:"3px"}}>-</div>}
            </a>
          ))}
        </div>
      </div>    
      <div className="text-green-700 ml-2 grid justify-center mt-5" style={{fontSize: "14px"}}>
          {new Date().getFullYear()}.{new Date().getMonth()+1}.{new Date().getDate()} {new Date().getHours() }:{new Date().getMinutes() < 10 ? 0 : ''}{new Date().getMinutes()}분 기준
          </div>
      <div className="pt-2 pb-3 mx-auto grid justify-center">
        <a className="rounded-xl text-sm py-1 px-3 border-green-700 font-semibold text-green-700 cursor-pointer hover:bg-green-700 hover:text-white" href="https://mastventures.notion.site/a0fb1647c5fd497dadc1222bf086442a" style={{border: "1px solid"}} target="_blank">급상승 사용 설명서</a>
        <a className="text-sm py-1 font-semibold text-green-700 grid justify-center hover:text-green-900" href="https://www.notion.so/mastventures/2e34d5aed7564967bc50aa2e2170ac76" target="_blank" >v.1.0.9</a>
      </div>   
    </div>
  )

}