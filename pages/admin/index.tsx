import { NextPage } from 'next';
import React, { createRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorProps } from '@toast-ui/react-editor';
import { useRouter } from 'next/router';
import { AdminNav } from '@components/AdminNav';

const Editor = dynamic<EditorProps>(() => import('../../components/ToastEditor'), { ssr: false });



const Admin: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen">
       
       <AdminNav />
    </div>
    
  )
}

export default Admin;