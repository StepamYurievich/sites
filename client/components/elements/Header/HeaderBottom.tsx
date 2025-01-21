import React from 'react';
import ThemeToggle from "@/components/modules/Theme/ThemeToggler";
import LogoSvg from "@/components/elements/LogoSvg/LogoSvg";
import HeaderSelect from "@/components/elements/Header/HeaderSelect/HeaderSelect";
import Link from "next/link";
import CardPopup from "@/components/elements/Header/CardPopup/CardPopup";

const HeaderBottom = () => {
  return (
    <div className={'shadow-lg'}>
      <div className={'max-w-[1430px] mx-auto flex justify-between items-center'}>
        <Link href={'/dashboard'} legacyBehavior passHref>
          <div className={'flex items-center justify-center gap-2'}>
            <LogoSvg/>
            <span className={'text-lg leading-4 font-semibold py-[16px]'}>Детали для <br/>
газовых котлов</span>
          </div>
        </Link>
        <div>
          <HeaderSelect/>
        </div>
        <div className=''>
          <ThemeToggle/>
        </div>
        <CardPopup/>
      </div>
    </div>
  );
};

export default HeaderBottom;
