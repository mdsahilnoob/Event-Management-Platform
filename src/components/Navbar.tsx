import React from "react";
import Switcher from "./Switcher";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="max-w-screen flex bg-[#a8a8a8] h-fit justify-between mt-10 mx-5 px-10 py-4 items-center dark:bg-light/10 rounded-full">
      <div className="flex gap-4 items-center">
        <Image src="./logo-white.svg" alt="" className="filter invert dark:filter-none w-10 h-10" width={15} height={15} />
        <h1 className="uppercase text-5xl tracking-[14px] cursor-pointer">Ibento</h1>
      </div>
      <div>
        <ul className="flex items-center gap-20 text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Get Started</li>
          <Switcher />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
