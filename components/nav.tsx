/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Image from 'next/image';
import DesktopLogo from '../images/desktopLogo.png';
import MobLogo from '../images/mobileLogo.png';
import { NavButton, NormalButton } from 'css/button';
import Ham from '../images/ham_menu.png';
import Wphone from '../images/Wphone.png';
const Container= styled.div`

`;

const DeskTopContainer = styled.div`
  
  display: none;
  

  @media (min-width: 640px) { 
    display: block;
    width: 100vw;
    height: 100px;
    z-index: 99;
    border-bottom: 0.5px solid #8A8A8A;
    position: fixed;
    top: 0px;
    background-color: white;
  }
  


`;

const Menus = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
`;



const Menu = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  color: #000000;
`;

const Logo = styled.div`
  width: 197;
  height:44;
`;

const Features = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
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
  
`;

const HamMenu = styled.div`
  padding: 10px;
`;


const MobileContainer = styled.div`
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 72px;
  border-bottom: 0.5px solid #8A8A8A;
  z-index: 99;
  @media (min-width: 640px) { 
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0px 0px 10px;
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
            <div className="cursor-pointer" onClick={() => history.push('/')}>
              <Image src={MobLogo}  width={192} height={44} layout="fixed"/>
            </div>
          </MobileLogo>
          <HamMenu>
            <div className="cursor-pointer" onClick={() => history.push('/')}>
              <Image src={Ham}  width={30} height={30} layout="fixed"/>
            </div>
          </HamMenu>
        </MobileMenu>
      </MobileContainer>

      {/* 데스크탑 버전 */}
      <DeskTopContainer>
        
        <Menus>
          <Menu>
            <Logo className="cursor-pointer" onClick={() => history.push('/')}><Image src={MobLogo}  width={192} height={44} layout="fixed"/></Logo>
            <Features>
              <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/intro')}>모두다 소개</div>
              {/* <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/')}>업무 소개</div> */}
              <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/lecture')}>사이다 강의</div>
              <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/review')}>성공사례</div>
              <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/apply')}>상담신청</div>
              {/* <NavButton>회원가입 / 로그인</NavButton> */}
            </Features>
              <div className="pt-3"><Image src={Wphone}  width={250} height={110} layout="fixed"/></div>
          </Menu>
        </Menus>
      </DeskTopContainer>
    </Container>
  )
}
