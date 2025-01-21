import React, {useState} from 'react';
import NameInput from "@/components/elements/AuthPage/NameInput";
import {useForm} from "react-hook-form";
import {IInput} from "@/types/auth";
import PasswordInput from "@/components/elements/AuthPage/PasswordInput";
import {signInFx, signUpFx} from "@/app/apiSlice/auth";
import {showAuthError} from "@/utils/errors";
import {useRouter} from "next/router";


const Login = () => {
  const [spinner,setSpinner] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField
  } = useForm<IInput>()
  const route = useRouter()

  const onSubmit = async (data: IInput) => {
    try {
      setSpinner(true)
      await signInFx({
        url:'/users/login',
        username: data.name,
        password: data.password,
      })


      resetField('name')
      resetField('password')
      route.push('/dashboard')

    }catch (error){
      showAuthError(error)
    }finally {
      setSpinner(false)
    }

  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <p className={'pb-6 text-center'}>Вход</p>
      <div className="flex flex-col items-center gap-8 max-w-[400px] mx-auto">
        <NameInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button className='bg-gray-700 py-2.5 rounded-xl mb-3 text-white hover:bg-gray-600 w-full h-[45px] flex items-center justify-center'>
          {spinner ? <div className={'w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'}></div> : 'Войти'}
        </button>
      </div>
    </form>
  );
};
export default Login;
