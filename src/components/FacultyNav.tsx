import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSnapshot } from "valtio";
import state from "../../store";
import { Sling as Hamburger } from "hamburger-react";
import Switcher from "./Switcher"; 

const FacultyNav = () => {
  const snap = useSnapshot(state);

  return (
    <div className="w-full bg-dark/20 backdrop-blur-md h-16 flex justify-between dark:bg-[#D9D9D9]/20 items-center py-4 px-6 md:px-10 dark:text-light">
      <div className="flex items-center gap-2">
        <Image
          src="/logo-white.svg"
          alt="logo"
          className="filter invert dark:filter-none w-10 h-10"
          width={15}
          height={15}
        />
        <h1 className="uppercase text-3xl lg:text-5xl tracking-[14px] cursor-pointer">
          <Link href="/">Ibento</Link>
        </h1>
      </div>
      <div>
        <ul className="flex gap-10 lg:gap-16 lg:text-xl">
          <li
            className={`cursor-pointer ${
              snap.active === "dashboard"
                ? "text-light font-semibold dark:text-tertiary"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              state.active = "dashboard";
            }}
          >
            <Link href="/dashboard/facultyInCharge">Dashboard</Link>
          </li>
          <li
            className={`cursor-pointer ${
              snap.active === "createEvent"
                ? "text-light font-semibold dark:text-tertiary"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              state.active = "createEvent";
            }}
          >
            <Link href="/dashboard/studentLead/apply">Create Event</Link>
          </li>
          <li
            className={`cursor-pointer ${
              snap.active === "allEvents"
                ? "text-light font-semibold dark:text-tertiary"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              state.active = "allEvents";
            }}
          >
            <Link href="/all-events">All Events</Link>
          </li>
          <li
            className={`cursor-pointer ${
              snap.active === "trackEvents"
                ? "text-light font-semibold dark:text-tertiary"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              state.active = "trackEvents";
            }}
          >
            <Link href="/dashboard/studentLead/details">Track your events</Link>
          </li>
          <Switcher />
        </ul>
      </div>
    </div>
  );
};
export default FacultyNav;
