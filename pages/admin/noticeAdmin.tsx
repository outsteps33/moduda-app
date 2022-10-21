import { NextPage } from 'next';
import React, { createRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorProps } from '@toast-ui/react-editor';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';




const LectureAdmin: NextPage = () => {
  const { register, getValues, handleSubmit, control, formState: { errors } } = useForm();
  const router = useRouter();
  // const 

  return (
    <div>
      {/* <AdminNav /> */}
      <div className="mt-[23px] ml-[100px] flex items-center cursor-pointer hover:text-green-500" onClick={() => router.push('/admin')}>{'<'} 뒤로가기</div>
      <div className="w-[90%] mx-auto mt-[100px]"> 
        {/* <Input */}
        
      </div>
    </div>
    
  )
}

export default LectureAdmin;