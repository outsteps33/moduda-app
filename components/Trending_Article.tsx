import { RefreshIcon } from "@heroicons/react/solid";
import { url } from "inspector";
import { useRouter } from 'next/router';

import styled from 'styled-components';

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
interface RakingProps {
  article: any;
}
//video thumbnail
//title
// date  

export const TrendArticles: React.FC<RakingProps> = ({
  article
}) => {
  const week = new Array('일', '월', '화', '수', '목', '금', '토');
  const history = useRouter();
  return (
    <div className="sm:max-w-md sm:mx-auto bg-white pb-5 shadow-md rounded-sm" style={{padding: '0px 15px 4px 15px'}}>
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
      {/* <div className="grid justify-center">
        <span className=" px-1 text-white mt-2 bg-blue-500" style={{fontSize:"13px"}}>현재 가장 많이 보는 뉴스입니다.</span>
      </div> */}
      <div className="pt-3 grid grid-cols-2" > 
      
          {article.ranking.filter((t:any, i:any)=> i < 2 ).map((v:any,i:any)=> (
            <a style={{fontSize:"16px", lineHeight:'19px', padding: '0 5px 12px 5px'}}
              href={`https://news.zum.com${v.videoId}`} 
              target= "_blank"
            >
              <div style={{}}>
                <img src={v.image.includes('https') ? v.image : 'https:' + v.image} className="w-full rounded-md pb-1" />
              </div>
              <div className="px-1">
                <Text1 style={{color:'#303038', padding: '8px 6px 0px 2px'}}>{v.name}</Text1>
                {/* <span style={{color:'#303038', padding: '8px 6px 0px 2px'}}>{v.name.length > 25 ? v.name.substring(0,25) + '..'  : v.name}</span> */}
              </div>
            </a>
          ))}
        
        <div></div>
      </div>
      <div className="pt-2 pb-2"> 
        <div>
          {article.ranking.filter((t:any, i:any)=> i < 6 && i >1 ).map((v:any,i:any)=> (
            <div style={{ padding: '11px 6px 10px 2px', borderTop:'1px solid #efeff0'}}>
              <a className="" 
                href={`${v.videoId}`} 
                target= "_blank"
              >
                <Text2 className="text-gray-800 " style={{fontSize:'16px'}}>{v.name}</Text2>
                {/* <span {v.name.length > 28 ? v.name.substring(0,28) + '..'  : v.name}</span> */}
              </a>
            </div>
          ))}
        </div>
        
        <div></div>
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