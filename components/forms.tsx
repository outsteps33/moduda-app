import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  email: string;
  password: string;
  errors: string;
}

export const Forms = () => {
  const  { register, watch, handleSubmit, formState: {errors}, setError } = useForm<LoginForm>({ mode: 'onBlur'});
  const onValid =(data: LoginForm) => {

  }
  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
    // setError('errors', { message: 'error'})
  }
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)} className="">
      <input 
        {...register('username', {
          required: "username is required"
        })} 
        type="text" 
        placeholder="username" 
        minLength={5} 
      />
      {errors.email?.message}
      <input 
        {...register('email', {
          required: "email is required"
        })} 
        type="email" 
        placeholder="email" 
      />
      <input 
        {...register('password', {
          required: "password is required"
        })}  type="password" placeholder="passowrd" />
      <input type="submit" placeholder="Create Account"  />
    </form>
  )
}