import styled from 'styled-components';
import Sms from '../images/sms.png';
import { useForm } from "react-hook-form";
import useMutation from '@libs/client/useMutation';

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 50px;
`;

const Title = styled.div``;

const Button = styled.div`
  background: #0054EB;
  border-radius: 6px;
  
`;

const Input = styled.input`
  width: 85vw;
  @media (min-width: 640px) { 
    width: 400px;
  }
`;

const Textarea = styled.textarea`
  width: 85vw;
  @media (min-width: 640px) { 
    width: 400px;
  }
`;

export const ApplyForm = () => {
  const [sendEmail, { loading, data, error }] = useMutation("/api/sendEmail");
  const { register, getValues, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
    console.log(data)
    sendEmail({
      type:"상담신청",
      ...data
    });
    alert('상담신청이 완료됐습니다.');
    window.location.reload();
  }
  const inValid = () => {
    console.log(errors)
  }

  return (
    <FormContainer style={{backgroundImage: `url(${Sms})`, backgroundSize: '100% 100%', backgroundRepeat:"no-repeat", width:"100%", height:"520px"}} >
      <Title>
        <div style={{color:'white', fontSize:'15px'}}>모두다행정사 <span style={{fontSize:'18px'}}>SMS 빠른 상담 신청</span></div>
        <div style={{color:'white', fontSize:'12px'}}>MODUDA SMS QUICK COUNSELING</div>
        <form className="space-y-2 mt-5" onSubmit={handleSubmit(onSubmit, inValid)}>
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
            <button className="w-full text-white py-3 text-center cursor-pointer bg-[#0054EB] rounded-md hover:bg-[#3d7cf1]">
              상담 신청하기
            </button>
          </form>
      </Title>
    </FormContainer>
  )
}