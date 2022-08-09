import { NextPage } from "next";
import Image from "next/image";
import { Nav } from "@components/nav";
import { ReputationBar } from "@components/ReputationBar";
import styled from 'styled-components';
import { Footer } from "@components/Footer";

const temp_reputation = [{
  question: 'Q1. 업무에 필요한 지식과 기술을 갖추고, 업무에 실제로 활용하나요?',
  reputation: ["기본적인 업무 역량이 부족하다.", "업무를 수행하는데에 문제가 없다.", "업무 지식과 스킬이 뛰어나다."]
}
  

];

const Reputation: NextPage = () => {
  
  
  return (
    <div style={{backgroundColor:'#1F1F1F'}} >
      <Nav />
      <div className="grid justify-center pt-20">

        <div>
          <ReputationBar reputation={temp_reputation[0].reputation} question={temp_reputation[0].question} />
        </div>
        <div style={{marginTop:'88px'}}>
          <ReputationBar reputation={temp_reputation[0].reputation} question={temp_reputation[0].question} />
        </div>
        <div style={{marginTop:'88px'}}>
          <ReputationBar reputation={temp_reputation[0].reputation} question={temp_reputation[0].question} />
        </div>
        <div style={{marginTop:'88px'}}>
          <ReputationBar reputation={temp_reputation[0].reputation} question={temp_reputation[0].question} />
        </div>
        <div style={{marginTop:'88px'}}>
          <ReputationBar reputation={temp_reputation[0].reputation} question={temp_reputation[0].question} />
        </div>
        <div style={{marginTop:'88px'}}>
          <ReputationBar reputation={temp_reputation[0].reputation} question={temp_reputation[0].question} />
        </div>

      </div>
      <Footer />
    </div>
  )
}
export default Reputation;