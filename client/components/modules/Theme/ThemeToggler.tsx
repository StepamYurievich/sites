'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SunSvg from "@/components/elements/SunSvg/SunSvg";
import MoonSvg from "@/components/elements/SunSvg/MoonSvg";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "light");

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return (
    <div className="">
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 rounded-full w-16 h-7 flex items-center justify-between p-1 transition-colors duration-300"
      >
        <span
          className={`transition-transform duration-300 ${isDark ? '-translate-x-0.5' : 'translate-x-9'}`}
        >
          {isDark ? <SunSvg /> : <MoonSvg />}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
