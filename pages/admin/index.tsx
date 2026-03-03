import { NextPage } from 'next';
import React, { createRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorProps } from '@toast-ui/react-editor';
import { useRouter } from 'next/router';
import { AdminNav2 } from '@components/AdminNav2';

const Editor = dynamic<EditorProps>(() => import('../../components/ToastEditor'), { ssr: false });



const Admin: NextPage = () => {
  const router = useRouter();

  return (
    <div className="">
       
       <AdminNav2 />
       <div className="absolute w-screen h-screen flex justify-center items-center text-[30px]">모두다 행정사 Admin 페이지입니다.</div>
    </div>
    
  )
}

export default Admin;

<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script> 
<script type="text/javascript"> 
if (!wcs_add) var wcs_add={};
wcs_add["wa"] = "s_22b8d0fae23f";
if (!_nasa) var _nasa={};
if(window.wcs){
wcs.inflow();
wcs_do();
}
</script>
