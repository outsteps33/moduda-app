import { Footer } from "@components/Footer";
import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import ReviewComponent from "@components/ReviewComponent";
import { NextPage } from "next";
import Image from "next/image";
import Banner from '../../images/examplebanner.png';
import WLecture from '../../images/lectureBanner.png';
import MLecture from '../../images/lectureMBanner.png';
import CiderComponent from "@components/CiderComponent";
import styled from "styled-components";
import { useState } from "react";
import useSWR from "swr";
import AdminLectureComponent from "@components/AdminLectureComponent";
import { AdminNav2 } from "@components/AdminNav2";

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

interface LecutreResponse {
  ok: boolean;
  lecture: any[];
  count: any;
}

const Lecture: NextPage = () =>{
  const [ page, setPage ] = useState(1);
  const { data, mutate: boundMutate } = useSWR<LecutreResponse>(
      `/api/getLecture?page=${page}`
  );
  return (
    <div>
      <AdminNav2 />
      <div className="sm:hidden">
        <div className="pt-20 mb-10">
          <Image src={MLecture} width="100%" height="30px" layout="responsive" />
        </div>
        <div className="grid justify-center mb-[29px] mt-[22px]">

          <MSearch placeholder="검색어를 입력해주세요.s" />
        </div>
        {data?.lecture.map((v) => (
            <AdminLectureComponent id={v.id} title={v.title} thumbnail={v.thumbnail} createdAt={v.createdAt}  />
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
        <div className="pt-32   px-20">
          <Image src={WLecture} width="100%" height="23" layout="responsive" />
        </div>
        <div className="grid justify-center mb-[60px] mt-[70px]">

          <Search placeholder="검색어를 입력해주세요." />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-8 px-12 md:px-32">
          {data?.lecture.map((v) => (
            <AdminLectureComponent id={v.id} title={v.title} thumbnail={v.thumbnail} createdAt={v.createdAt}  />
          ))}
        </div>
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

      <div className="pb-20"></div>
      <Footer />
      <MobileFooter />
    </div>
  )
}

export default Lecture;