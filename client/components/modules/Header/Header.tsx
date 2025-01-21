import React from 'react';
import HeaderTop from "@/components/elements/Header/HeaderTop";
import HeaderBottom from "@/components/elements/Header/HeaderBottom";

const Header = () => {
  return (
    <header className="font-base">
      <HeaderTop/>
      <HeaderBottom/>
    </header>
  );
};

export default Header;
