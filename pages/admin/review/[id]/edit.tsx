import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { EditorProps } from '@toast-ui/react-editor';
import ToastEditor from '@components/ToastEditor';
import useUser from '@libs/client/useUser';
import useSWR from 'swr';
import { Nav } from '@components/nav';

const Editor = dynamic(() => import('@components/ToastReviewUpdateEditor'), { 
  ssr: false 
});

const Write:NextPage = () => {
  const router = useRouter();
  const { data, mutate: boundMutate } = useSWR( router.query.id ?
    `/api/getOneReview?id=${router.query.id}` : null
);
  const [ type, setType ] = useState('기능구현');
  
  console.log(data)


  return (
    <div>
      <Nav />
      <Editor id={data?.review?.id} previousTitle={data?.review?.title} previousthumb={data?.review?.thumbnail} contents={data?.review?.content}  />
    </div>
  );
}

export default Write;