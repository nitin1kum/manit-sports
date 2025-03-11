"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Logo from "@/components/Logo";

const Items = ({ data, id }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [showLogo, setShowLogo] = useState(false);
  const scrollRef = useRef(null);
  const navRef = useRef(null);

  if(!data.length || data.length === 0){
    return (
      <div className="flex items-center justify-center font-xl font-semibold h-48 px-10">
        No Event to show
      </div>
    )
  }

  const handleScroll = () => {
    if (!scrollRef.current || !navRef.current) return;

    const elemScroll = scrollRef.current.offsetTop;
    const elemHeight = scrollRef.current.clientHeight;
    const isScrolled = window.scrollY > elemScroll && window.scrollY < elemScroll + elemHeight;
    navRef.current.classList.toggle("sticky", isScrolled);
    setShowLogo(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div key={data.section} ref={scrollRef}>
      {/* Navigation Header */}
      <div
        className={"fixed-nav-header w-full top-0 flex-col sm:flex-row transition-all duration-700 delay-100 bg-nav ease-in-out text-primary sm:py-4 flex sm:gap-6 sm:px-6 items-center z-10"}
        ref={navRef}
      >
        <div className={`transition-all shrink-0 hidden sm:block duration-700 ease-in-out overflow-hidden ${showLogo ? "w-52" : "w-0"}`}>
          <Logo />
        </div>
        <h1 className="text-2xl py-2 sm:py-0 sm:px-0 px-6 text-center w-full sm:w-min font-bold">Events</h1>
        <ul className="flex items-center py-2 sm:py-0 px-0 text-sm sm:text-base w-full overflow-x-scroll whitespace-nowrap">
          {data.map((elem, index) => (
            <li
              key={`${elem.header}-${index}`}
              className={`font-medium border-r-2 border-border leading-4 my-2 whitespace-nowrap transition-all duration-200
                ${index >= slideIndex ? "max-w-[500px] px-6" : "px-3 text-transparent max-w-0 overflow-hidden my-0"}
                ${slideIndex === index ? "cursor-default text-secondary" : "cursor-pointer hover:text-secondary"}
              `}

              onClick={() => swiper && swiper.slideTo(index)}
            >
              {elem.header}
            </li>
          ))}
        </ul>
      </div>

      {/* Swiper Section */}
      <Swiper
        freeMode={true}
        speed={1000}
        onActiveIndexChange={(swiper) => setSlideIndex(swiper.activeIndex)}
        onSwiper={setSwiper}
        className="h-full w-full"
      >
        {data.map((elem, index) => (
          <SwiperSlide key={`${elem.header}-${index}`}>
            <div className="relative">
              <div className="details absolute bottom-1/3 font-medium left-1/10 z-10 text-black px-4 py-2">
                <h2 className="text-7xl font-semibold text-white">{elem.header}</h2>
                <div className="flex gap-10 mt-5">
                  <Link href={"/result"} className="border-1 hover:bg-white/30 border-white px-6 font-m py-2 text-white">Results</Link>
                  <Link href={"/schedule"} className="border-1 hover:bg-white/30 border-white px-6 font-m py-2 text-white">Schedule</Link>
                </div>
              </div>
              <img className="h-[500px] sm:h-[600px] w-full object-cover brightness-75" src={elem.image} alt={elem.header} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Items;
