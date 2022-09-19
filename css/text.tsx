import styled from 'styled-components';

export const Text36 = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  color: #000000;
  
  @media (max-width: 640px) { 
    font-size: 12px;
    line-height: 10px;  
  }

  @media (min-width: 640px) { 
    font-size: 36px;
    line-height: 42px;
  }

`;

export const Text15 = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  color: #000000;
`;

export const Text20 = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  color: #000000;
`;

export const TextHover20 = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  color: #000000;

  :hover {
    color: white
  }
`;