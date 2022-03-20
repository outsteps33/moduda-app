import PixelImage from '../images/pixel.png';
import Image from 'next/image';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';



export const Pixel = () => {
  const [ isHover, setIsHover ] = useState(false);

  const IsHover = () => {
    setIsHover(true)
    console.log(isHover)
  }

  return (
    <div className="sm:max-w-md sm:mx-auto bg-white shadow-md rounded-sm mt-5">
      <div className="flex ">
        <div className="flex-1"></div>
        <div style={{width:'200px', height:'200px'}} className="z-0">
          <Image src={require('../images/pixel.png')}/>
        </div>
        <div className="relative flex-1">
          <ExclamationCircleIcon className="text-gray-500 w-5 h-5 absolute right-0" onMouseOver={() => IsHover()} onMouseLeave={() => setIsHover(false)} />
          {isHover && <div className=" ml-2 z-20  mt-1  bg-white border p-2" style={{width:'200px'}}>이곳은 광고가 게재될 공간입니다. 그리고 광고자리에 대한 소유권은 분양중입니다.</div>}
        </div>
      </div>
    </div>
  )
}