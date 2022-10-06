import styled from 'styled-components';
import Sms from '../images/sms.png';
import { useForm } from "react-hook-form";

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
  const { register, getValues, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
    console.log(data)
  }
  const inValid = () => {
    console.log(errors)
  }

  return (
    <FormContainer style={{ width:"194px", zIndex:'99'}} className="fixed right-[30px] top-[120px]  px-[10px] bg-gray-600 border-2 rounded-md  sm:block" >
      <Title>
        <div style={{color:'white', fontSize:'15px'}}> <span style={{fontSize:'13px', textAlign: 'center', fontWeight:'600'}}>SMS 빠른 상담 신청</span></div>
        <form className="space-y-2 " onSubmit={handleSubmit(onSubmit, inValid)}>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-white">
                이름
              </label>
              <div className="mt-1">
                <Input
                  {...register("email", {
                    required: "이메일을 입력해주세요",
                    minLength: 10,
                    validate: (email) =>email.includes("@")
                  })}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  style={{background: 'rgba(255, 255, 255, 0.51)'}}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-white">
                연락처( - 없이 입력 )
              </label>
              <div className="mt-1">
                <Input
                  {...register("password", {
                    required: "비밀번호를 입력해주세요"
                  })}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  style={{background: 'rgba(255, 255, 255, 0.51)'}}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-white">
                상담 내용 입력
              </label>
              <div className="mt-1">
                <Textarea
                  {...register(`answer2`, {
                    required: "남기고 싶은 말을 적어주세요",
                  })}
                  name="answer2"
                  defaultValue={''}
                  style={{background: 'rgba(255, 255, 255, 0.51)'}}
                />
              </div>
            </div>
            <Button className=" text-sm py-2 text-center text-white">
              상담 신청하기
            </Button>
          </form>
      </Title>
    </FormContainer>
  )
}