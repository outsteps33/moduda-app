import { NextPage } from "next";
import Image from "next/image";
import { Nav } from "@components/nav";
import { ReputationBar } from "@components/ReputationBar";
import { MobileFooter } from "@components/MobileFooter";
import MobileKakao from '../images/kakao.png';
import WebKakao from '../images/kakao_web.png';
import styled from 'styled-components';
import { Footer } from "@components/Footer";
import { NormalButton, HButton } from "css/button";
import { Hero } from "@components/Hero";
import { Services } from "@components/Service";
import { Review } from "@components/Review";
import { ApplyForm } from "@components/ApplyForm";
import Phone from '../images/phoneImg.png';
import Ebook from '../images/ebookbanner.png';
import DesktopEbookImage from '../images/ebookbanner_web.png';
import { FixedApplyForm } from "@components/FixedApplyForm";
import useSWR from "swr";
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
  height: 300vh;
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

const MobKakao = styled.div`
  display: block;
  @media (min-width: 640px) {
    display: none;
  }
`;

const KaKao = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const MobilePhone = styled.div`
  display: block;
  padding-top: 70px;
  @media (min-width: 640px) {
    display: none;
  }
`;

const MobileEbook = styled.div`
  @media (min-width: 640px) {
    display: none;
  }
`;

const DesktopEbook = styled.div`

  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

interface ReviewResponse {
  ok: boolean;
  review: any[];
  count: any;
}

const Main: NextPage = () => {
  const { data, mutate: boundMutate } = useSWR<ReviewResponse>(
    `/api/getReview?page=1`
  );
  
  return (
    <div >
      <Nav />
      <div className="hidden sm:block">
        <FixedApplyForm />
      </div>
      <MobilePhone onClick={()=> window.location.href = 'tel:010-8662-5465'}>
        <Image src={Phone} width="100%" height="17" layout="responsive" />
      </MobilePhone>
      <Hero />
      <Services />
      <MobKakao className="cursor-pointer" onClick={() => window.open("https://pf.kakao.com/_NxagQl")}>
        <Image src={MobileKakao} width="100%" height="50" layout="responsive" />
      </MobKakao>
      <KaKao className="cursor-pointer" onClick={() => window.open("https://pf.kakao.com/_NxagQl")}>
        <Image src={WebKakao} width="100%" height="25" layout="responsive" />
      </KaKao>
      
      <Review review={data?.review}/>
      <div>
        <MobileEbook onClick={() => window.open('http://moduda2021.cafe24.com/')}>
          <Image src={Ebook} width="100%" height="20" layout="responsive" />
        </MobileEbook>
        <DesktopEbook onClick={() => window.open('http://moduda2021.cafe24.com/')}>
          <Image src={DesktopEbookImage} width="100%" height="9" layout="responsive" />
        </DesktopEbook>
      </div>
      <ApplyForm />
      {/* <Footer /> */}
      <Footer />
      <MobileFooter />
    </div>
  )
}
export default Main;