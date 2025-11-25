/* eslint-disable react/jsx-key */
/* This example requires Tailwind CSS v2.0+ */
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Logo from '../images/black_logo.png';
import Image from 'next/image';

const FooterContainer = styled.div`
  width: 100vw;
  padding-top: 10px;
  margin-bottom: 200px;
  @media (max-width: 768px) { 
    padding-bottom: 10px;
  }
  bottom: 0;
`;

const FooterDescriptions = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
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
            <Image src={Logo} width={200} height={44.12} layout="fixed" />
          </div>
          <div className="sm:hidden grid justify-center ">
            <Image src={Logo} width={151} height={34.09} layout="fixed" />
          </div>

          {/* 텍스트 영역 */}
          <div className="text-center mt-[2px] text-gray-500">
            {/* 기본 정보 (기존과 비슷한 크기) */}
            <div className="text-[16px] sm:text-[15px]">
              사업자등록번호 : 418-08-53233 <br />
              대표자 : 송범석 | 개인정보보호책임자 : 송범석 <br />
              대표번호 : 010-8662-5465 ( AM 08:00 - PM 11:00 )<br />
            </div>

            {/* 글자를 더 크게 할 문장 */}
            <div className="mt-[4px] text-[16px] sm:text-[18px] font-semibold">
              모두다행정사의 주 업무인 행정심판은 온라인 접수로 진행되어 전국 업무가 가능합니다(제주도 포함)
              <br />
            </div>

            {/* 글자를 더 작게 할 하단 정보 */}
            <div className="mt-[4px] text-[8px] sm:text-[12px] leading-relaxed">
              전북특별자치도 전주시 덕진구 만성로 128 1동 4층 405-B호<br />
              © 2022 CCS, Inc. All rights reserved.<br />
              Copyright 2022 모두다행정사 All Right Reserved <br />
              모두다행정사는 ‘전자상거래 등의에서의 소비자보호에 관한 법률’에 따라 통신판매업 신고 등록을 마친 전문가 입니다.<br />
              서비스이용약관 | 개인정보취급방침 | 이메일무단수집거부<br />
            </div>
          </div>
        </FooterDescription>
      </FooterDescriptions>
    </FooterContainer>
  );
};
