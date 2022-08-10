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
  position: fixed;
  bottom: 0;
  background: #2D2E42; 


`;

const FooterDescriptions = styled.div`
  display: grid;
  place-content: center;
  height: 100%;

 
  
`;

const FooterDescription = styled.div`
  @media (min-width: 640px) { 
   
    width: 100vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    color: #E0E0E0;
  
  }  
`;

export const Footer = () => {
  const history = useRouter();
  
  return (
    <FooterContainer>
      <FooterDescriptions>
        <FooterDescription>
            (주)추천서 (대표 제준호) | 주소 : 서울시 구로구 디지털로31길 38-21 | 사업자등록번호 : 123-45-67890 <br />
            © 2022 CCS, Inc. All rights reserved.<br />
            추천서 이용약관 | 개인정보처리방침<br />
        </FooterDescription>
      </FooterDescriptions>
    </FooterContainer>
  )
}
