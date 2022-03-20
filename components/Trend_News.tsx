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
  news: any;
}
//video thumbnail
//title
// date  

export const TrendNews: React.FC<RakingProps> = ({
  news
}) => {
  const week = new Array('일', '월', '화', '수', '목', '금', '토');
  const history = useRouter();
  return (
    <div className="sm:max-w-md sm:mx-auto bg-white pb-5 shadow-md rounded-sm" style={{padding: '0px 15px 4px 15px'}}>
      <div className="flex items-center pt-5" style={{padding:"15px 5px 0px 5px"}}>  
        <div className="text-xl font-semibold pr-2">급상승 기획자 뉴스</div>
        <div className="text-xs text-gray-500">급상승 기획자가 만든 콘텐츠 입니다.</div>
      </div>
      {/* <div className="grid justify-center">
        <span className=" px-1 text-white mt-2 bg-blue-500" style={{fontSize:"13px"}}>현재 가장 많이 보는 뉴스입니다.</span>
      </div> */}
      <div className="grid grid-cols-2 gap-2" > 
      {/* news.ranking */}
        <div>
          <a style={{fontSize:"16px", lineHeight:'19px', padding: '0px 5px 12px 5px'}}
            href={news.news.link1} 
            target= "_blank"
          >
            <div style={{}}>
              <img src={news.news.title1Image} className="w-full rounded-md pb-1" />
            </div>
            <div className="px-1">
              <Text1 style={{color:'#303038', padding: '8px 6px 0px 2px'}}>{news.news.title1}</Text1>
            </div>
          </a>
        </div>
        <div>
          <a style={{fontSize:"16px", lineHeight:'19px', padding: '0 5px 12px 5px'}}
            href={news.news.link2} 
            target= "_blank"
          >
            <div style={{}}>
              <img src={news.news.title2Image} className="w-full rounded-md pb-1 " />
            </div>
            <div className="px-1">
              <Text1 style={{color:'#303038', padding: '8px 6px 0px 2px'}}>{news.news.title2}</Text1>
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}