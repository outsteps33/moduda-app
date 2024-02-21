/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Logo from '../images/black_logo.png';
import Image from 'next/image';

const FooterContainer = styled.div`
  width: 100vw;
  padding-top:10px;
  margin-bottm: 200px;
  @media (max-width: 768px) { 
    padding-bottm: 10px;
  }
  bottom: 0;
  // background: #2D2E42; 


`;

const FooterDescriptions = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  // padding-top: 50px;
 
  padding-bottom: 10px;
`;

const FooterDescription = styled.div`
  @media (min-width: 768px) { 
    text-align: center;
    width: 100vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #8A8A8A;
  
  }  
`;

export const Footer = () => {
  const history = useRouter();
  return (
    <FooterContainer className="border-t-[1px] ">
      <FooterDescriptions>
        <FooterDescription>
          <div className="sm:pt-1 hidden sm:grid sm:justify-center mb-[3px]">
            <Image src={Logo}  width={200} height={44.12} layout="fixed"/>
          </div>
          <div className=" sm:hidden grid justify-center ">
            <Image src={Logo}  width={151} height={34.09} layout="fixed"/>
          </div>
          <div className="text-[12px] sm:text-[15px] text-center mt-[2px] text-gray-500">

            사업자등록번호 : 418-08-53233 <br /> 대표자 : 송범석 | 개인정보보호책임자 : 송범석 <br />
            대표번호 : 010-8662-5465 ( AM 08:00 - PM 11:00 )<br />
              © 2022 CCS, Inc. All rights reserved.<br />
              Copyright 2022 모두다행정사 All Right Reserved <br />
            모두다행정사는 ‘전자상거래 등의에서의 소비자보호에 관한 법률’에 따라 통신판매업 신고 등록을 마친 전문가 입니다.<br />
              서비스이용약관 | 개인정보취급방침 | 이메일무단수집거부<br />
          </div>
        </FooterDescription>
      </FooterDescriptions>
    </FooterContainer>
  )
}
