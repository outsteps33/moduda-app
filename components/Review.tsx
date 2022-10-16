import { Text36, Text15, Text20, TextHover20 } from 'css/text';
import styled from 'styled-components';
import Image from 'next/image';
import PlusImage from '../images/plus.png';
import After from '../images/after.png';
import Previous from '../images/previous.png';
import { FC } from 'react';
import { useRouter } from 'next/router';

const MobileReivewContainer  = styled.div`

@media (min-width: 640px) { 
  display: none;
}
`;

const DesktopReviewContainer = styled.div`

  display: none;


@media (min-width: 640px) { 
  // height: 420px;
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
    width: 282px;
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

const MContainer = styled.div`
  overflow: hidden; 
  overflow-x: scroll; 
  display: flex; 
  padding: 10px 20px;
  gap: 20px;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
  width: 98vw;
  
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

interface ReviewProps {
  review: any[] | undefined;
}

const Title = styled.div``;
export const Review: FC<ReviewProps> = ({review}) => {
  const router= useRouter();
  return (
    <div className="">
      <MobileReivewContainer className="py-10">
        <div className="px-2">
          <div className="flex justify-between px-2">
            <div className="flex text-sm">
              모두다행정사 
              <div style={{color:'#0054EB'}} className="text-md ml-1"> 성공사례</div>
            </div>
            <More onClick={() => router.push('/review')}>성공사례 모두 보러 가기</More>
          </div>
          <div className="px-2 text-xs mb-4"> MODUDA SUCCESSFUL CASE</div>
          <MContainer >
          {review && review.map((v) => (
            <ReviewBox onClick={() => router.push(`/review/${v.id}`)} className="cursor-pointer hover:text-white">
              <div style={{display:'grid',padding: '15px', flexDirection: 'column', alignContent:'space-between', height:'120px', width: '200px'}}>
                <Text15>{v.title}</Text15>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text15 style={{color:'#BDBEBE'}}>{new Date(v.createdAt).getFullYear()}.{new Date(v.createdAt).getMonth()+1}.{new Date(v.createdAt).getDate()}</Text15>
                  <Plus><Image src={PlusImage} width={14} height={14} /></Plus>
                </div>
              </div>
              </ReviewBox>
              ))}
            </MContainer>
        </div>
      </MobileReivewContainer>
      <DesktopReviewContainer>
        <div style={{width:'280px'}}>
          <Text36>모두다행정사</Text36>
          <Text36 style={{color:'#0054EB'}}>성공 사례</Text36>
          MODUDA SUCCESSFUL CASE
          <Button onClick={() => router.push('/review')} className=" hover:bg-gray-500 cursor-pointer hover:text-white"><Text15 className=""> 성공사례 모두 보러 가기</Text15></Button>
        </div>
        <Container >
          {review && review.map((v) => (
            <ReviewBox onClick={() => router.push(`/review/${v.id}`)} className="cursor-pointer hover:text-white" >
              <div style={{display:'grid', flexDirection: 'column', alignContent:'space-between', height:'120px', width: '200px'}}>
                <Text20>{v.title}</Text20>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text20 style={{color:'#BDBEBE'}}>{new Date(v.createdAt).getFullYear()}.{new Date(v.createdAt).getMonth()+1}.{new Date(v.createdAt).getDate()}</Text20>
                  <Plus><Image src={PlusImage} width={19} height={19} /></Plus>
                </div>
              </div>
          </ReviewBox>
          ))}
        </Container>
        
        

      </DesktopReviewContainer>
      <div className="hidden gap-3 justify-end pr-[100px] pt-[26px] sm:flex" style={{backgroundColor:'#F5F5F4', height:'150px'}}>
        <div><Image src={Previous} width={36} height={36} layout="fixed"/></div>
        <div><Image src={After} width={36} height={36} layout="fixed"/></div>
      </div>
    </div>
  )
}