import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { EditorProps } from '@toast-ui/react-editor';
import ToastEditor from '@components/ToastEditor';
import useUser from '@libs/client/useUser';
import useSWR from 'swr';
import { AdminNav2 } from '@components/AdminNav2';

const Editor = dynamic(() => import('@components/ToastLectureUpdateEditor'), { 
  ssr: false 
});

const Write:NextPage = () => {
  const router = useRouter();
  const { data, mutate: boundMutate } = useSWR( router.query.id ?
    `/api/getOneLecture?id=${router.query.id}` : null
);
  
  console.log(data)


  return (
    <div>
      <AdminNav2 />
      <Editor id={data?.lecture?.id} previousTitle={data?.lecture?.title} previousthumb={data?.lecture?.thumbnail} contents={data?.lecture?.contents}  />
    </div>
  );
}

export default Write;

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
