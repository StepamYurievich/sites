import React from 'react';
import LocationSvg from "@/components/elements/LocationSvg/LocationSvg";
import PhoneSvg from "@/components/elements/Footer/assets/PhoneSvg";
import MailSvg from "@/components/elements/Footer/assets/MailSvg";
import Link from "next/link";

const FooterContacts = () => {
  return (
    <ul className={'pt-5 flex flex-col gap-4 text-gray-300'}>
      <li>
        <Link href={'/contacts'}>
          <div className={'flex flex-col gap-1'}>
            <span>Наш адрес:</span>
            <div className={'flex items-center gap-2'}>
              <LocationSvg/>
              <span>г. Москва, ул. ... д.... </span>
            </div>
          </div>
        </Link>
      </li>
      <li>
        <a href={'tel:+7924248942'} className={'flex flex-col gap-1'}>
          <span>Наш контактный телефон:</span>
          <div className={'flex items-center gap-2'}>
            <PhoneSvg/>
            <span>+7924248942:</span>
          </div>
        </a>
      </li>
      <li>
        <a href="info@zapchasti.com.ru" className={'flex flex-col gap-1'}>
          <span>E-mail:</span>
          <div className={'flex items-center gap-2'}>
            <MailSvg/>
            <span>info@zapchasti.com.ru</span>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default FooterContacts;
