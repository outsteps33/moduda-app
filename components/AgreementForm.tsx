import styled from 'styled-components';
import { MainButton } from 'css/button';
import { useState } from 'react';

const FormContainer = styled.div`
  background-color: #242527;
  padding-top: 90px;
  display: grid;
  justify-content: center;

  
`;

const Title = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;

  text-align: center;
  color: #FFFFFF;
`;

const Welcome = styled.div`
  margin-top: 12px;
  text-align: center;
`;  

const WelcomeTitle = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  margin-top: 12px;

  background: linear-gradient(93.71deg, #00CFBA 0%, #7289FF 99.33%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

`;

const Description = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  text-align: center;

  color: #FFFFFF;
`;

const InputTitle = styled.div`
  margin-top: 15px;
  color: #FFFFFF;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
`;

const Input = styled.input`
  background: #333333;
  border-radius: 8px;
  width: 316px;
  height: 35px;
  padding: 15px 10px;
  margin-top: 6px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 11.6825px;
  line-height: 12px;

  color: #828282
`;

const ShortInput = styled.input`
  background: #333333;
  border-radius: 8px;
  width: 230px;
  height: 35px;
  padding: 15px 10px;
  margin-top: 6px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 11.6825px;
  line-height: 12px;

  color: #828282
`;

const Short2Input = styled.input`
  background: #333333;
  border-radius: 8px;
  width: 270px;
  height: 35px;
  padding: 15px 10px;
  margin-top: 6px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 11.6825px;
  line-height: 12px;

  color: #828282
`;

const Button = styled.button`
  box-sizing: border-box;

  width: 75px;
  height: 35px;
  margin-left: 9px;
  border-radius: 8px; 
  border: 2px solid transparent;
  border-image: linear-gradient(to right, #00D1C2 0%, #006DD0 100%);
  border-image-slice: 1;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 11.6825px;
  line-height: 12px;

  color: #FFFFFF;
`;

const Check = styled.div`
  width: 12px;
  height: 12px;
  left: 6px;
  top: 6px;


  background: linear-gradient(93.86deg, #00D1C2 -0.78%, #006DD0 100%);
  border-radius: 2px;
`;

const CheckButton = styled.div`
  box-sizing: border-box;

  width: 24px;
  height: 24px;
  left: 20px;
  top: 54px;

  border: 1px solid #FFFFFF;
  border-radius: 6px;
`;

const PlusButton = styled.button`
  box-sizing: border-box;

  width: 35px;
  height: 35px;
  margin-left: 9px;
  border-radius: 8px; 
  border: 2px solid transparent;
  border-image: linear-gradient(to right, #00D1C2 0%, #006DD0 100%);
  border-image-slice: 1;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 15.6825px;
  line-height: 12px;

  color: #FFFFFF;
`;

export const AgreementForm = () => {
  const [ isAgree, setIsAgree] = useState(false);
  const agree = () => {
    setIsAgree(!isAgree);
  }
  return (
    <FormContainer>
      <Title>평판 조회 동의</Title>
      <Welcome>
        <WelcomeTitle>안녕하세요. 지원자님</WelcomeTitle>
      </Welcome>
      <Description>평판 조회를 위해 인적 사항 작성 및 개인정보수집 동의를 해주세요.</Description>
      <div>
        <InputTitle>이름</InputTitle>
        <Input placeholder="이름을 입력해주세요. (필수) "></Input>
        <InputTitle>연락처</InputTitle>
        <div>
          <ShortInput placeholder="“-”없이 숫자만 입력해주세요. (필수) "></ShortInput>
          <Button>인증번호 발송</Button>
        </div>
        <div style={{opacity:0.3}}>
          <ShortInput placeholder="문자로 도착한 인증번호를 입력해주세요."></ShortInput>
          <Button>휴대폰 인증</Button>
        </div>
        <InputTitle>전직장명</InputTitle>
        <Input value={'인스텝스'}></Input>
        <div>
          <Short2Input placeholder="전직장명을 입력해주세요."></Short2Input>
          <PlusButton>+</PlusButton>
        </div>
        <InputTitle>경력</InputTitle>
        <Input placeholder="경력을 선택해주세요."></Input>
        <InputTitle>직종</InputTitle>
        <Input placeholder="직종을 선택해주세요."></Input>
        
        <InputTitle style={{marginTop: '30px'}}>평판 조회 동의</InputTitle>
        <InputTitle style={{fontSize:'10px', marginTop:'5px',fontWeight: 500}}>*동의 시, 평판조회가 진행됩니다. 미동의시 평판조회가 진행되지 않습니다.</InputTitle>
        <InputTitle style={{fontSize:'10px', marginTop:'5px',fontWeight: 500}}>*자세한 약관은 더보기를 눌러주세요.</InputTitle>

        <div style={{display:'flex', gap : '10px', marginTop: '15px', alignItems: 'center'}}>
          {isAgree ? 
            <CheckButton onClick={agree} style={{display:'flex', justifyContent:'center', alignItems:'center'}}><Check></Check></CheckButton> : 
            <CheckButton onClick={agree}></CheckButton> }
          <InputTitle style={{marginTop: '0px'}}>추천서의 평판 조회를 동의합니다.</InputTitle>
        </div>

        <InputTitle style={{marginTop: '30px'}}>추가 평가자 입력 (선택)</InputTitle>
        <InputTitle style={{fontSize:'10px', marginTop:'5px',fontWeight: 500}}>*인사담당자 외에 평판조회를 진행해줄 수 있는 동료의 정보를 입력해주세요.</InputTitle>

        <InputTitle>이름</InputTitle>
        <Input placeholder="이름을 입력해주세요."></Input>
        <InputTitle>연락처</InputTitle>
        <Input placeholder="연락처를 입력해 주세요."></Input>
      </div>
      <div style={{display:'grid', justifyContent:'center', marginTop:'20px', marginBottom: '100px'}}>
        <MainButton>평판 동의하기</MainButton>
      </div>
    </FormContainer>
  )
}