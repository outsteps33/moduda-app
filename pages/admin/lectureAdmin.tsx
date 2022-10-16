import { NextPage } from 'next';
import React, { createRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorProps } from '@toast-ui/react-editor';
import { useRouter } from 'next/router';
import { AdminNav } from '@components/AdminNav';

const Editor = dynamic<EditorProps>(() => import('../../components/ToastLectureEditor'), { ssr: false });



const LectureAdmin: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <AdminNav />
      <div className="w-[90%] mx-auto mt-[100px]"> 
        <div className="text-center text-2xl mb-10">핵심 강의 컨텐츠 글쓰기</div>  
        <Editor />
        
      </div>
    </div>
    
  )
}

export default LectureAdmin;