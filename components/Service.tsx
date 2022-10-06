import styled from 'styled-components';
import Arrow from '../images/arrow2.png';
import Image from 'next/image';
import { Text36 } from 'css/text';
import Dig from '../images/진단.png';
import Ebook from '../images/ebook.png';
import Edu from '../images/youtube.png';

const ServiceContainer = styled.div`

  display:grid;
  justify-content: center;
    
    padding-top: 30px;
    padding-bottom: 30px;
  

  @media (min-width: 720px) {
    height: 400px;
    display:flex;
    justify-content:space-between;
  
    padding-top: 112px;
    padding-left: 98px;
    padding-right: 181px;
  
  }

`;

const Title = styled.div`

  @media (min-width: 720px) {
    display: block;
    margin-top: 30px;
  }
`;



const SubTitle = styled.div`
  display: flex;

  @media (min-width: 720px) {
    display: block;
    font-size: 23px;
  }

  @media (min-width: 1200px) {
    display: block;
    font-size: 30px;
  }
`;


const Subdescription = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  color: #0054EB;
`;

const Service = styled.div`
    font-size: 15.7514px;
    line-height: 18px;
    
    
    justify-content: center;
    padding-top:12px;
  

  @media (min-width: 720px) {
    font-size: 30px;
    line-height: 42px;

    letter-spacing: -0.05em;
    padding-top: 31px;
  }
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  

  
  
  color: #000000;
`;

const ArrowImage = styled.div`
  padding-left: 8px;
`;
const Text = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  line-height: 20px;
  @media (min-width: 640px) {
    line-height: 42px;
  
  }
  /* or 117% */

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
`;
export const Services = () => {
  return (
      
      <ServiceContainer>
        <div>
          <div className="md:text-[25px] lg:text-[32px] mt-7">
            <Text>모두다행정사</Text>
            <Text style={{color:'#0054EB'}} className="font-semibold">프리미엄 서비스</Text>
          </div>
          MODUDA PREMIUM SERVICE
        </div>
        <Service className="mt-[10px] md:mt-[0px]" >

          <div className="flex gap-2 items-center md:block">
            <div className="md:hidden"><Image src={Dig} width="20" height="20" /></div>
            <div className="hidden md:block"><Image src={Dig} width="30" height="30" /></div>
            <div>
              <Subdescription>모두다 진단</Subdescription>
              <SubTitle>
                <SubTitle>구제 가능성 진단</SubTitle>
                <div style={{display:'flex', height:'22px'}}>
                  <SubTitle>바로 가기</SubTitle>
                  <ArrowImage><Image src={Arrow} width={21.11} height={22}></Image></ArrowImage>
                  
                </div>  
              </SubTitle>
            </div>
          </div>
        </Service>

        <Service onClick={() => window.location.href="http://moduda2021.cafe24.com/"}>
          <div className="flex gap-6 items-center md:block">
            <div className="md:hidden"><Image src={Ebook} width="25" height="20" /></div>
            <div className="hidden md:block"><Image src={Ebook} width="37.5" height="30" /></div>
            <div>
            <Subdescription>모두다 PDF</Subdescription>
            <SubTitle>
              <SubTitle>면허구제 E-book</SubTitle>
              <div style={{display:'flex', height:'22px'}}>
                <SubTitle>받아 보기</SubTitle>
                <ArrowImage><Image src={Arrow} width={21.11} height={22}></Image></ArrowImage>
              </div> 
            </SubTitle>
            </div>
          </div>
        </Service>
        <Service>
          <div className="flex gap-5 items-center md:block">
            <div className="md:hidden"><Image src={Edu} width="30" height="20" /></div>
            <div className="hidden md:block"><Image src={Edu} width="45" height="30" /></div>
            <div>
            <Subdescription>모두다 교육</Subdescription>
            <SubTitle>
              <SubTitle>유튜브 영상</SubTitle>
              <div style={{display:'flex', height:'22px'}}>
                <SubTitle>보러 가기</SubTitle>
                <ArrowImage><Image src={Arrow} width={21.11} height={22}></Image></ArrowImage>
              </div> 
            </SubTitle>
            </div>
          </div>
        </Service>
      </ServiceContainer>
  )
}