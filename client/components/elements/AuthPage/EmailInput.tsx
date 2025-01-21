import React from 'react';
import {IAuthPageProps} from "@/types/auth";

const NameInput = ({register,errors}:IAuthPageProps) => {
  return (
    <label className={'w-full relative'}>
      <input
        type="email"
        className="px-4 py-2 focus:outline-none rounded bg-transparent border border-gray-700 w-full"
        placeholder='Почта'
        {
          ...register('email',{
            required:'Введите почту',
            pattern:{
              value:/\S+@\S+\.\S+/,
              message: 'Неправильный E-mail'
            }
          })
        }
      />
      {errors.email && (
        <span className='text-red-700 text-xs absolute left-0 -bottom-[20px]'>{errors.email?.message}</span>
      )}
      {errors.name && errors.name.type === 'minLength' && (
        <span className='text-red-700 text-xs absolute left-0 -bottom-[20px]'>Минимум 4 символа!</span>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <span className='text-red-700 text-xs absolute left-0 -bottom-[20px]'>Максимум 15 символов!</span>
      )}
    </label>
  );
};

export default NameInput;

