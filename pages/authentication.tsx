import { Footer } from "@components/Footer";
import { Nav } from "@components/nav";
import { Step } from "@components/Step";
import { NormalButton } from "css/button";
import { NextPage } from "next";
import styled from 'styled-components';

const Guide = styled.div`
  height: calc(100vh - 200px);
  
  padding-top: 120px;
  
`;

const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;

  text-align: center;
  padding-top: 100px;
  color: #FFFFFF;
`;

const Description = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  text-align: center;

  color: #FFFFFF;
`;
const Authentication: NextPage = () => {
  return (
    <div style={{backgroundColor: '#242527'}}>
      <Nav />
      <Guide>
        <Title>고유링크 발급</Title>
        <Step />
        <Description>03단게까지 완료되면 추천서에서 지원자의 평판 평가를 시작합니다. </Description>
        <div style={{display:'grid', justifyContent: 'center', marginTop:'40px'}}>
          <NormalButton>고유링크 발급 받기</NormalButton>
        </div>
      </Guide>
      <Footer />
    </div>
  )
}

export default Authentication;