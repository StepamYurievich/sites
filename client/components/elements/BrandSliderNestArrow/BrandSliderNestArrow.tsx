import React from 'react';
import BrandSlideArrow from "@/components/elements/BrandSlideArrow/BrandSlideArrow";
interface BrandSliderNestArrowProps {
  onClick?: () => void; // Опциональная функция для обработки клика
}
const BrandSliderNestArrow: React.FC<BrandSliderNestArrowProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={'absolute top-[40%] left-10'}>
      <span><BrandSlideArrow/></span>
    </button>
  );
};

export default BrandSliderNestArrow;
