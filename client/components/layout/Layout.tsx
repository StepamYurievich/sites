import React from 'react';
import Header from "@/components/modules/Header/Header";
import {ILayoutProps} from "@/types/common";
import Footer from "@/components/modules/Footer/Footer";

const Layout = ({children}:ILayoutProps) => (
  <>
    <Header/>
    {children}
    <Footer/>
  </>
)

export default Layout;
