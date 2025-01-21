
import React from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {IDashboardSlider} from "@/types/dashboard";
import Link from "next/link";
import {formaterPrice} from "@/utils/common";
import MyLoader from "@/components/templates/DashBoardPage/MyLoader";

const DashboardSlider = ({items, spinner, goToPartPage}: IDashboardSlider) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 2,
    variableWidth:true,
    speed: 500,
    // slidesToShow: items.length >= 4 ? 4 : items.length - 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {spinner ? (
          [...Array(8)].map((i) => (
            <div key={i}>
              <MyLoader/>
            </div>
          ))
        )
        : items.length ? (
          items.map((item) => (
            <div key={item.id} className={'p-3 pb-7 shadow-lg shadow-slate-300 mb-7 dark:shadow-gray-900 rounded-sm'}>
              <div className={'w-[314px]'}>
                <img className={'h-[184px] w-[314px]'} src={JSON.parse(item.images)[0]}/>
                <ul className={'text-sm grid gap-5'}>
                  <li className={'flex items-center h-[40px] pt-5'}>
                    <Link href={goToPartPage ? `/catalog/${item.id}` : '/catalog'}>
                      <h3>{item.name}</h3>
                    </Link>
                  </li>
                  <li>
                    <span  className={'text-xs'}>Артикул: {item.vendor_code}</span>
                  </li>
                  <li>
                    <span>{formaterPrice(item.price)} ₽</span>
                  </li>
                </ul>
              </div>

            </div>
          ))
        ) : (<span>Список пуст...</span>)
      }
    </Slider>
  );
};

export default DashboardSlider;
