import React from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BrandSliderNestArrow from "@/components/elements/BrandSliderNestArrow/BrandSliderNestArrow";
const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    variableWidth:true,
    nextArrow: <BrandSliderNestArrow/>,
    prevArrow: <BrandSliderPrevArrow/>
  };
  const brandItems = [
    {id:1,img:'/img/Frame 1134.png',alt:'Frame'},
    {id:2,img:'/img/Frame 1134.png',alt:'Frame'},
    {id:3,img:'/img/Frame 1134.png',alt:'Frame'},
    {id:4,img:'/img/Frame 1134.png',alt:'Frame'},
    {id:5,img:'/img/Frame 1134.png',alt:'Frame'},
    {id:6,img:'/img/Frame 1134.png',alt:'Frame'},
    {id:7,img:'/img/Frame 1134.png',alt:'Frame'},
    {id:8,img:'/img/Frame 1134.png',alt:'Frame'},
  ]
  return (
    <div className='z-30'>
      <Slider {...settings}>
      {brandItems.map((items)=>(
        <div
          key={items.id}
          className="flex justify-center w-[180px] shadow-xl my-5"
        >
          <img className="" src={items.img} alt={items.alt}/>
        </div>
      ))}
    </Slider>
    </div>
);
};

import BrandSliderPrevArrow from "@/components/elements/BrandSliderPrewArrow/BrandSliderPrewArrow";

export default BrandSlider;
