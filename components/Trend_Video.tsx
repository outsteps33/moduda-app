import { RefreshIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';

import styled from 'styled-components';

export const Text = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

interface RakingProps {
  videos: any;
}
//video thumbnail
//title
// date  

export const TrendVideos: React.FC<RakingProps> = ({
  videos
}) => {
  const week = new Array('일', '월', '화', '수', '목', '금', '토');
  const history = useRouter();
  return (
    <div className="px-5 sm:max-w-md sm:mx-auto bg-white my-2 pb-5 shadow-md rounded-sm">
      <div className="flex justify-between items-center pt-5" style={{padding: '15px 5px 0px 5px'}}>  
        <div className="flex items-center">
          <div className="text-xl font-semibold">유튜브 동영상 순위</div>
        </div>
        <div className="cursor-pointer mb-1" onClick={() => window.location.reload()}>
          <div className="flex align-middle  px-1 text-sm border-gray-300 border bg-gray-100" style={{paddingTop:"2.2px"}}>
            <RefreshIcon className="text-gray-600 h-3 w-3 mr-1" style={{marginTop:"4.5px"}} ></RefreshIcon><span style={{paddingTop:"1px"}}> 새로고침</span>
          </div>
        </div>
      </div>
      <div className="pt-3 ">  
        <div className="pt-3 grid grid-cols-2">
          {videos.ranking.filter((t:any, i:any)=> i < 8 ).map((v:any,i:any)=> (
       
             <a style={{fontSize:"16px", lineHeight:'19px', padding: '15px 5px 12px 5px'}}
             href={`https://www.youtube.com/watch?v=${v.videoId}`} 
             target= "_blank"
           >
             <div style={{}}>
                <img className="w-full rounded-md pb-1" src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}></img >
             </div>
             <div className="px-1">
               {/* <span style={{color:'#303038', padding: '8px 6px 0px 2px', WebkitLineClamp: 2, display: '-webkit-box'}}>{v.name}</span> */}
               <Text>{v.name}</Text>
             </div>
           </a>
          ))}
        </div>
        
        <div></div>
      </div>
      <div className="pt-2 pb-4 mx-auto grid justify-center">
        <div className="text-green-700 pb-2" style={{fontSize: "14px"}}>
          {new Date().getFullYear()}.{new Date().getMonth()+1}.{new Date().getDate()} {new Date().getHours() }:{new Date().getMinutes() < 10 ? 0 : ''}{new Date().getMinutes()}분 기준
        </div>
        <a className="rounded-xl text-sm py-1 px-3 border-green-700 font-semibold text-green-700 cursor-pointer text-center hover:bg-green-700 hover:text-white" href="https://mastventures.notion.site/a0fb1647c5fd497dadc1222bf086442a" style={{border: "1px solid"}} target="_blank">급상승 사용 설명서</a>
      </div>
    </div>
  )
}