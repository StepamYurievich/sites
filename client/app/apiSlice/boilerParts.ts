// import {createEffect} from "effector";
// import api from '../axiosClient'
//
// export const getBestSellersNewPartsFx = createEffect(async (url: string) => {
//   const {data} = await api.get(url)
//
//   return data
//
// })

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import
