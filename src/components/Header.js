"use client";

import React, { useEffect, useState } from "react";
import {
  IoCloseOutline,
  IoHome,
  IoCalendar,
  IoFlagSharp,
  IoInformation,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoImage,
} from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiContactsBook2Fill } from "react-icons/ri";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(true);
  let scrollPos = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShow(currentScrollPos < 72 ||  currentScrollPos < scrollPos);
      scrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <div
      className={`header-container shadow-sm bg-nav fixed z-50 w-full transition-all duration-700 delay-100 ease-in-out h-fit text-base text-primary flex justify-between items-center font-medium 
      ${!showNav
          ? show
            ? "top-0 py-4  px-3 sm:px-3 lg:px-6"
            : "-top-24 sm:px-3 py-4 lg:px-6 items-center px-3"
          : "top-0 py-4 sm:py-3 px-3 sm:px-3 lg:px-6"
        }
    `}
    >
      {/* logo */}
      <Link href="/" className="shrink-0">
        <Logo />
      </Link>

      {/* nav icons */}
      <div className="header-items hidden lg:block">
        <ul className="flex gap-6 sm:gap-10 items-center">
          <li className="relative drop-down group">
            <Link href="/" className=" xl:text-base text-base flex items-center gap-1 lg:gap-2">
              <IoHome />
              Home
            </Link>
            <div className="absolute -bottom-2 w-full h-[3px] bg-accent scale-0 group-hover:scale-100 origin-center transition-all duration-200 rounded-2xl" />
          </li>
          <li className="relative drop-down group">
            <Link href="/schedule" className="flex items-center gap-1 lg:gap-2  xl:text-base text-base">
              <IoCalendar />
              Schedule
            </Link>
            <div className="absolute -bottom-2 w-full h-[3px] bg-accent scale-0 group-hover:scale-100 origin-center transition-all duration-200 rounded-2xl" />
          </li>
          <li className="relative drop-down group">

            <Link href="/results" className="flex items-center gap-1 lg:gap-2  xl:text-base text-base">
              <IoFlagSharp />
              Results
            </Link>
            <div className="absolute -bottom-2 w-full h-[3px] bg-accent scale-0 group-hover:scale-100 origin-center transition-all duration-200 rounded-2xl" />
          </li>
          <li className="relative drop-down group">

            <Link href="/gallery" className="flex items-center gap-1 lg:gap-2  xl:text-base text-base">
              <IoImage />
              Gallery
            </Link>
            <div className="absolute -bottom-2 w-full h-[3px] bg-accent scale-0 group-hover:scale-100 origin-center transition-all duration-200 rounded-2xl" />
          </li>
          <li className="relative drop-down group">
            <Link href="/about" className="flex items-center gap-1 lg:gap-2  xl:text-base text-base">
              <IoInformation />
              About Us
            </Link>
            <div className="absolute -bottom-2 w-full h-[3px] bg-accent scale-0 group-hover:scale-100 origin-center transition-all duration-200 rounded-2xl" />
          </li>
        </ul>
      </div>

      <div className="flex gap-3">
        {/* contact */}
        <Link href={"/contact"} className="flex justify-center items-center gap-3 hover:bg-accent hover:text-white  py-2 px-3 rounded-md transition-all duration-400 hover:-translate-y-0.5">
          <RiContactsBook2Fill className="size-4" />
          Contact
        </Link>

        <button
          className="relative flex items-center justify-center lg:hidden"
          onClick={(e) => {
            setShowNav(!showNav);
            document.body.style.overflowY = !showNav ? "hidden" : "auto";
            document.body.style.height = !showNav ? "100vh" : "auto";
          }}
        >
          {!showNav ? (
            <RxHamburgerMenu className="h-6 w-6" />
          ) : (
            <IoCloseOutline className="h-6 w-6 cursor-pointer" />
          )}
        </button>
      </div>

      {/* Responseive nav */}
      <div
        className={
          `nav-dropdown absolute flex flex-col justify-between h-[calc(100vh-72px)] inset-0 top-[72px] bg-nav px-2 w-screen lg:hidden ${showNav ? "" : "hidden"}`}
      >
        <div className="nav-headers scroll overflow-y-scroll">
          <ul className="p-3 flex flex-col gap-4 pt-20 text-white ">
            <li>
              <Link className="px-2 py-3 bg-accent/50 text-primary flex justify-between items-center w-full" href={"schedule"}>Schedule <IoChevronForwardOutline /></Link>
            </li>
            <li>
              <Link className="px-2 py-3 bg-accent/50 text-primary flex justify-between items-center w-full" href={"results"}>Results <IoChevronForwardOutline /></Link>
            </li>
            <li>
              <Link className="px-2 py-3 bg-accent/50 text-primary flex justify-between items-center w-full" href={"gallery"}>Gallery <IoChevronForwardOutline /></Link>
            </li>
            <li>
              <Link className="px-2 py-3 bg-accent/50 text-primary flex justify-between items-center w-full" href={"about"}>About <IoChevronForwardOutline /></Link>
            </li>
          </ul>
        </div>

        <Link href={"/contact"} className="bg-nav w-full z-50 p-4 mb-4 text-primary text-center border-2 border-border">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;