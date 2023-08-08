import React, { useState, useEffect } from "react";
import Switcher from "./Switcher";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";

interface mobileNavProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav: React.FC<mobileNavProps> = ({ isOpen, setIsOpen }) => {

  return (
    <div className="">
      <div
        className="w-full h-screen text-center fixed top-2 bg-light/50 backdrop-blur-lg text-dark z-10 flex justify-center ">
        <ul className="flex items-center gap-10 flex-col text-lg mt-32 font-bold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Get Started</li>
          <Switcher />
        </ul>
      </div>
    </div>
  )
}

const LaptopNav = () => {
  return (
    <div className="xl:w-fit md:max-w-fit hidden md:flex bg-dark/20 backdrop-blur-md h-fit xl:gap-48 md:gap-16 my-10 rounded-full md:px-6 lg:px-10 py-4 items-center dark:bg-dark/50 ">
      <div className="flex gap-4 items-center">
        <Image src="./logo-white.svg" alt="" className="filter invert dark:filter-none w-10 h-10" width={15} height={15} />
        <h1 className="uppercase md:text-3xl lg:text-5xl tracking-[14px] cursor-pointer">Ibento</h1>
      </div>
      <div>
        <ul className="flex items-center md:gap-10 lg:gap-10 xl:gap-16 lg:text-xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Get Started</li>
          <Switcher />
        </ul>
      </div>
    </div>
  )
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 800)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div>
      {isMobile ? (
        <>
          <div className="h-12 w-12 ml-3 fixed top-2 z-20 dark:text-light bg-dark/20 backdrop-blur-md">
            <Hamburger toggled={isOpen} onToggle={toggled => {
              setIsOpen(toggled)
              console.log(toggled)
            }} />
          </div>
          <div className={`${isOpen?"block":"hidden transition duration-200 ease-in-out"}`}>
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </>
      ) : (
        <LaptopNav />
      )}
    </div>
  )
};

export default Navbar;
