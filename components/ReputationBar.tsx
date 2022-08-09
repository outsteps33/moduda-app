/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pin0 from '../images/pin_0.png';
import Pin10 from '../images/pin_10.png';
import Pin20 from '../images/pin_20.png';
import Pin30 from '../images/pin_30.png';
import Pin40 from '../images/pin_40.png';
import Pin50 from '../images/pin_50.png';
import Pin60 from '../images/pin_60.png';
import Pin70 from '../images/pin_70.png';
import Pin80 from '../images/pin_80.png';
import Pin90 from '../images/pin_90.png';
import Pin100 from '../images/pin_100.png';

import Image from 'next/image';

const BackgroundBar = styled.div`
  background: linear-gradient(180deg, #3A3A3A 0%, #292929 100%);
  border: 0.503px solid #1E1E1E;
  border-radius: 10.06px;
  width: 1140px;
  height: 57px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubBackgroundBar = styled.div`
  width: 1090px;
  height: 38px;

  background: #2E2E2E;
  box-shadow: inset 0px -2.012px 5.03px rgba(0, 0, 0, 0.25), inset 0px 2.012px 5.03px rgba(0, 0, 0, 0.25);
  border-radius: 22.132px;

  display: flex;
  align-items: center;
  padding: 0px 5px 0px 5px;
`;


const ReputationContainer = styled.div`
  width: 1140px;
`;

const ReputationDescription = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
 
`;

const  Container = styled.div`
  width: 1140px;
`;
const LinearBar = styled.div<{ width: string, background: string}>`
  position: absolute;
  width: ${props => props.width};
  height: 27px;
  
  -webkit-transition: width 0.5s ease-in-out;

  background: ${props => props.background !=='default' ?  props.background: 'linear-gradient(93.86deg, #8A34F7 -0.78%, #0581FB 100%)'};
  box-shadow: inset 0px 4.024px 4.024px rgba(255, 255, 255, 0.4);
  border-radius: 22.5344px;
  
`;

const Points = styled.div`
  position: absolute;
  width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // padding: 0 10px 0px 10px;
`;

const Point = styled.div`
  width: 1080px;

  -webkit-transition: width 0.5s ease-in-out;
`;


interface AuthorCardProps {
  reputation: any;
  question: string;
}

const Question = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;


  color: #FFFFFF;
`;



export const ReputationBar: React.FC<AuthorCardProps> = ({
  reputation, question
}) => { 
  const [ score, setScore ] = useState(100);
  const width =  
    score === 0 ? '40px' :
    score === 10 ? '130px' :
    score === 20 ? '240px' :
    score === 30 ? '340px' :
    score === 40 ? '445px' :
    score === 50 ? '545px' :
    score === 60 ? '650px' :
    score === 70 ? '760px' :
    score === 80 ? '870px' :
    score === 90 ? '980px' :
    '1080px';

  const backgroundColor =  
    score === 0 ? '#FB0505' :
    score === 10 ? '#FB0505' :
    score === 20 ? '#FB0505' :
    score === 30 ? '#FB0505' :
    score === 40 ? '#FFC700' :
    score === 50 ? '#FFC700' :
    score === 60 ? '#FFC700' :
    score === 70 ? '#00B031' :
    score === 80 ? '#00B031' :
    score === 90 ? '#00B031' :
    'default';  

  const Pin =  
  score === 0 ? Pin0 :
  score === 10 ? Pin10 :
  score === 20 ? Pin20 :
  score === 30 ? Pin30 :
  score === 40 ? Pin40 :
  score === 50 ? Pin50 :
  score === 60 ? Pin60 :
  score === 70 ? Pin70 :
  score === 80 ? Pin80 :
  score === 90 ? Pin90 :
  Pin100;  

  return (
    <Container>
      <Question>{question}</Question>
      <div style={{display:'flex', justifyContent: 'space-between', padding: '0px 5px 0px 5px' }}>
      {[0,2.3,3,4,4,4,4,6,6,8,9].map((v, i)=> (
        <Point key={i} style={{paddingLeft:`${v}px`}}>
            {score === i*10 ? <div className="grid justify-center"><Image src={Pin} width={68.52} height={68.52} layout="fixed" /></div> : <div></div>}
        </Point>
      ))}
      </div>
      <ReputationContainer>
        <BackgroundBar>
          <SubBackgroundBar>
            <LinearBar width={width} background={backgroundColor}>
            </LinearBar>
              <Points>
                {[5,5,5,6,6,7,7,8,9,9,10].map((v, i)=> (
                  <div key={i} onClick={() => setScore(i*10)} style={{padding: '17px 20px'}} >
                    <div className=" " style={{width: `${v}px`, height: `${v}px`, backgroundColor:'white', borderRadius: '9999px'}}></div>
                  </div>
                ))}
              </Points>
          </SubBackgroundBar>
        </BackgroundBar>
        <ReputationDescription>
          {reputation.map((v: any) => (
            <div style={{width: '100px'}}>{v}</div>
          ))}
        </ReputationDescription>
      </ReputationContainer>
    </Container>
  )
}
