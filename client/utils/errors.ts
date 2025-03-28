import {AxiosError} from "axios";
import {HTTPStatus} from "@/constans";
import toast from "react-hot-toast";

export const showAuthError = (error: unknown) => {
  const axiosError = error as AxiosError;

  if(axiosError.response){
    if(axiosError.response.status === HTTPStatus.UNAUTHORIZED){
      toast.error('Невреное имя пользователя или пароль')
      return
    }

    toast.error((error as Error).message)
  }
}
