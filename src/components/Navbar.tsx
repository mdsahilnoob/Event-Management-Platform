import React, { useState, useEffect } from "react";
import Switcher from "./Switcher";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="">
      <div className="w-full h-screen text-center fixed top-2 bg-light/50 backdrop-blur-lg text-dark z-10 flex justify-center ">
        <ul className="flex items-center gap-10 flex-col text-lg mt-32 font-bold">
          <Link href="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer">About</li>
          </Link>
          <Link href="/login">
            <li className="cursor-pointer">Login</li>
          </Link>
          <Link href="/register">
            <li className="cursor-pointer">Get Started</li>
          </Link>
          <Switcher />
        </ul>
      </div>
    </div>
  );
};

interface laptopNavProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const LaptopNav: React.FC<laptopNavProps> = ({ active, setActive }) => {
  return (
    <div className="xl:w-fit md:max-w-fit hidden md:flex bg-dark/20 backdrop-blur-md h-fit xl:gap-48 md:gap-16 my-10 rounded-full md:px-6 lg:px-10 py-4 items-center dark:bg-dark/50 ">
      <div className="flex gap-4 items-center">
        <Image
          src="./logo-white.svg"
          alt=""
          className="filter invert dark:filter-none w-10 h-10"
          width={15}
          height={15}
        />
        <h1 className="uppercase md:text-3xl lg:text-5xl tracking-[14px] cursor-pointer">
          <Link href="/">Ibento</Link>
        </h1>
      </div>
      <div>
        <ul className="flex items-center md:gap-10 lg:gap-10 xl:gap-16 lg:text-xl">
          <li
            className={`cursor-pointer ${
              active === "home"
                ? "text-light font-semibold dark:text-tertiary"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActive("home");
            }}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`cursor-pointer ${
              active === "about"
                ? "text-light font-semibold dark:text-tertiary"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActive("about");
            }}
          >
            <Link href="/#about">About</Link>
          </li>
          <li
            className={`cursor-pointer ${
              active === "login"
                ? "text-light font-semibold dark:text-tertiary"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActive("login");
            }}
          >
            {" "}
            <Link href="/login">Login</Link>
          </li>
          <li
            className={`cursor-pointer ${
              active === "getStarted"
                ? "text-light font-semibold dark:text-tertiary"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActive("getStarted");
            }}
          >
            <Link href="/register">Get Started</Link>
          </li>
          <Switcher />
        </ul>
      </div>
    </div>
  );
};

interface navbarProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<navbarProps> = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 800);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          <div className="h-12 w-12 ml-3 fixed top-2 z-20 text-light bg-dark/20 backdrop-blur-md">
            <Hamburger
              toggled={isOpen}
              onToggle={(toggled) => {
                setIsOpen(toggled);
                console.log(toggled);
              }}
            />
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden transition duration-200 ease-in-out"
            }`}
          >
            <MobileNav />
          </div>
        </>
      ) : (
        <LaptopNav active={active} setActive={setActive} />
      )}
    </div>
  );
};

export default Navbar;
