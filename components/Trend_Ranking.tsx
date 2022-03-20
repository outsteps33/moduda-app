import { ArrowUpIcon, ArrowDownIcon, RefreshIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';

import styled from 'styled-components';

const Text1 = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;
interface RakingProps {
  ranking: any;
}

export const TrendRanking: React.FC<RakingProps> = ({
  ranking
}) => {
  const week = new Array('일', '월', '화', '수', '목', '금', '토');
  const history = useRouter();
  return (
    <div className="px-5 sm:max-w-md sm:mx-auto bg-white shadow-md rounded-sm">
      <div className="flex justify-between items-center pt-5">  
        <div className="flex items-center">
          <div className="text-xl font-semibold ">{ranking.title}</div>
        </div>
        <div className="cursor-pointer mb-1" onClick={() => window.location.reload()}>
          <div className="flex align-middle  px-1 text-sm border-gray-300 border bg-gray-100" style={{paddingTop:"2.2px"}}>
            <RefreshIcon className="text-gray-600 h-3 w-3 mr-1" style={{marginTop:"4.5px"}} ></RefreshIcon><span style={{paddingTop:"1px"}}> 새로고침</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 pt-3 gap-4">  
        <div>
          {ranking.ranking.filter((t:any, i:any)=> i < 5 ).map((v:any,i:any)=> (
            <a className="flex items-center justify-between cursor-pointer hover:bg-gray-300" style={{fontSize:"16px", padding: '9px 0px 8px 0px'}}
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${v.name}`} 
              target= "_blank"
            >
              <div>
                <span className="font-bold mr-3" style={{color:'#03c75a'}}>{i+1}</span> 
                <span className="font-normal text-gray-800">{v.name.length > 8 ? v.name.substring(0,8) + '..'   : v.name}</span>
              </div>
              {v.up === 'up' && <ArrowUpIcon className="text-red-600 h-3 w-3"></ArrowUpIcon>}
              {v.up === 'down' && <ArrowDownIcon className="text-blue-600 h-3 w-3"></ArrowDownIcon>}
              {v.up === 'same' && <div style={{paddingRight:"3px"}}>-</div>}
            </a>
          ))}
        </div>
        <div>
          {ranking.ranking.filter((t:any, i:any)=> i < 10 && i >4 ).map((v:any,i:any)=> (
            <a className="flex items-center justify-between cursor-pointer hover:bg-gray-300" style={{fontSize:"16px", padding: '9px 0px 8px 0px'}}
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${v.name}`} 
              target= "_blank"
            >
              <div>
                <span className="font-bold mr-3">{i+6}</span> 
                <span className="font-normal text-gray-800">{v.name.length > 8 ? v.name.substring(0,8) + '..'   : v.name}</span>
              </div>
              {v.up === 'up' && <ArrowUpIcon className="text-red-600 h-3 w-3"></ArrowUpIcon>}
              {v.up === 'down' && <ArrowDownIcon className="text-blue-600 h-3 w-3"></ArrowDownIcon>}
              {v.up === 'same' && <div style={{paddingRight:"3px"}}>-</div>}
            </a>
          ))}
        </div>
        <div></div>
      </div>
      <div className="text-green-700 ml-2 grid justify-center" style={{fontSize: "14px"}}>
          {new Date().getFullYear()}.{new Date().getMonth()+1}.{new Date().getDate()} {new Date().getHours() }:{new Date().getMinutes() < 10 ? 0 : ''}{new Date().getMinutes()}분 기준
          </div>
      <div className="pt-2 pb-3 mx-auto grid justify-center">
        <a className="rounded-xl text-sm py-1 px-3 border-green-700 font-semibold text-green-700 cursor-pointer hover:bg-green-700 hover:text-white" href="https://mastventures.notion.site/a0fb1647c5fd497dadc1222bf086442a" style={{border: "1px solid"}} target="_blank">급상승 사용 설명서</a>
        <a className="text-sm py-1 font-semibold text-green-700 grid justify-center hover:text-green-900" href="https://www.notion.so/mastventures/2e34d5aed7564967bc50aa2e2170ac76" target="_blank" >v.1.0.9</a>
      </div>
    </div>
  )
}