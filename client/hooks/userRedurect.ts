import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {checkUserAuthFx} from "@/app/apiSlice/auth";
import {setUser} from "@/context/user";

const userRedirect =(isAuthPage=false) => {
  const [shodLoadContent, setShodLoadContent] = useState(false);
  const router = useRouter();
  const shouldCheckAuth = useRef(true);

  useEffect(() => {
    if(shouldCheckAuth.current){
      shouldCheckAuth.current = false;
      checkUser()
    }
  }, []);
  const checkUser = async () =>{
    const user = await checkUserAuthFx('/users/login-check')

    if(isAuthPage){
      if(!user){
        setShodLoadContent(true);
        return
      }

      router.push('/dashboard')
    }

    if(user){
      setUser(user)
      setShodLoadContent(true);
      return
    }

    router.push('/')
  }
  return {shodLoadContent}
}

export default userRedirect
