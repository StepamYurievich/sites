import React from 'react';
import BrandPrew from "@/components/elements/BrandSlideArrow/BrandPrew";
interface BrandSliderNestArrowProps {
  onClick?: () => void; // Опциональная функция для обработки клика
}
const BrandSliderPrevArrow: React.FC<BrandSliderNestArrowProps> = ({ onClick }) => (
  <button onClick={onClick}  className={'absolute top-[40%] right-10 z-50'}>
    <span>
      <BrandPrew/>
    </span>
  </button>
)

export default BrandSliderPrevArrow
