import React from 'react';
import Link from "next/link";
import CityButton from "@/components/elements/cityButton/CityButton";
import ProfileDropDown from "@/components/elements/Header/ProfileDropDown";

const HeaderTop = () => {
  return (
    <div className={'w-full h-full bg-[#2D2D2D] '}>
      <div className={'max-w-[1430px] mx-auto flex justify-between items-center'}>
        <CityButton/>
        <nav className={'py-[12px]'}>
          <ul className={'flex justify-center gap-[50px]'}>
            <li className={'text-white hover:text-yellow-500'}>
              <Link href={'/shopping-payment'} passHref legacyBehavior>Доставка и оплата</Link>
            </li>
            <li className={'text-white hover:text-yellow-500'}>
              <Link href={'/about'} passHref legacyBehavior className={'hover:text-yellow-400'}>О компании</Link>
            </li>
            <li className={'text-white hover:text-yellow-500'}>
              <Link href={'/catalog'} passHref legacyBehavior className={'hover:text-yellow-400'}>Каталог</Link>
            </li>
            <li className={'text-white hover:text-yellow-500'}>
              <Link href={'/contacts'} passHref legacyBehavior className={'hover:text-yellow-400'}>Контакты</Link>
            </li>
            <li className={'text-white hover:text-yellow-500'}>
              <Link href={'/wholesale-byers'} passHref legacyBehavior className={'hover:text-yellow-400'}>Оптовым покупателям</Link>
            </li>
          </ul>
        </nav>
        <ProfileDropDown/>
      </div>
    </div>
  );
};

export default HeaderTop;
