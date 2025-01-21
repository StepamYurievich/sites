import React from 'react';
import Login from "@/components/templates/reg/Login";
import Auth from "@/components/templates/reg/Auth";
import ThemeToggle from "@/components/modules/Theme/ThemeToggler";

const AuthPage = () => {
  const [login, setLogin] = React.useState<boolean>(false);
  return (
    <div className="h-screen w-full p-[20px]">
      <div className="">
        <div className=''>
          <ThemeToggle/>
        </div>
        {login
          ?
          <div  className="flex flex-col justify-center items-center mt-24 ">
            <Login/>
            <div>
              Нет аккаунта?
              <button className='pl-2 text-blue-700 dark:text-blue-300' onClick={()=>setLogin(false)}>Зарегистртроваться</button>
            </div>
          </div>
          :
          <div className="flex flex-col justify-center items-center mt-24">
            <Auth  setLogin={setLogin}/>
            <div>
              Уже зарегистрированы?
              <button className='pl-2 text-blue-700 dark:text-blue-300'  onClick={()=>setLogin(true)}>Войти</button>
            </div>
          </div>
        }
      </div>


    </div>
  );
};

export default AuthPage;
