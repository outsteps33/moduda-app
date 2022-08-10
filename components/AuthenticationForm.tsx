import styled from 'styled-components';
import { MainButton } from 'css/button';

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
  width: 248px;
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

  width: 59px;
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

export const AuthenticationForm = () => {
  return (
    <FormContainer>
      <Title>회사 인증</Title>
      <Welcome>
        <WelcomeTitle>환영합니다</WelcomeTitle>
      </Welcome>
      <Description>추천서 서비스 이용을 위해 회사 인증을 진행해주세요.</Description>
      <div>
        <InputTitle>상호명*</InputTitle>
        <Input placeholder="상호명을 입력해주세요. (필수) "></Input>
        <InputTitle>대표자명*</InputTitle>
        <Input placeholder="대표자명을 입력해 주세요. (필수) "></Input>
        <InputTitle>사업자등록번호*</InputTitle>
        <div>
          <ShortInput placeholder="“-”없이 숫자만 입력해주세요. (필수) "></ShortInput>
          <Button>확인</Button>
        </div>
        <InputTitle>사업자등록증*</InputTitle>
        <div>
          <ShortInput placeholder="파일을 선택해주세요. (필수)"></ShortInput>
          <Button>찾아보기</Button>
        </div>
        <InputTitle>추천인 아이디</InputTitle>
        <Input placeholder="추천인 아이디를 입력해주세요. (선택)"></Input>
      </div>
      <div style={{display:'grid', justifyContent:'center', marginTop:'20px'}}>
        <MainButton>회사 인증하기</MainButton>
      </div>
    </FormContainer>
  )
}