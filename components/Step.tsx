import styled from 'styled-components';
import RightArrow from '../images/arrow.png';
import Image from 'next/image';

const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 53px;

  margin-top: 100px;
  margin-bottom:150px;
`;

const StepDetail = styled.div`

`;

const StepTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;

  text-align: center;

  color: #FFFFFF;

`;

const StepSubtitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;

  text-align: center;

  color: #FFFFFF;
`;

const Arrow = styled.div`

`;

const Number = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;

  text-align: center;
  color: #FFFFFF;
`;


export const Step = () => {
  return (
    <StepContainer>
      <StepDetail>
        <Number>01</Number>
        <StepTitle>고유번호 발급받기</StepTitle>
        <StepSubtitle>(발급 시 고유번호가 자동 복사됩니다.)</StepSubtitle>
      </StepDetail>
      <Arrow><Image src={RightArrow} width={19} height={38}/></Arrow>
      <StepDetail>
        <Number>02</Number>
        <StepTitle>지원자에게 고유번호 전달하기</StepTitle>
      </StepDetail>
      <Arrow><Image src={RightArrow} width={19} height={38}/></Arrow>
      <StepDetail>
        <Number>03</Number>
        <StepTitle>지원자가 평판 체크 동의하기</StepTitle>
      </StepDetail>
    </StepContainer>
  )
}