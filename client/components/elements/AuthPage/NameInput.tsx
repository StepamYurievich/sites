import React from 'react';
import {IAuthPageProps} from "@/types/auth";

const NameInput = ({register,errors}:IAuthPageProps) => {
  return (
    <label className={'w-full relative'}>
      <input
        type="text"
        className="px-4 py-2 focus:outline-none rounded bg-transparent border border-gray-700 w-full"
        placeholder='Имя'
        {
          ...register('name',{
            required:'Введите имя',
            minLength:2,
            maxLength:15,
            pattern:{
              value:/^[а-яА-Яa-zA-XёЁ]/,
              message: 'Недопустимое значение'
            }
          })
        }
      />
      {errors.name && (
        <span className='text-red-700 text-xs absolute left-0 -bottom-[20px]'>{errors.name?.message}</span>
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
