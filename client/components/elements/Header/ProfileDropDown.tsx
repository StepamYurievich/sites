import React, {forwardRef} from 'react';
import {IWrappedComponentProps} from "@/types/common";
import ProfileSvg from "@/components/elements/ProfileSvg/ProfileSvg";
import {AnimatePresence, motion} from "framer-motion";
import LogoutSvg from "@/components/elements/LogoutSvg/LogoutSvg";
import {withClickOutside} from "@/utils/WithCkickOutside";

const ProfileDropDown = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({open, setOpen},ref)=>{
  const toggleProfileDropDown = () => setOpen(!open);

  return (
    <div ref={ref} className={'relative text-white z-50'}>
      <button onClick={toggleProfileDropDown} className={'flex items-center justify-center'}>
        <span className={'absolute right-0'}>
          <ProfileSvg/>
        </span>
      </button>
      <AnimatePresence>
        {open && (<motion.ul
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0}}
          style={{transformOrigin:'right-top'}}
          className={' flex flex-col absolute right-0 top-5 bg-gray-400 dark:bg-gray-700 rounded p-3 gap-2 '}
        >
          <li className={'flex flex-col gap-0.5 border-b-2 border-white'}>
            <span>Stepan</span>
            <span className={'mb-1'}>Stepan@gmail.com</span>
          </li>
          <li>
            <button className={'flex items-center justify-center gap-2'}>
              <span><LogoutSvg/></span>
              <span>Выйти</span>
            </button>
          </li>
        </motion.ul>)}
      </AnimatePresence>
    </div>
  );
})


ProfileDropDown.displayName = 'ProfileDropDown';

export default withClickOutside(ProfileDropDown)
