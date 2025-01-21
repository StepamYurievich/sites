import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import NameInput from "@/components/elements/AuthPage/NameInput";
import {IInput} from "@/types/auth";
import EmailInput from "@/components/elements/AuthPage/EmailInput";
import PasswordInput from "@/components/elements/AuthPage/PasswordInput";
import {signUpFx} from "@/app/apiSlice/auth";
import {showAuthError} from "@/utils/errors";
import axios from "axios";

interface AuthProps {
  setLogin: (value: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ setLogin }) => {
  const [spinner,setSpinner] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField
  } = useForm<IInput>()

  const onSubmit = async (data: IInput) => {
    try {
      setSpinner(true)
      const userData = await signUpFx({
        url:'/users/signup',
        username: data.name,
        password: data.password,
        email: data.email,
      })

      if(!userData){
        return
      }

      resetField('name')
      resetField('email')
      resetField('password')
      setLogin(true)

    }catch (error){
      showAuthError(error)
    }finally {
      setSpinner(false)
    }

  }
  return (
    <div className="w-full">
      <p className={'pb-6 text-center'}>Регистрация</p>
      <form
        className="flex flex-col items-center gap-8 max-w-[400px] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button
          className='bg-gray-700 py-2.5 rounded-xl mb-3 text-white hover:bg-gray-600 w-full  h-[45px] flex items-center justify-center'
        >
          {spinner ? <div className={'w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'}></div> : 'Зарегистрироваться'}
        </button>
      </form>
    </div>
  );
};

export default Auth;
