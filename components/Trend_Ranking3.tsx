import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid'

interface RakingProps {
  ranking: any;
}

export const TrendRanking3: React.FC<RakingProps> = ({
  ranking
}) => {
  const week = new Array('일', '월', '화', '수', '목', '금', '토');

  return (
    <div className=" sm:max-w-md sm:mx-auto bg-white my-2">
      
      <div className="pt-5">  
      <div className="text-md font-semibold">{ranking.title}</div>
        <div>
          {ranking.ranks.map((v:any,i:any)=> (
            <a className="flex items-center justify-between mt-2 cursor-pointer" style={{fontSize:"14px"}}
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${v.title}`} 
              target= "_blank"
            >
              <div>
                <span className="font-bold mr-2">{i+1}</span> 
                <span className="font-normal text-gray-800">{v.title}</span>
              </div>
              {v.up === 'up' && <ArrowUpIcon className="text-red-600 h-3 w-3"></ArrowUpIcon>}
              {v.up === 'down' && <ArrowDownIcon className="text-blue-600 h-3 w-3"></ArrowDownIcon>}
              {v.up === 'same' && <div style={{paddingRight:"3px"}}>-</div>}
               
            </a>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  )
}