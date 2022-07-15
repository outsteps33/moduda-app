import { NextPage } from "next";
// import MainPoster from '../images/poster.png';
// import Background from '../images/backgroundColor.png';
// import Background from '../images/Background.png';
import BackgroundItem from '../images/BackgroundItem.png';
import SemiBackground from '../images/semi_background.png';
import Feature1 from '../images/fature1.png';
import Feature2 from '../images/fature2.png';
import Feature3 from '../images/fature3.png';
import Apply from '../images/applyImage.png';
import Apply1 from '../images/apply1.png';
import Apply2 from '../images/apply2.png';
import Apply3 from '../images/apply3.png';
import Apply4 from '../images/apply4.png';
import Arrow from '../images/arrow.png';
const Background = require('../images/Background.png');

import Image from "next/image";
import { Nav } from "@components/nav";
import styled from 'styled-components';
import Forms from '../components/forms';

const Text = styled.div`
  background: linear-gradient(to right, #FFF29E 0%, #FD7858 100%);
  -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Container = styled.div`
  height: 95vh;
  @media (min-width: 768px) {
    height: 80vh
  }
`;

const HeaderSubText = styled.div`
  font-size: 25px;
  @media (min-width: 768px) {
    font-size: 30px
  }
`;

const SemiBackgroundDiv = styled.div`
  height: 30vh;
  font-size: 20px;
  @media (min-width: 768px) {
    height: 45vh;

  }
`;

const Button = styled.button`
  border-color: #FD7858;
  // background: linear-gradient(to right, #FD7858 0%, #FFF29E 100%);
`;

const goToViolation =(id: any)=>{
  const violation = document.getElementById(id); 
  if(violation) {
    window.scrollTo({
      top:violation.offsetTop,
      behavior:"smooth"
  });
  }
};
 
const Main: NextPage = () => {
  
  
  return (
    <>
      <Nav />
      
      <Container className="bg-cyan-800" style={{ backgroundImage: `url('${Background}')`, backgroundSize:'cover', backgroundPosition: 'Top' }} id="home" >
        <div className="max-w-7xl mx-auto my-20">
          <div className="text-white pt-24 md:pt-28  text-center sm:text-3xl md:text-4xl font-bold px-5">
            <div className="text-3xl sm:text-4xl md:text-5xl">내 돈 쓰면서</div> 
            <div className="mt-4 md:mt-3 text-3xl sm:text-4xl md:text-5xl">취업 준비를 하고 싶다면 </div> 
            <div className="mt-4 md:mt-3 text-3xl sm:text-4xl md:text-5xl">나가셔도 좋습니다</div> 
            <HeaderSubText className="mt-16 md:mt-20 font-semibold ">이 곳은 국비지원을 통해 </HeaderSubText>
            <HeaderSubText className="mt-1 " >
              <Text className="font-semibold">100% 무료로 취업준비를 </Text>
              <Text className="font-semibold mt-1">도와주는 곳입니다.</Text>
            </HeaderSubText>
            <div className="mt-16 md:mt-16 hover:bg-opacity-95 rounded-md text-white py-3 px-6 text-base sm:text-lg md:text-xl" onClick={() => goToViolation('apply')}>
              <span className="border border-yellow-400 px-9 py-3 rounded-full text-xl font-normal hover:bg-yellow-400 hover:text-black cursor-pointer">상담 신청하기</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="py-20 md:py-40 max-w-7xl mx-auto px-10 md:grid gird-cols-3" id="intro">
        
        <div className="grid">
          <div className="md:text-3xl font-bold text-2xl">취업 준비</div>
          <div className="md:text-3xl font-bold text-2xl mt-2">실패하지 않은 가장 빠른 길</div>
        </div>
        <div className=" text-base md:text-lg md:mx-0">
          <div className="mt-12 md:text-center">아무 체계없이 무작정 취업을 </div>
          <div className="mt-1 md:text-center">준비하는 사람들이 요즘 너무 많습니다.</div>
          <div className="md:text-center">취업이 급한 마음은 이해합니다.  </div>
          <div className="text-right mt-12">하지만 무작정 급하게 준비하면  </div>
          <div className="text-right">시간만 흘러가고 취업은 되지 않습니다. </div>
          <div className="text-right">이 글을 끝까지 읽고 충분히 생각해보시고 </div>
          <div className="text-right">제대로 준비할 마음이 있다면 신청해주세요</div>
        </div>
      </div>
      <SemiBackgroundDiv className="flex justify-center items-center" style={{ backgroundImage: `url('${SemiBackground}')`, backgroundSize:'cover', backgroundPosition: 'center'}}>
        <div className="text-white text-center text-xl font-semibold sm:text-2xl md:text-4xl" style={{lineHeight: 1.6}}>
          <div>가장 중요한 것은 본인의 의지</div>
          <div>본인의 의지가 있어야</div>
          <div>취업도 성공할 수 있습니다</div>
          <div>섣부르게 상담 신청을 하지 마세요</div>
        </div>
      </SemiBackgroundDiv>

      {/* mobile feature */}
      <div className="max-w-7xl mx-auto px-5 mt-16 md:hidden">
        <div className="flex gap-x-3">
          <div style={{width: '5px', height:'50px', backgroundColor:'black', marginTop:'3px'}}></div>
          <div>
            <div className="font-bold" style={{fontSize:'20px'}} >01</div>
            <div className="font-semibold" style={{fontSize:'18px'}}>나라에서 지원하는  국비지원</div>
          </div>
        </div>
        <div className="mt-3 text-sm">
          <div>내 돈으로 취업준비를 하고 있다면 </div>
          <div>쓸 수 있는 내 돈은 한정적이기 때문에  시간만 흘러가고 취업이 안된다면 불안해집니다. </div>
          <div>그럴수록 마음은 급해지고 점점 취업과 멀어집니다.</div>
          <span className="bg-yellow-300">나라에서 지원하는 국비지원으로 100% 무료로 부담없이 취업에 성공하세요</span>
        </div>
        <div className="mt-3">
          <img src={Feature1} />
        </div>

        {/* 2 */}
        <div className="flex gap-x-3 mt-16 md:justify-end">
          <div style={{width: '5px', height:'50px', backgroundColor:'black', marginTop:'3px'}}></div>
          <div  >
            <div className="font-bold" style={{fontSize:'20px'}} >02</div>
            <div className="font-semibold" style={{fontSize:'18px'}}>체계적인 교육기관</div>
          </div>
        </div>
        <div className="mt-3 text-sm md:flex md:justify-end md:text-right">
          <div>
            <div>무작정 혼자서 취업준비를 하고 있다면 </div>
            <div>이제는 전략적으로 체계적으로 취업을 준비해야 할 때입니다. </div>
            <div>저희가 엄선한 교육기관은 <span className="bg-yellow-300">취업을 시키는 데 어느 곳보다 전문적인 곳</span>입니다.</div>
            <div>'내 혼자 힘으로 충분히 취업할 수 있어!'라는 믿음이 강하시다면, 나가셔도 좋습니다.</div>
          </div>
        </div>
        <div className="mt-3 md:grid justify-end">
          <img src={Feature2} />
        </div>
       
        {/* 3 */}
        <div className="flex gap-x-3 mt-16">
          <div style={{width: '5px', height:'50px', backgroundColor:'black', marginTop:'3px'}}></div>
          <div  >
            <div className="font-bold" style={{fontSize:'20px'}} >03</div>
            <div className="font-semibold" style={{fontSize:'18px'}}>나에게 맞는 취업 교육</div>
          </div>
        </div>
        <div className="mt-3 text-sm">
          <div>국비지원이 되는 수많은 교육 중</div>
          <div>나에게 맞는 교육이 뭔지 모르겠다면</div>
          <div>많은 수업들이 있지만 무엇을 선택할지 모르겠다면  </div>
          <span className="bg-yellow-300">나의 실력,환경에 딱 맞는 교육기관의 수업을 찾고 싶다면 신청하세요.</span>
        </div>
        <div className="mt-3">
          <img src={Feature3} />
        </div>
      </div>

      {/* desktop feature */}
      <div className="hidden md:flex justify-center items-start gap-20 mt-20">
        <div className=" gap-x-3 ">
          <div className="flex items-baseline">
            <div className="font-bold" style={{fontSize:'40px'}} >01</div>
            <div className="font-semibold ml-2" style={{fontSize:'20px'}}>나라에서 지원하는  국비지원</div>
          </div>
          <div className="text-left mt-5" style={{marginLeft:'57px', fontSize:'15px'}}>
            <div>내 돈으로 취업준비를 하고 있다면 </div>
            <div>쓸 수 있는 내 돈은 한정적이기 때문에   </div>
            <div>시간만 흘러가고 취업이 안된다면 불안해집니다.</div>
            <div>그럴수록 마음은 급해지고 점점 취업과 멀어집니다.</div>
            <span className="bg-yellow-300">나라에서 지원하는 국비지원으로 100% 무료로 부담없이 취업에 성공하세요</span>
          </div>
        </div>
        <div className="">
          <img src={Feature1} />
        </div>
      </div>
      <div className="hidden md:flex justify-center items-start gap-20 mt-20">
        <div className="">
          <div className="flex items-baseline">
            <div className="font-bold" style={{fontSize:'40px'}} >02</div>
            <div className="font-semibold ml-2" style={{fontSize:'20px'}}>체계적인 교육기관</div>
          </div>
          <div className="text-left mt-5" style={{marginLeft:'57px', fontSize:'15px'}}>
            <div>무작정 혼자서 취업준비를 하고 있다면 </div>
            <div>이제는 전략적으로 체계적으로 취업을 준비해야 할 때입니다. </div>
            <div>저희가 엄선한 교육기관은 <span className="bg-yellow-300">취업을 시키는 데 어느 곳보다 전문적인 곳</span>입니다.</div>
            <div>'내 혼자 힘으로 충분히 취업할 수 있어!'라는 </div>
            <div>믿음이 강하시다면, 나가셔도 좋습니다.</div>
          </div>
        </div>
        <div className="">
          <img src={Feature2} />
        </div>
      </div>
      <div className="hidden md:flex justify-center items-start gap-32 mt-20">
        <div className=" gap-x-3 ">
          <div className="flex items-baseline">
            <div className="font-bold" style={{fontSize:'40px'}} >03</div>
            <div className="font-semibold ml-2" style={{fontSize:'20px'}}>나에게 맞는 취업 교육</div>
          </div>
          <div className="text-left mt-5" style={{marginLeft:'57px', fontSize:'15px'}}>
            <div>국비지원이 되는 수많은 교육 중</div>
            <div>나에게 맞는 교육이 뭔지 모르겠다면</div>
            <div>많은 수업들이 있지만 무엇을 선택할지 모르겠다면  </div>
            <span className="bg-yellow-300">나의 실력,환경에 딱 맞는 교육기관의 수업을 찾고 싶다면 신청하세요.</span>
          </div>
        </div>
        <div className="">
          <img src={Feature3} />
        </div>
      </div>
      
      <div className="flex md:hidden items-center mt-12" style={{ backgroundImage: `url('${Apply}')`, backgroundSize:'cover', backgroundPosition: 'center', height:'20vh'}} id="user">
        <div className="text-white font-bold px-5" style={{fontSize:'25px'}}>신청대상</div>
      </div>
      <div className="px-5 mt-7 md:hidden ">
        <div className="mt-3">
          <div className="font-bold text-lg">01</div>
          <div className="mt-1 text-sm">개발자로 취업하고 싶은 비전공자</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-lg">02</div>
          <div className="mt-1 text-sm">개발 기초를 다지고 싶은 취업준비생</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-lg">03</div>
          <div className="mt-1 text-sm">마케터로 전향하고 싶은 취준생</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-lg">04</div>
          <div className="mt-1 text-sm">웹/앱 디자이너를 꿈꾸는 대학 졸업생/ 취업준비생</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-lg">05</div>
          <div className="mt-1 text-sm">무엇으로 취업할지 방황하고 있는 분</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-lg">06</div>
          <div className="mt-1 text-sm">취업상담을 통해 취업을 체계적으로 준히바려는 분</div>
        </div>
      </div>

      <div className="hidden md:flex items-center mt-12" style={{ backgroundImage: `url('${Apply}')`, backgroundSize:'cover', backgroundPosition: 'center', height:'30vh'}}>
        <div className="text-white font-bold px-48" style={{fontSize:'35px'}}>신청대상</div>
      </div>
      <div className="px-48 mt-24 hidden md:grid grid-cols-3 gap-x-10 gap-y-32">
        <div className="mt-3">
          <div className="font-bold text-3xl">01</div>
          <div className="mt-1 text-lg">개발자로 취업하고 싶은 비전공자</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-3xl">02</div>
          <div className="mt-1 text-lg">개발 기초를 다지고 싶은 취업준비생</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-3xl">03</div>
          <div className="mt-1 text-lg">마케터로 전향하고 싶은 취준생</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-3xl">04</div>
          <div className="mt-1 text-lg">웹/앱 디자이너를 꿈꾸는 대학 졸업생/ 취업준비생</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-3xl">05</div>
          <div className="mt-1 text-lg">무엇으로 취업할지 방황하고 있는 분</div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-3xl">06</div>
          <div className="mt-1 text-lg">취업상담을 통해 취업을 체계적으로 준히바려는 분</div>
        </div>
      </div>


      <div className="py-7 mt-20 sm:py-12 md:py-32 px-5 md:hidden" style={{backgroundColor: 'black'}} id="process">
        <div className="" >
          <div className=" mb-12 text-2xl sm:text-2xl md:text-4xl font-bold text-white">진행과정</div>
          
          <div className="grid grid-cols-3 items-center justify-center text-white px-1" >
            <div className="text-center mb-2 text-lg">01</div>
            <div className="text-center mb-2 text-lg"></div>
            <div className="text-center mb-2 text-lg">02</div>
            <div className="grid justify-center text-sm" >
              <div className="grid justify-center"><img src={Apply1} style={{width:'40px', height:'40px'}} /></div>
              <div className="mt-2">아래양식대로 신청</div> 
            </div>
            <div className="grid justify-center"><img src={Arrow} style={{width:'12px'}}/></div>
            <div className="text-center text-sm">
              <div className="grid justify-center "><img src={Apply2} style={{width:'40px', height:'40px'}} /></div>
              <div className="mt-2">맞춤형 플랜 상담</div> 
            </div>
          </div>
          <div className="grid grid-cols-3 items-center justify-center text-white mt-20 px-1">
            <div className="text-center mb-2 text-lg">03</div>
            <div className="text-center mb-2 text-lg"></div>
            <div className="text-center mb-2 text-lg">04</div>
            <div className="grid justify-center text-sm">
              <div className="grid justify-center"><img src={Apply3} style={{width:'40px', height:'40px'}} /></div>
              <div className="mt-2">
                <div>취업 교육 수강 </div>
              </div> 
            </div>
            <div className="grid justify-center"><img src={Arrow} style={{width:'12px'}}/></div>
            <div className="text-center text-sm">
              <div className="grid justify-center"><img src={Apply4} style={{width:'40px', height:'40px'}} /></div>
              <div className="mt-2">취업 성공</div> 
            </div>
          </div>
        </div>
      </div>

      <div className="py-7 mt-32 sm:py-12 md:py-32 px-48 hidden md:block" style={{backgroundColor: 'black'}} id="process">
        <div className="" >
          <div className=" mb-20 text-2xl sm:text-2xl md:text-4xl font-bold text-white">진행과정</div>
          <div className="grid grid-cols-7 items-center justify-center text-white px-1" >
            <div>
              <div className="text-center mb-5 text-2xl">01</div>
              <div className="grid justify-center text-lg" >
                <div className="grid justify-center"><img src={Apply1} style={{width:'60px', height:'60px'}} /></div>
                <div className="mt-5">아래양식대로 신청</div> 
              </div>
            </div>
            <div className="grid justify-center"><img src={Arrow} style={{width:'12px'}}/></div>
            <div>
              <div className="text-center mb-5 text-2xl">02</div>
              <div className="grid justify-center text-lg" >
                <div className="grid justify-center"><img src={Apply2} style={{width:'60px', height:'60px'}} /></div>
                <div className="mt-5">맞춤형 플랜 상담</div> 
              </div>
            </div>
            <div className="grid justify-center"><img src={Arrow} style={{width:'12px'}}/></div>
            <div>
              <div className="text-center mb-5 text-2xl">03</div>
              <div className="grid justify-center text-lg" >
                <div className="grid justify-center"><img src={Apply3} style={{width:'60px', height:'60px'}} /></div>
                <div className="mt-5">취업 교육 수강</div> 
              </div>
            </div>
            <div className="grid justify-center"><img src={Arrow} style={{width:'12px'}}/></div>
            <div>
              <div className="text-center mb-5 text-2xl">04</div>
              <div className="grid justify-center text-lg" >
                <div className="grid justify-center"><img src={Apply4} style={{width:'60px', height:'60px'}} /></div>
                <div className="mt-5">취업 성공</div> 
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="py-20 md:py-40 " id="apply">
        <Forms />
      </div>
    </>
  )
}
export default Main;