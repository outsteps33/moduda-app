import styled from 'styled-components';
import Sms from '../images/sms.png';
import { useForm } from "react-hook-form";

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
  const { register, getValues, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
    console.log(data)
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
              <label htmlFor="email" className="block text-sm font-medium text-white">
                성함
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
              <label htmlFor="email" className="block text-sm font-medium text-white">
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
              <label htmlFor="email" className="block text-sm font-medium text-white">
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
            <Button className="text-white py-3 text-center">
              상담 신청하기
            </Button>
          </form>
      </Title>
    </FormContainer>
  )
}