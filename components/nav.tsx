/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Image from 'next/image';
import DesktopLogo from '../images/desktopLogo.png';
import MobLogo from '../images/mobileLogo.png';
import { NavButton, NormalButton } from 'css/button';
import Ham from '../images/ham_menu.png';

const Container= styled.div`

`;

const DeskTopContainer = styled.div`
  display: none;
  @media (min-width: 640px) { 
    width: 100vw;
    height: 120px;
  
    position: fixed;
    top:0px;
    z-index: 10;
    background-color: #242527;
    border-bottom: 1px solid #828282;
  }
`;

const Menus = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
`;



const Menu = styled.div`
  width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  color: #E0E0E0;
`;

const Logo = styled.div`
  width: 122px;
  height:37px;
`;

const Features = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Button = styled.span`
  padding: 12px 36px;
  text-align: center;

  // font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;

  background: linear-gradient(93.86deg, #8A34F7 -0.78%, #0581FB 100%);
  border-radius: 12px;

  
`;
// 모바일

const MobileLogo = styled.div`
  padding: 15px 10px 10px 15px;
`;

const HamMenu = styled.div`
  padding: 10px;
`;


const MobileContainer = styled.div`
  position: fixed;
  background-color: #242527;
  width: 100vw;
  border-bottom: 0.3px solid #828282;

  @media (min-width: 640px) { 
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Nav = () => {
  const history = useRouter();
 

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  },[]);

  
  return (
    <Container>

      <MobileContainer>
        <MobileMenu>
          <MobileLogo>
            <div>
              <Image src={MobLogo}  width={24} height={21.71} layout="fixed"/>
            </div>
          </MobileLogo>
          <HamMenu>
            <div>
              <Image src={Ham}  width={30} height={30} layout="fixed"/>
            </div>
          </HamMenu>
        </MobileMenu>
      </MobileContainer>
      <DeskTopContainer>

        {/* 데스크탑 버전 */}
        <Menus>
          <Menu>
            <Logo><Image src={DesktopLogo}  width={122} height={37} layout="fixed"/></Logo>
            <Features>
              <div>평판 작성하기</div>
              <div>평판 조회하기</div>
              <div>결과 열람하기</div>
              <div>이용권 구매하기</div>
              <div>마이페이지</div>
              <NavButton>회원가입 / 로그인</NavButton>
            </Features>
          </Menu>
        </Menus>
      </DeskTopContainer>
    </Container>
  )
}
