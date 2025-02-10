"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="z-10 text-white font-['Inter']">Click Me: {count}</div>
      <button
        onClick={handleClick}
        className="z-0 w-[200px] h-[200px] absolute bg-[#2b2b2b] rounded-[15px] shadow-[inset_0px_0px_4px_0px_rgba(78,168,94,0.25)] flex-col justify-start items-start inline-flex overflow-hidden"
      >
        <div className="w-[114px] h-[114px] p-2.5 justify-start items-center gap-2.5 inline-flex">
          <div className="w-[134px] h-[134px] bg-[#50d39d] rounded-full blur-[100px]"></div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 inline-flex"></div>
        <div className="w-[153px] h-[153px] p-2.5 justify-start items-center gap-2.5 inline-flex">
          <div className="w-[180px] h-[180px] bg-[#4da85e] rounded-full blur-[100px]"></div>
        </div>
      </button>
    </div>
  );
}
