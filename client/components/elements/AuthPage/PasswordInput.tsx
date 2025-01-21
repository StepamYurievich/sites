import React from 'react';
import {IAuthPageProps} from "@/types/auth";

const NameInput = ({register,errors}:IAuthPageProps) => {
  return (
    <label className={'w-full relative'}>
      <input
        type="password"
        className="px-4 py-2 focus:outline-none rounded bg-transparent border border-gray-700 w-full"
        placeholder='Пароль'
        {
          ...register('password',{
            required:'Введите пароль',
            minLength:4,
            maxLength:20,
          })
        }
      />
      {errors.password && (
        <span className='text-red-700 text-xs absolute left-0 -bottom-[20px]'>{errors.password?.message}</span>
      )}
      {errors.password && errors.password.type === 'minLength' && (
        <span className='text-red-700 text-xs absolute left-0 -bottom-[20px]'>Минимум 4 символа!</span>
      )}
      {errors.password && errors.password.type === 'maxLength' && (
        <span className='text-red-700 text-xs absolute left-0 -bottom-[20px]'>Максимум 20 символов!</span>
      )}
    </label>
  );
};

export default NameInput;

