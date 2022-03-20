import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid'

interface RakingProps {
  ranking: any;
}

export const TrendRanking2: React.FC<RakingProps> = ({
  ranking
}) => {
  const week = new Array('일', '월', '화', '수', '목', '금', '토');

  return (
    <div className="px-5 sm:max-w-md sm:mx-auto bg-white my-2">
      <div className="flex align-bottom justify-center pt-5">  
        <div className="text-xl font-semibold">{ranking.title}</div>
        {/* <div className="text-sm  text-gray-600">(전체연령, 현재기준)</div> */}
      </div>
      <div className="text-gray-400 grid  mt-2" style={{fontSize:"13px"}}>현재 시간 기준 전체연령이 가장 많이 검색한 결과입니다.</div>
      <div className="text-green-700 grid  " style={{fontSize: "14px"}}>
        {new Date().getFullYear()}.{new Date().getMonth()+1}.{new Date().getDate()} {new Date().getHours() }:{new Date().getMinutes() < 10 ? 0 : ''}{new Date().getMinutes()} 기준
      </div>
      
        <div>
          {ranking.ranking.map((v:any,i:any)=> (
            <a className="flex items-center justify-between mt-2 cursor-pointer" style={{fontSize:"14px"}}
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${v.name}`} 
              target= "_blank"
            >
              <div>
                <span className="font-bold mr-2">{i+1}</span> 
                <span className="font-normal text-gray-800">{v.name.length > 100 ? v.name.substring(0,100) + '...'  : v.name}</span>
              </div>
              {/* {v.up === 'up' && <ArrowUpIcon className="text-red-600 h-3 w-3"></ArrowUpIcon>}
              {v.up === 'down' && <ArrowDownIcon className="text-blue-600 h-3 w-3"></ArrowDownIcon>}
              {v.up === 'same' && <div style={{paddingRight:"3px"}}>-</div>} */}
            </a>
          ))}
        </div>
      <div className="py-4 mx-auto grid justify-center">
        <span className="rounded-xl text-sm py-1 px-3 border-green-700 font-semibold text-green-700" style={{border: "1px solid"}}>네이버에서 보기</span>
      </div>
    </div>
  )
}