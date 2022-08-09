import { NextPage } from "next";
import Image from "next/image";
import { Nav } from "@components/nav";
import { ReputationBar } from "@components/ReputationBar";
import { MobileFooter } from "@components/MobileFooter";

import styled from 'styled-components';
import { Footer } from "@components/Footer";
import { NormalButton, HButton } from "css/button";

const temp_reputation = [{
  question: 'Q1. 업무에 필요한 지식과 기술을 갖추고, 업무에 실제로 활용하나요?',
  reputation: ["기본적인 업무 역량이 부족하다.", "업무를 수행하는데에 문제가 없다.", "업무 지식과 스킬이 뛰어나다."]
}
  

];

const SubTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;

  text-align: center;

  color: #FFFFFF;

`;

const MobileContainer = styled.div`
  padding-top: 110px;
  height:100vh;
`;

const HightLight = styled.span`
  background: linear-gradient(93.86deg, #00D1C2 -0.78%, #006DD0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 800;
`;

const Title = styled.div`
  color:white;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 28px;

  margin-top: 20px;
  text-align:center;
`;

const Description = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 100;
  font-size: 13px;
  line-height: 20px;
  
  text-align: center;
  margin-top: 25px;
  color: #FFFFFF;
`;




const Main: NextPage = () => {
  
  
  return (
    <div style={{backgroundColor:'#242527'}} >
      <Nav />
      <MobileContainer>
        <SubTitle style={{color: 'white'}}>채용실패를 방지하는 가장 쉬운 방법</SubTitle>
        <Title><HightLight>추천서</HightLight> 평판 체크</Title>
        <Description>
          추천서는 지원자의 평판을 체크하는 서비스입니다.<br />
          시간과 노력을 들여 진행한 채용이 실패로 돌아가지 않도록.<br />
          추천서에서 도움을 드리겠습니다.
        </Description>
        <div style={{display:'flex', justifyContent: 'center'}}>
          <HButton>추천서 시작하기</HButton>
        </div>
      </MobileContainer>
      {/* <Footer /> */}
      <MobileFooter />
    </div>
  )
}
export default Main;