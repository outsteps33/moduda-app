/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const FooterContainer = styled.div`
  width: 100vw;
 
  @media (max-width: 640px) { 
    height: 100px;
  }
  height: 200px;
  bottom: 0;
  // background: #2D2E42; 


`;

const FooterDescriptions = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  padding-top: 50px;
 
  padding-bottom: 50px;
`;

const FooterDescription = styled.div`
  @media (min-width: 640px) { 
    text-align: center;
    width: 100vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    color: #8A8A8A;
  
  }  
`;

export const Footer = () => {
  const history = useRouter();
  
  return (
    <FooterContainer className="border-t-[1px]">
      <FooterDescriptions>
        <FooterDescription>
          사업자등록번호 : 416-08-53233 | 대표자 : 송범석 | 개인정보보호책임자 : 송범석 <br />
          대표번호 : 010-8992-5465 ( AM 08:00 - PM 11:00 )<br />
            © 2022 CCS, Inc. All rights reserved.<br />
            Copyright 2022 모두다행정사 All Right Reserved <br />
모두다행정사는 ‘전자상거래 등의에서의 소비자보호에 관한 법률’에 따라 통신판매업 신고 등록을 마친 전문가 입니다.<br />
            서비스이용약관 | 개인정보취급방침 | 이메일무단수집거부<br />
        </FooterDescription>
      </FooterDescriptions>
    </FooterContainer>
  )
}
