import { ArrowUpIcon, ArrowDownIcon, RefreshIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';

interface RakingProps {
  ranking: any;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
export const TrendCoinRanking: React.FC<RakingProps> = ({
  ranking
}) => {
  const week = new Array('일', '월', '화', '수', '목', '금', '토');
  const history = useRouter();
  return (
    <div className="px-5 sm:max-w-md sm:mx-auto bg-white my-2 shadow-md rounded-sm">
       <div className="flex justify-between items-center pt-5">  
        <div className="flex items-center">
          <div className="text-xl font-semibold" style={{padding: '0px 7px 0px 1px'}}>코인 급상승 순위</div>
        </div>
        <div className="cursor-pointer mb-1" onClick={() => window.location.reload()}>
          <div className="flex align-middle  px-1 text-sm border-gray-300 border bg-gray-100" style={{paddingTop:"2.2px"}}>
            <RefreshIcon className="text-gray-600 h-3 w-3 mr-1" style={{marginTop:"4.5px"}} ></RefreshIcon><span style={{paddingTop:"1px"}}> 새로고침</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">  
        <div>
          {ranking.ranking.filter((t:any, i:any)=> i < 5 ).map((v:any,i:any)=> (
            <a className="flex items-center justify-between mt-2 cursor-pointer hover:bg-gray-300" style={{fontSize:"16px", padding: '6px 0px 5px 0px'}}
              href={'https://cobak.co.kr' +v.videoId} 
              target= "_blank"
            >
              <div>
                <span className="font-bold mr-2">{i+1}</span> 
                <span className="font-normal text-gray-800">{v.name.length > 19 ? v.name.substring(0,19) + '..'   : v.name}</span>
              </div>
              <div className="flex items-center">
                <div className={classNames(v.rate.substring(0,1) === "+" ? 'text-red-600' : 'text-blue-600', 'pr-2')}>{v.rate}</div>
                {v.up === 'up' && <ArrowUpIcon className="text-red-600 h-3 w-3"></ArrowUpIcon>}
                {v.up === 'down' && <ArrowDownIcon className="text-blue-600 h-3 w-3"></ArrowDownIcon>}
                {v.up === 'same' && <div style={{paddingRight:"3px"}}>-</div>}
              </div>
            </a>
          ))}
        </div>
        {/* <div>
          {ranking.ranking.filter((t:any, i:any)=> i < 10 && i >4 ).map((v:any,i:any)=> (
            <a className="flex items-center justify-between mt-2 cursor-pointer hover:bg-gray-300" style={{fontSize:"14px"}}
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${v.name}`} 
              target= "_blank"
            >
              <div>
                <span className="font-bold mr-2">{i+6}</span> 
                <span className="font-normal text-gray-800">{v.name.length > 21 ? v.name.substring(0,21) + '..'   : v.name}</span>
              </div>
              <div>
                <div>{v.rate}</div>
                {v.up === 'up' && <ArrowUpIcon className="text-red-600 h-3 w-3"></ArrowUpIcon>}
                {v.up === 'down' && <ArrowDownIcon className="text-blue-600 h-3 w-3"></ArrowDownIcon>}
                {v.up === 'same' && <div style={{paddingRight:"3px"}}>-</div>}
              </div>
            </a>
          ))}
        </div> */}
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