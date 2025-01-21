import React from 'react';

const FooterBottom = () => {
  return (
    <div className="">
      <div className="grid items-center py-7 border-b border-gray-500 grid-cols-2">
        <div className={'flex gap-8 items-center'}>
          <span>Мы принимаем к оплате:</span>
          <ul className={'flex gap-6'}>
            <li><img src="/img/GPay.png" alt="GPay"/></li>
            <li><img src="/img/APay.png" alt="APay"/></li>
            <li><img src="/img/Master.png" alt="Master"/></li>
            <li><img src="/img/Visa.png" alt="Visa"/></li>
          </ul>
        </div>
        <div className={'flex gap-8 items-center'}>
          <span>Мы в соцсети:</span>
          <ul className={'flex gap-6'}>
            <li><img src="/img/VK.png" alt="VK"/></li>
            <li><img src="/img/Facebook.png" alt="Facebook"/></li>
            <li><img src="/img/Inst.png" alt="Inst"/></li>
            <li><img src="/img/YT.png" alt="YT"/></li>
          </ul>
        </div>
      </div>
      <div className={'py-7'}>
        © «Детали для газовых котлов» 2021.
      </div>
    </div>
  );
};

export default FooterBottom;
