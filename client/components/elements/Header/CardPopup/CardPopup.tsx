import React, {forwardRef} from 'react';
import {IWrappedComponentProps} from "@/types/common";
import {AnimatePresence, motion} from "framer-motion";
import {withClickOutside} from "@/utils/WithCkickOutside";
import CardSvg from "@/components/elements/CardSvg/CardSvg";
import {useUnit} from "effector-react";
import {$shoppingCart} from "@/context/shopping-cart";
import Link from "next/link";


const CardPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({open, setOpen}, ref) => {
    const shoppingCart = useUnit($shoppingCart)
    const toggleCartDropDown = () => setOpen(!open);

    return (
      <div ref={ref} className={'relative text-white z-40'}>
        <button onClick={toggleCartDropDown} className={'flex flex-col justify-center items-center'}>
          <span className={''}>
            <CardSvg/>
          </span>
          <span className={'text-gray-800 dark:text-white'}>
            Корзина
          </span>
        </button>
        <AnimatePresence>
          {open && (<motion.ul
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0}}
            style={{transformOrigin: 'right-top'}}
            className={'flex flex-col absolute right-0 top-[55px] bg-gray-200 text-gray-800  rounded p-3 gap-2  items-center dark:bg-gray-700 dark:text-white '}
          >
            <h1 className={'px-28 border-b border-gray-500 pb-1'}>Корзина</h1>
            <ul className={'h-48'}>
              {shoppingCart.length ? (
                shoppingCart.map((item) => <li key={item.id}/>)
                ):(
                  <li>
                    <span>Корзина пуста</span>
                  </li>
              )}
            </ul>
            <div className={'border-t border-gray-500 w-full flex flex-col  pt-1 gap-2'}>
              <div className={'flex justify-between'}>
                <span>Общая сумма заказа</span>
                <span>0</span>
              </div>
              <Link href={'/order'} passHref legacyBehavior>
                <button className={'cursor-pointer bg-zinc-700 py-3 rounded-full text-white dark:text-white'} disabled={!shoppingCart.length}>Оформить заказ</button>
              </Link>
            </div>
          </motion.ul>)}
        </AnimatePresence>
      </div>
    );
  })


CardPopup.displayName = 'CardPopup';

export default withClickOutside(CardPopup)
