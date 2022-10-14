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
const Review: NextPage = () =>{
  const items= [{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  }];

  

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
        {[0,0,0].map((v) => (
          <ReviewComponent />

        ))}
        <Pagination />
      </div>

      <div className="hidden sm:block">
        <div className="pt-32  mb-10 px-20">
          <Image src={WebExample} width="100%" height="23" layout="responsive" />
        </div>
        <div className="grid justify-center mb-[60px] mt-[70px]">

          <Search placeholder="검색어를 입력해주세요." />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 px-24 md:px-32">
          {[0,0,0,0,0,0,0,0,0].map((v) => (
            <ReviewComponent />

          ))}
        </div>
        <Pagination />
        {/* <div>더 보기</div> */}
      </div>

      <div className="pb-20"></div>
      <Footer />
      <MobileFooter />
    </div>
  )
}

export default Review;