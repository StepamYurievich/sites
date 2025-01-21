import React from 'react';
import LocationSvg from "@/components/elements/LocationSvg/LocationSvg";

const CityButton = () => {
  return (
    <button className={'group flex items-center justify-center gap-[8px]'}>
      <span>
        <LocationSvg  />
      </span>
      <span  className={'text-white group-hover:text-yellow-500'}>Москва</span>
    </button>
  );
};

export default CityButton;
