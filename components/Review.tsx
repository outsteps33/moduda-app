import { Text36, Text15, Text20, TextHover20 } from 'css/text';
import styled from 'styled-components';
import Image from 'next/image';
import PlusImage from '../images/plus.png';
// import Previous ㄹ

const MobileReivewContainer  = styled.div`

@media (min-width: 640px) { 
  display: none;
}
`;

const DesktopReviewContainer = styled.div`

  display: none;


@media (min-width: 640px) { 
  height: 420px;
  background : #F5F5F4;
  display:flex;
  justify-content: space-between;

  padding-top: 112px;
  padding-left: 98px;
}

  
`;

const Button = styled.div`
  width: 190px;
  height: 38px;
  margin-top: 3px;

  border: 0.791667px solid #000000;
  border-radius: 38px;

  display:flex;
  justify-content: center;
`;

const ReviewBox = styled.div`

  
  @media (min-width: 640px) { 
    padding: 36px 40px;
    width: 382px;
    height: 180px;
  }

  background: #FFFFFF;

  :hover {
    background: linear-gradient(138.57deg, #0054EB 7.65%, #209AF8 76.56%);
    
  }
  border: 1px solid #E0E0E0;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
`;

const ReviewTitle = styled.div`
  width: 30vw;
`;

const ReviewDate = styled.div`

`;

const Plus = styled.div`
  display: flex;
`;

const More = styled.div`
  border: 0.395833px solid #000000;
  border-radius: 19px;
  font-size: 12px;
  padding: 2px 5px;
`;

const Container = styled.div`
  overflow: hidden; 
  overflow-x: scroll; 
  display: flex; 
  padding: 10px 20px;
  gap: 20px;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
  width: 70vw;
  
`;

const Box = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 40px;
  gap: 68px;

  width: 482px;
  height: 180px;

  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
`;


const Title = styled.div``;
export const Review = () => {
  return (
    <div className="">
      <MobileReivewContainer className="py-10">
        <div className="px-2">
          <div className="flex justify-between px-2">
            <div className="flex text-sm">
              모두다행정사 
              <div style={{color:'#0054EB'}} className="text-md ml-1"> 성공사례</div>
            </div>
            <More>성공사례 모두 보러 가기</More>
          </div>
          <div className="px-2 text-xs mb-4"> MODUDA SUCCESSFUL CASE</div>
          <div className="grid grid-cols-2">
            <ReviewBox>
              <div className="p-5" style={{display:'grid', flexDirection: 'column', alignContent:'space-between', height:'120px'}}>
                <div className="text-sm">택배기사 구제 사례</div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text20 style={{color:'#BDBEBE', fontSize:'12px'}}>2022.05.18</Text20>
                  <Plus><Image src={PlusImage} width={10} height={10} /></Plus>
                </div>
              </div>
            </ReviewBox>
            <ReviewBox>
              <div className="p-5" style={{display:'grid', flexDirection: 'column', alignContent:'space-between', height:'120px'}}>
                <div className="text-sm">택배기사 구제 사례</div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text20 style={{color:'#BDBEBE', fontSize:'12px'}}>2022.05.18</Text20>
                  <Plus><Image src={PlusImage} width={10} height={10} /></Plus>
                </div>
              </div>
            </ReviewBox>

          </div>
        </div>
      </MobileReivewContainer>
      <DesktopReviewContainer>
        <div style={{width:'280px'}}>
          <Text36>모두다행정사</Text36>
          <Text36 style={{color:'#0054EB'}}>성공 사례</Text36>
          MODUDA SUCCESSFUL CASE
          <Button><Text15> 성공사례 모두 보러 가기</Text15></Button>
        </div>
        <Container >
          {[0,0,0,0,0,0,0,0,0].map((v) => (
            <ReviewBox >
              <div style={{display:'grid', flexDirection: 'column', alignContent:'space-between', height:'120px', width: '200px'}}>
                <Text20>택배기사 구제 사례</Text20>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text20 style={{color:'#BDBEBE'}}>2022.05.18</Text20>
                  <Plus><Image src={PlusImage} width={19} height={19} /></Plus>
                </div>
              </div>
          </ReviewBox>
          ))}
        </Container>
        
        

      </DesktopReviewContainer>
    </div>
  )
}