import React from 'react';
import Link from "next/link";

const OnlineStoreContent = () => {
  return (
    <ul className={'pt-5 flex flex-col gap-2 text-gray-300'}>
      <li>
        <Link href={'/catalog'}>
          Каталог
        </Link>
      </li>
      <li>
        <Link href={'/shopping-payment'}>
          Доставка и оплата
        </Link>
      </li>
    </ul>
  );
};

export default OnlineStoreContent;
