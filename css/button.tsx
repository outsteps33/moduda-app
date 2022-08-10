import styled from 'styled-components';

//nav바에 들어갈 버튼
export const NavButton = styled.button`
  padding: 12px 35px;
  text-align: center;
  color: #FFFFFF;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;

  background: linear-gradient(93.86deg, #00D1C2 -0.78%, #006DD0 100%);
  border-radius: 12px;
`;

//보통 크기 버튼
export const NormalButton = styled.button`
  padding: 14px 40px;
  text-align: center;
  color: #FFFFFF;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;

  background: linear-gradient(93.86deg, #00D1C2 -0.78%, #006DD0 100%);
  border-radius: 12px;
`;

//메인 모바일 크기 버튼
export const MainButton = styled.button`
  padding: 7px 40px;
  text-align: center;
  color: #FFFFFF;
  
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  background: linear-gradient(93.86deg, #00D1C2 -0.78%, #006DD0 100%);
  border-radius: 6.90757px;
`;


//다음페이지 이동 버튼
export const MoveButton = styled.button`

`;

//테두리 하이라이트 버튼
export const HButton = styled.button`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  padding: 7px 40px;
  
  
  border: 2px solid transparent;
  border-radius: 6.9px;
  border-image: linear-gradient(to right, #00D1C2 0%, #006DD0 100%);
  // border-iamge: linear-gradient(#444444, #444444), linear-gradient(to right, #00D1C2, #ffcdf3aa, #006DD0);
  border-image-slice: 1;
  

  background: linear-gradient(93.86deg, #00D1C2 -0.78%, #006DD0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;