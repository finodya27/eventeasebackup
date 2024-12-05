"use client";

import Image from "next/image";
import React from "react";

export default function ProfileSidebar({ setActivePage }) {
  const sidebarItems = ["Account", "List Business", "Request", "Log Out"];

  const handleNavigation = (item) => {
    if (item === "Log Out") {
      window.location.href = "/"; 
    } else {
      setActivePage(item); 
    }
  };

  return (
    <aside className="flex flex-col items-center px-4 py-10 font-semibold rounded-lg bg-blue-400 bg-opacity-10 min-w-[240px] w-[262px]">
      <div className="flex flex-col items-center text-xl leading-relaxed text-black">
        <Image
          loading="lazy"
          src="/Avatar.png"
          alt="Sofia Havertz Profile"
          className="object-contain aspect-square w-[82px]"
          width={82}
          height={82}
        />
        <div className="mt-1.5">Sofia Havertz</div>
      </div>
      <nav className="flex flex-col mt-10 max-w-full text-base leading-loose text-zinc-500 w-[230px]">
        {sidebarItems.map((item, index) => (
          <button
            key={item}
            onClick={() => handleNavigation(item)}
            className={`py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none ${
              index === 0
                ? "border-b border-solid border-b-neutral-900 text-neutral-900"
                : "border-b border-solid border-b-white border-b-opacity-0"
            } ${index > 0 ? "mt-3" : ""} w-full`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
