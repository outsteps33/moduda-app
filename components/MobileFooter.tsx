import Image from 'next/image';
import styled from 'styled-components';
import Home from '../images/home.png';
import Search from '../images/search.png';
import Write from '../images/write.png';
import Open from '../images/open.png';
import User from '../images/user.png';
import { useRouter } from 'next/router';
import Talk from '../images/Naver_Talk.png';
import Kakao from '../images/kaimg.png';

import Call from '../images/call.png';
const Footer = styled.div`
  position: fixed;
  bottom: 0px;

`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 4px 0px;

  position: absolute;
  width: 100vw;
  height: 70px;
  bottom: 0px;


  background: #232328;

  border-top: 0.3px solid #828282;

  @media (min-width: 768px) { 
    display: none;
  }
`;


export const MobileFooter = () => {
  const history = useRouter();
  return (
    <Footer>
      <div className="fixed bottom-[80px] right-[10px] sm:hidden" onClick={() =>window.open('https://talk.naver.com/ct/wcc4wq')}>
        <Image className="rounded-full" src={Talk} width={50} height={50} layout="fixed"/>
      </div>
      <div className="fixed bottom-[140px] right-[10px] sm:hidden" onClick={() =>window.open('https://pf.kakao.com/_NxagQl')}>
        <Image className="rounded-full" src={Kakao} width={50} height={50} layout="fixed"/>
      </div>
      <div className="fixed bottom-[200px] right-[10px] sm:hidden" onClick={()=> window.location.href = 'tel:010-8662-5465'}>
        <Image className="rounded-full p-3" src={Call} width={50} height={50} layout="fixed"/>
      </div>
      <Container >
        <div style={{display:'flex', flexDirection:'column'}} onClick={() => history.push('/') }>
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={Home} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'}} >홈</span>
        </div>
        <div style={{display:'flex', flexDirection:'column'}} onClick={() => history.push('/intro')} >
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={Search} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'} }>모두다 소개</span>
        </div>
        <div style={{display:'flex', flexDirection:'column'}} onClick={() => history.push('/lecture') }>
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={Write} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'}}  >핵심 강의</span>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}  onClick={() => history.push('/review') }>
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={Open} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'}} >성공사례</span>
        </div>
        <div style={{display:'flex', flexDirection:'column'}} onClick={() => history.push('/apply') }>
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={User} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'}}  >상담신청</span>
        </div>
      </Container>
    </Footer>
  )
}