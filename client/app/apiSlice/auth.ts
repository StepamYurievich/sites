import {createEffect} from "effector";
import toast from "react-hot-toast";
import {ISignInFx, ISignUpFx} from "@/types/auth";
import api from '../axiosClient'
import {AxiosError} from "axios";
import {HTTPStatus} from "@/constans";

export const signUpFx = createEffect(
  async ({url, username, password, email}: ISignUpFx) => {

    const {data} = await api.post(url, {username, password, email});

    if (data.warningMessage) {
      toast.error(data.warningMessage,{duration:4000});
      return
    }

    toast.success('Успешная регистрация')
    return data;
  }
)


export const signInFx = createEffect(
  async ({url, username, password}: ISignInFx) => {

    const {data} = await api.post(url, {username, password});

    toast.success('Вход выполнен')
    return data;
  }
)

export const checkUserAuthFx = createEffect(
async (url:string) => {
  try {
    const {data} = await api.get(url);
    return data;
  }catch (err){
    const axiosError = err as AxiosError;

    if(axiosError.response) {
      if(axiosError.response.status === HTTPStatus.FORBIDDEN) {
        return false
      }
    }
    toast.error((err as Error).message)
  }


}
)


