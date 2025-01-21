import {createDomain} from "effector";
import {IShoppingCartItem} from "@/types/shopping-cart";

const shoppingCart = createDomain()

export const setSoppingCart = shoppingCart.createEvent<IShoppingCartItem[]>()

export const $shoppingCart = shoppingCart.createStore<IShoppingCartItem[]>([])
  .on(setSoppingCart, (_, shoppingCart) => shoppingCart)
