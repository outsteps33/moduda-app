import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Banner from '../images/introBanner.png';
import IntroImage from '../images/introImage.png';
import IntroMImage from '../images/IntroMImage.png';
import HistoryImage from '../images/historyImage.png';
import styled from 'styled-components';
import Youtube from 'react-youtube';
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const History = styled.div`
  @media (min-width: 640px) { 
  }
`;

const mobile_opts = {
  height: '246',
  width: '100%',
};

const opts = {
  height: '390',
  width: '640',
};
const Intro: NextPage = () =>{
  const [ tab , setTab] = useState('인사말');
  return (
    <div>
      <Nav />
      <div className="pt-16 sm:pt-20 ">
        <Image src={Banner} width="100" height="20" layout="responsive" />
      </div>
      <div className="flex justify-center mt-20 ">
        <div className={classNames(
            tab === '인사말' ? 'bg-black text-white' : 'bg-gray-300 text-gray-500',"flex justify-center items-center cursor-pointer")} onClick={() => setTab('인사말')}  style={{width:'296px', height:'60px'}}>인사말</div>
        <div className={classNames(
            tab === '연혁' ? 'bg-black text-white' : 'bg-gray-300 text-gray-500',"flex justify-center items-center cursor-pointer")} onClick={() => setTab('연혁')} style={{width:'296px', height:'60px'}}>연혁</div>
      </div>

      {tab ==='인사말' && <>
        <div className="grid justify-center mt-20 text-center">
          <div  style={{color:'#797979', fontSize:'25px'}}>인사말</div>
          <div className="grid justify-center mt-5">
            <div className="" style={{width:'29px', height:'4px', backgroundColor:'#797979'}}></div>
          </div>
          <div className="mt-10 text-lg" style={{color:'#9B9B9B'}} >안녕하세요 <span style={{color:'#0B45AE'}}>모두다 행정사</span> 입니다.</div>
          <div style={{color:'#9B9B9B'}} >모두다 행정사에 방문해주신 여러분께 감사드립니다.</div>
        </div>
        <div className=" sm:hidden p-4 ">
          <Youtube opts={mobile_opts} videoId={'M-4ag-o4H2U'}  />
        </div>
        <div className="hidden sm:grid justify-center mt-[20px]">
          <Youtube opts={opts} videoId={'M-4ag-o4H2U'}  />
        </div>
        <div className="pt-16 hidden sm:block grid-cols-5sm:pt-20 pb-[73px] md:pb-0 ">
          <Image src={IntroImage} width="100" height="60" layout="responsive" />
        </div>
        <div className="pt-16 sm:hidden pb-[73px] md:pb-0 ">
          <Image src={IntroMImage} width="100" height="180" layout="responsive" />
        </div>
        
      </>}
      {tab ==='연혁' && <div className="grid justify-center mt-20">
        
        <History className="hidden sm:grid" style={{width:'800px'}}>
          <Image src={HistoryImage} width="20" height="55" layout="responsive" />
        </History>
        <History className=" sm:hidden" style={{width:'98vw'}}>
          <Image src={HistoryImage} width="20" height="55" layout="responsive" />
        </History>
      </div>}
      
      <MobileFooter/>
    </div>
  )
}

export default Intro;