import { Footer } from "@components/Footer";
import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import ReviewComponent from "@components/ReviewComponent";
import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Banner from '../images/examplebanner.png';
import WebExample from '../images/sampleExmaple_web.png';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import Example from '../images/sampleExample.png';
import Pagination from "@components/Pagination";
import useSWR, { useSWRConfig } from "swr";
import NoticeComponent from "@components/NoticeComponent";
const Search = styled.input`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  padding: 14px 16px;
  

  width: 634px;
  height: 48px;

  background: #FFFFFF;
  border: 1px solid #AEAEAE;
`;

const MSearch = styled.input`
  box-sizing: border-box;


  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;

  width: 316px;

  border: 0.5px solid #AEAEAE;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
interface ReviewResponse {
  ok: boolean;
  review: any[];
  count: any;
  notice: any;
}

interface NoticeResponse {
  ok: boolean;
  notice: any
}

const Review: NextPage = () =>{
  const { mutate } = useSWRConfig();
  const [ page, setPage ] = useState(1);
  const { data, mutate: boundMutate } = useSWR<ReviewResponse>(
      `/api/getReview?page=${page}`
  );
  

  return (
    <div>
      <Nav />
      <div className="sm:hidden">
        <div className="pt-20 mb-10">
          <Image src={Banner} width="100%" height="30px" layout="responsive" />
        </div>
        <div className="grid justify-center mb-[29px] mt-[22px]">
          <MSearch placeholder="검색어를 입력해주세요." />
        </div>
        {data?.notice ?   <NoticeComponent id={data?.notice?.id} title={data?.notice?.title} thumbnail={data?.notice?.thumbnail} createdAt={data?.notice?.createdAt}/> : null}
        {data?.review.map((v) => (
            <ReviewComponent id={v.id} title={v.title} thumbnail={v.thumbnail} createdAt={v.createdAt} />
          ))}
          
        <div className="flex justify-center gap-[30px] items-center">
          <div onClick={() => {
            if(page !== 1) {
              setPage(page-1)
            } else {
              alert('첫 페이지입니다.')
            }}}
            className="border rounded-md px-3 py-1 border-gray-500"
          >이전</div>
          <div>{page} / {Math.floor(parseInt(data?.count)/15) +1}</div>
          <div onClick={() => {
             if(page === parseInt(data?.count)/15 +1) {
              setPage(page+1)
            } else {
              alert('마지막 페이지입니다.')
            }
          } } className="border rounded-md px-3 py-1 border-gray-500">다음</div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="pt-32  mb-10 px-20">
          <Image src={WebExample} width="100%" height="23" layout="responsive" />
        </div>
        <div className="grid justify-center mb-[60px] mt-[70px]">

          <Search placeholder="검색어를 입력해주세요." />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-8 px-12 md:px-32">
        {data?.notice ?   <NoticeComponent id={data?.notice?.id} title={data?.notice?.title} thumbnail={data?.notice?.thumbnail} createdAt={data?.notice?.createdAt}/> : null}
          {data?.review.map((v) => (
            <ReviewComponent id={v.id} title={v.title} thumbnail={v.thumbnail} createdAt={v.createdAt}/>
          ))}
          {/* {[0,0,0,0,0,0,0,0,0].map((v) => (
            <ReviewComponent id={v.id} title={v.title} thumbnail={v.thumbnail} />

          ))} */}
        </div>
        <div className="flex justify-center gap-[30px] items-center">
          <div onClick={() => {
            if(page !== 1) {
              setPage(page-1)
            } else {
              alert('첫 페이지입니다.')
            }
          }}
            className="border rounded-md px-3 py-1 border-gray-500"
          >이전</div>
          <div>{page} / {Math.floor(parseInt(data?.count)/15) +1} </div>
          <div onClick={() => {
            if(page === parseInt(data?.count)/15 +1) {
              setPage(page+1)
            } else {
              alert('마지막 페이지입니다.')
            }
          } } className="border rounded-md px-3 py-1 border-gray-500">다음</div>
        </div>

        {/* <div>더 보기</div> */}
      </div>

      <div className="pb-20"></div>
      <Footer />
      <MobileFooter />
    </div>
  )
}

export default Review;