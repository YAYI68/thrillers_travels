"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import ThrillerImg from "../../../../public/images/thriller_travel.webp";

type Props = {};

const MobileHeader = (props: Props) => {
  const [slideIn, setSlideIn] = useState(false);
  return (
    <nav className="w-full h-full bg-red-600 flex items-center justify-center lg:hidden  relative">
      <div className="w-full p-2 bg-white h-full">
        <div className=" w-full h-full flex items-center py-1 justify-between">
          <div className="w-[30%] h-full">
            <Image src={ThrillerImg} alt={" "} className="w-full h-full" />
          </div>
          <button
            onClick={() => setSlideIn(!slideIn)}
            className="w-[2.5rem] h-full rounded"
          >
            {slideIn ? (
              <LiaTimesSolid className="h-full w-full" />
            ) : (
              <HiBars3BottomRight className="h-full w-full" />
            )}
          </button>
        </div>
      </div>
      {/* header Slide In */}
      <div
        className={`w-full p-2 absolute top-[100%] left-0 transition-[transform] ${
          slideIn ? "translate-x-0" : "translate-x-[-100%]"
        } bg-black h-[50vh]`}
      >
        <div className="bg-yellow-500 w-full h-full "></div>
      </div>
    </nav>
  );
};

export default MobileHeader;
