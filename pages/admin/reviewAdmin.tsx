import { NextPage } from 'next';
import React, { createRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorProps } from '@toast-ui/react-editor';
import { useRouter } from 'next/router';
import { AdminNav } from '@components/AdminNav';

const Editor = dynamic<EditorProps>(() => import('../../components/ToastEditor'), { ssr: false });



const ReviewAdmin: NextPage = () => {
  const router = useRouter();

  return (
  <div>   
    <div className="mt-[23px] ml-[100px] flex items-center cursor-pointer hover:text-green-500" onClick={() => router.push('/admin')}>{'<'} 뒤로가기</div>
    <div className="w-[90%] mx-auto mt-[100px]"> 
      <div className="text-center text-2xl mb-10">성공사례 컨텐츠 글쓰기</div>  
      <Editor />
    </div>
  </div>
    
  )
}

export default ReviewAdmin;