import styled from 'styled-components';
import Sms from '../images/sms.png';
import { useForm } from "react-hook-form";
import useMutation from '@libs/client/useMutation';
import TalkTalk from '../images/talktalk.jpg';
import Kakao from '../images/kakaoImg.png';
import emailjs from '@emailjs/browser';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Container = styled.div`
display: grid;
justify-content: center;
padding-top: 10px;
  padding-bottom: 10px;
`;
const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Title = styled.div``;

const Button = styled.div`
  background: #0054EB;
  border-radius: 6px;
  
`;

const Input = styled.input`
  width: 85vw;
  @media (min-width: 640px) { 
    width: 100%;
    height: 25px;
  }
`;

const Textarea = styled.textarea`
  width: 85vw;
  @media (min-width: 640px) { 
    width: 100%;
    height: 30px;
  }
`;

export const FixedApplyForm = () => {
  const [check, setCheck] = useState(false);
  const [sendEmail, { loading, data, error }] = useMutation("/api/sendEmail");
  const { register, getValues, handleSubmit, control, formState: { errors } } = useForm();
  useEffect(() => emailjs.init("fDQGySa8OCVxFYFdz"), []);
  const onSubmit =  async(data:any) => {
  await emailjs.send('service_cd3skzm', 'template_7myjcou', {
    name: data.name,
    phone: data.phone,
    comment: data.comment,
  });
    alert('상담신청이 완료됐습니다.');
    window.location.reload();
  }
  const inValid = () => {
    console.log(errors)
  }

  return (
    <Container style={{ width:"194px", zIndex:'99'}} className="fixed right-[30px] top-[120px]   sm:block">
      <FormContainer className="bg-gray-600 px-[10px] " >
        <Title>
          <div style={{color:'white', fontSize:'15px'}}> <span style={{fontSize:'13px', textAlign: 'center', fontWeight:'600'}}>SMS 빠른 상담 신청</span></div>
          <form className="space-y-2 " onSubmit={handleSubmit(onSubmit, inValid)}>
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                이름
              </label>
              <div className="mt-1">
                <Input
                  {...register("name", {
                    required: "이름을 입력해주세요",
                  })}
                  name="name"
                  type="name"
                  required
                  style={{background: 'rgba(255, 255, 255, 0.51)'}}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">
                연락처( - 없이 입력 )
              </label>
              <div className="mt-1">
                <Input
                  {...register("phone", {
                    required: "폰번호를 입력해주세요"
                  })}
                  name="phone"
                  type="phone"
                  required
                  style={{background: 'rgba(255, 255, 255, 0.51)'}}
                />
              </div>
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-white">
                상담 내용 입력
              </label>
              <div className="mt-1">
                <Textarea
                  {...register(`comment`, {
                    required: "남기고 싶은 말을 적어주세요",
                  })}
                  name="comment"
                  style={{background: 'rgba(255, 255, 255, 0.51)'}}
                />
              </div>
            </div>
            <div className="mt-2 ">
              <label htmlFor="email" className="block text-sm mb-1 text-white ">
                {check ?
                <input type="checkbox" className="mr-2" checked onClick={() => setCheck(!check)}/> :
                 <input type="checkbox" className="mr-2" onClick={() => {setCheck(!check); window.open('https://plip.kr/pcc/86eb0bd9-5729-44bf-a0db-50cdd685c363/consent/3.html')}} />
                
                }
                 개인정보의 수집 및 이용목적
              </label>
            
            </div>
            {check ?
              <button className="w-full text-white py-2 text-center cursor-pointer bg-[#0054EB] rounded-md hover:bg-[#3d7cf1]">
                상담 신청하기
              </button> :
              <button className="w-full text-white py-2 text-center cursor-pointer bg-gray-500 rounded-md hover:bg-[#3d7cf1]" disabled>
                상담 신청하기
              </button> 
            }
          </form>
        </Title>
        
      </FormContainer>
      <div className="grid justify-center rounded-md mt-1 cursor-pointer" onClick={() =>window.open('https://talk.naver.com/ct/wcc4wq')}>
        <Image className="mt-10 " src={TalkTalk} width={200} height={50} layout="fixed" />
      </div>
      <div className="grid justify-center rounded-md mt-1 cursor-pointer" onClick={() =>window.open('https://pf.kakao.com/_NxagQl')}>
        <Image className="mt-10 " src={Kakao} width={200} height={50} layout="fixed" />
      </div>
      
    </Container>
  )
}