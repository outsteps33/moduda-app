import Image from 'next/image';
import styled from 'styled-components';
import Home from '../images/home.png';
import Search from '../images/search.png';
import Write from '../images/write.png';
import Open from '../images/open.png';
import User from '../images/user.png';

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

  @media (min-width: 640px) { 
    display: none;
  }
`;


export const MobileFooter = () => {
  return (
    <Footer>

      <Container >
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={Home} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'}}>모두다 소개</span>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={Search} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'}}>업무 소개</span>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={Write} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'}}>사이다 강의</span>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={Open} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'}}>성공사례</span>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'grid', justifyContent:'center'}}><Image  src={User} width={24} height={24} layout="fixed"/></div>
          <span style={{textAlign: 'center', fontSize:'13px', color:'#828282'}}>상담신청</span>
        </div>
      </Container>
    </Footer>
  )
}