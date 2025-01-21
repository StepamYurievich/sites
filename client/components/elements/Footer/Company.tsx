import React from 'react';
import Link from "next/link";

const Company = () => {
  return (
    <ul className={'pt-5 flex flex-col gap-2 text-gray-300'}>
      <li>
        <Link href={'/about'}>О компании</Link>
      </li>
      <li>
        <Link href={'/contacts'}>Обратная связь</Link>
      </li>
      <li>
        <Link href={'/wholesale-byers'}>Оптовым покупателям</Link>
      </li>
      <li>
        <Link href={'/contacts'}>Контакты</Link>
      </li>
    </ul>
  );
};

export default Company;
