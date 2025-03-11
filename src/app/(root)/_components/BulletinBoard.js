"use client";

import { News } from "@/data/NoticeData";
import React, { useMemo, useState } from "react";

const BulletinBoard = () => {
  // Define categories and matching colors
  const categories = ["all", ...new Set(News.map((news) => news.type))];
  const colors = [
    "#FF5733", "#FFBD33", "#DBFF33", "#75FF33", "#33FF57",
    "#33FFBD", "#33DBFF", "#3375FF", "#5733FF", "#BD33FF"
  ];

  // Create navigation items from the above arrays
  const navItems = useMemo(
    () => categories.map((type, index) => ({ type, color: colors[index % colors.length] })),
    [categories, colors]
  );

  // Generate news data for each category (except "all")
  const data = useMemo(() => {
    const news = [];
    navItems.slice(1).forEach(({ type, color }) => {
      News.forEach(n => {
        if (n.type === type) {
          news.push({ color, ...n });
        }
      });
    });
    // Sort news so the latest date comes first
    return news.sort((a, b) => (a.date > b.date ? -1 : 1));
  }, [navItems]);

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter news based on the selected category ("all" shows everything)
  const filteredNews = useMemo(() => {
    return selectedCategory === "all"
      ? data
      : data.filter((item) => item.type === selectedCategory);
  }, [selectedCategory, data]);

  return (
    <div
      className="relative w-full mx-auto grid bg-white shadow-md"
      style={{ border: "4px solid hsl(207,79%,21%)" }}
    >
      {/* Pseudo-element simulation */}
      <div className="absolute inset-0 bg-[hsl(180,90%,2%)] transform -rotate-2 scale-[1.02] z-[-5]" />

      {/* Heading */}
      <h1
        className="mb-5 w-full text-xl text-white bg-[hsl(200,100%,10%)] p-3"
        style={{ fontFamily: "'Chivo', sans-serif" }}
      >
        News
      </h1>

      {/* Navigation */}
      <nav className="flex my-4 mx-8 justify-evenly w-4/5 overflow-x-scroll gap-3 py-3">
        {navItems.map(({ type, color }) => (
          <button
            key={type}
            onClick={() => setSelectedCategory(type)}
            className={`capitalize rounded-full cursor-pointer hover:text-[hsl(0,0%,35%)] hover:underline ${selectedCategory === type && "font-bold"
              }`}
            style={{
              background: `${color}44`,
              padding: "0.3rem 0.75rem",
              fontSize: "0.85rem",
              letterSpacing: "0.05rem",
            }}
          >
            {type}
          </button>
        ))}
      </nav>

      {/* News Section */}
      <section className="flex flex-col mt-4 mb-12 w-4/5 max-h-[300px] overflow-y-auto mx-auto">
        {filteredNews.map((item, index) => (
          <div
            key={`${item.type}-${index}`}
            className={`no-underline text-inherit my-5 pl-3`}
            style={{ borderLeft: `4px solid ${item.color}`}}
          >
            <p className="date text-[0.8rem]">{item.date}</p>
            <p className="title text-[0.9rem]">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BulletinBoard;
