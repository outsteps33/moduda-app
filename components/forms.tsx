import { FieldErrors, useForm } from 'react-hook-form';
import styled from 'styled-components';



interface LoginForm {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const Input = styled.input`
  width: 90vw;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 30vw;
  }
`;

const Forms = () => {
  const  { register, watch, handleSubmit, formState: {errors}, setError } = useForm<LoginForm>({ mode: 'onBlur'});
  const onValid =(data: LoginForm) => {
    console.log(data)
  }

  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
    // setError('errors', { message: 'error'})
  }
  return (
    <div className="grid justify-center mt-20 ">
      <div>
        <div className="text-center font-bold text-base sm:text-lg md:text-4xl">상담 및 문의</div>
        <div className="text-center text-sm sm:text-base md:text-lg mt-3">*순차적으로 진행되니 시간이 조금 걸릴 수 있습니다</div>
        <form onSubmit={handleSubmit(onValid, onInValid)}>
          <div className="flex items-center mt-3 md:mt-10 ">
            <div className=" justify-center">
              <Input 
                {...register('name', {
                  required: "name is required"
                })} 
                type="text" 
                placeholder="이름을 입력하세요" 
                className="py-3 "
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-3 md:mt-4">
            <div className=" justify-center">
              <Input 
                {...register('email', {
                  required: "email is required"
                })} 
                type="email" 
                placeholder="이메일을 입력하세요" 
                className="py-3 "
              />
            </div>
          </div>
          <div className="flex justify-center mt-3 md:mt-4">
            <div className=" justify-center">
              <Input 
                {...register('phone', {
                  required: "phone number is required"
                })} 
                type="text" 
                placeholder="번호를 입력하세요 ex) 010-4441-5347"  
                className="py-3 "
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-3 md:mt-4">
            <div className=" justify-center">
              <Input 
                {...register('description', {
                  required: "description is required"
                })} 
                type="text" 
                placeholder="문의 내용" 
                className="py-3 "
              />
            </div>
          </div>
          <div className="grid justify-center">
            <button className="text-center px-20 py-4 mt-10 text-white rounded-md text-base sm:text-lg md:text-xl" style={{backgroundColor: 'black'}}>신청하기</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Forms;