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
import Phone from '../images/phoneImg.png';

const Container= styled.div`

`;

const DeskTopContainer = styled.div`
  
  display: none;
  

  @media (min-width: 768px) { 
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
  @media (min-width: 768px) { 
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px 0px 0px 0px;
`;

const MobilePhone = styled.div`
  display: block;
  padding-top: 70px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const AdminNav2 = () => {
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
          <MobileLogo className='mx-auto '>
            <div className="cursor-pointer  " onClick={() => history.push('/')}>
              <Image src={MobLogo}  width={192} height={44} layout="fixed"/>
            </div>
          </MobileLogo>
          {/* <MobilePhone onClick={()=> window.location.href = 'tel:010-8662-5465'}>
            <Image src={Phone} width="100%" height="17" layout="responsive" />
          </MobilePhone> */}
          {/* <HamMenu>
            <div className="cursor-pointer" onClick={() => history.push('/')}>
              <Image src={Ham}  width={30} height={30} layout="fixed"/>
            </div>
          </HamMenu> */}
        </MobileMenu>
      </MobileContainer>

      {/* 데스크탑 버전 */}
      <DeskTopContainer>
        
        <Menus>
          <Menu>
            <Logo className="cursor-pointer" onClick={() => history.push('/')}><Image src={MobLogo}  width={192} height={44} layout="fixed"/></Logo>
            <Features>
              <div>Admin 페이지입니다.</div>
              
              {/* <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/')}>업무 소개</div> */}
              <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/admin/lectureAdmin')}>핵심강의 글쓰기</div>
              <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/admin/reviewAdmin')}>성공사례 글쓰기</div>
              <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/admin/lecture')}>핵심 강의 수정</div>
              <div className="cursor-pointer hover:text-gray-600" onClick={() => history.push('/admin/review')}>성공사례 수정</div>
              {/* <NavButton>회원가입 / 로그인</NavButton> */}
            </Features>
          </Menu>
        </Menus>
      </DeskTopContainer>
    </Container>
  )
}
