

  /* This example requires Tailwind CSS v2.0+ */
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export const AdminNav = () => {
  const router = useRouter();
  const [ tab, setTab ]= useState('')
  
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
    <div className=" pb-3 z-50 bg-white">
      <div className="flex justify-center text-2xl pb-[50px] font-semibold text-blue-500">모두다행정사 Admin </div>
      <div  className="pt-3  flex flex-col gap-[50px] justify-center"> 
          {/* <div className={classNames(tab === '' ? 'text-green-500' : 'text-black', 'text-lg cursor-pointer hover:text-gray-500')} onClick={() =>{ router.push('/admin/lectureAdmin'); setTab('lecture')} }>핵심 강의 컨텐츠 수정</div> */}
          <div className={classNames(tab === 'lecture' ? 'text-green-500' : 'text-black', 'text-xl border border-black px-4 py-2 rounded-md cursor-pointer hover:text-green-500 hover:border-green-500')} onClick={() =>{ router.push('/admin/lectureAdmin'); setTab('lecture')} }>핵심 강의 컨텐츠 발행</div>
          <div className={classNames(tab === 'review' ? 'text-green-500' : 'text-black', 'text-xl border border-black px-4 py-2 rounded-md cursor-pointer hover:text-green-500 hover:border-green-500')}  onClick={() => {router.push('/admin/reviewAdmin'); setTab('review')  }}>성공 사례 컨텐츠 발행</div>
          <div className={classNames(tab === 'notice' ? 'text-green-500' : 'text-black', 'text-xl border border-black px-4 py-2 rounded-md cursor-pointer hover:text-green-500 hover:border-green-500')}  onClick={() => {router.push('/admin/noticeAdmin'); setTab('notice')  }}>성공 사례 컨텐츠 발행</div>
      </div>
    </div>
  )
}
