import { Footer } from "@components/Footer";
import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import ReviewComponent from "@components/ReviewComponent";
import { NextPage } from "next";
import Image from "next/image";
import Banner from '../images/examplebanner.png';
import WebExample from '../images/sampleExmaple_web.png';
import WLecture from '../images/lectureBanner.png';
import MLecture from '../images/lectureMBanner.png';
import CiderComponent from "@components/CiderComponent";
import styled from "styled-components";

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

const Lecture: NextPage = () =>{
  return (
    <div>
      <Nav />
      <div className="sm:hidden">
        <div className="pt-20 mb-10">
          <Image src={MLecture} width="100%" height="30px" layout="responsive" />
        </div>
        <div className="grid justify-center mb-[29px] mt-[22px]">

          <MSearch placeholder="검색어를 입력해주세요." />
        </div>
        {[0,0,0].map((v) => (
          <CiderComponent />

        ))}
      </div>

      <div className="hidden sm:block">
        <div className="pt-32   px-20">
          <Image src={WLecture} width="100%" height="23" layout="responsive" />
        </div>
        <div className="grid justify-center mb-[60px] mt-[70px]">

          <Search placeholder="검색어를 입력해주세요." />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 px-24 md:px-32">
          {[0,0,0,0,0,0,0,0,0].map((v) => (
            <CiderComponent />

          ))}
        </div>
      </div>

      <div className="pb-20"></div>
      <Footer />
      <MobileFooter />
    </div>
  )
}

export default Lecture;