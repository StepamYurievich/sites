import React from 'react';
import FooterLogoSvg from "@/components/elements/Footer/FooterLogoSvg";
import OnlineStoreContent from "@/components/elements/Footer/OnlineStoreContent";
import Company from "@/components/elements/Footer/Company";
import FooterContacts from "@/components/elements/Footer/FooterContacts";

const FooterTop = () => {
  return (
    <div>
      <ul className={'flex py-10 justify-between border-b border-gray-500'}>
        <li className={'flex gap-4 border-r border-gray-500 px-16'}>
          <FooterLogoSvg/>
          <span className={'font-bold text-lg '}>Детали для <br/> газовых котлов</span>
        </li>
        <li className={' border-r border-gray-500 px-16'}>
          <span className={'font-bold text-lg '}>Интерент магазин</span>
          <OnlineStoreContent/>
        </li>
        <li className={' border-r border-gray-500 px-16'}>
          <span className={'font-bold text-lg '}>Компания</span>
          <Company/>
        </li>
        <li className={' px-16'}>
          <span className={'font-bold text-lg'}>Контакты</span>
          <FooterContacts/>
        </li>
      </ul>
    </div>
  );
};

export default FooterTop;
