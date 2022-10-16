

  /* This example requires Tailwind CSS v2.0+ */
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export const AdminNav = () => {
  const router = useRouter();
  const [ tab, setTab ]= useState('lecture')
  
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  },[]);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

  
  return (
    <div className="fixed top-0 w-full border-b-2 pb-3 z-50 bg-white">
      <div  className="pt-3  flex gap-[200px] justify-center"> 
          {/* <div className={classNames(tab === '' ? 'text-green-500' : 'text-black', 'text-lg cursor-pointer hover:text-gray-500')} onClick={() =>{ router.push('/admin/lectureAdmin'); setTab('lecture')} }>핵심 강의 컨텐츠 수정</div> */}
          <div className={classNames(tab === 'lecture' ? 'text-green-500' : 'text-black', 'text-lg cursor-pointer hover:text-gray-500')} onClick={() =>{ router.push('/admin/lectureAdmin'); setTab('lecture')} }>핵심 강의 컨텐츠 발행</div>
          <div className={classNames(tab === 'review' ? 'text-green-500' : 'text-black', 'text-lg cursor-pointer hover:text-gray-500')}  onClick={() => {router.push('/admin/reviewAdmin'); setTab('review')  }}>성공 사례 컨텐츠 발행</div>
      </div>
    </div>
  )
}
