"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import ThrillerImg from "../../../../public/images/thriller_travel.webp";
import Link from "next/link";

type MobileLinkProps = {
  className?: string;
  name: string;
  url: string;
};

const MobileLink = (props: MobileLinkProps) => {
  const { className, name, url } = props;
  return (
    <li className="">
      <Link
        href={url}
        className={`${className} w-full h-full text-blue-500 hover:bg-blue-400 hover:text-white block p-2 rounded`}
      >
        {name}
      </Link>
    </li>
  );
};

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
        className={`w-full p-2 bg-[rgba(0,0,0,.2)] absolute top-[100%] left-0 transition-[transform] duration-300 border rounded ${
          slideIn ? "translate-x-0" : "translate-x-[-100%]"
        }  `}
      >
        <div className=" w-full h-full flex flex-col gap-4 ">
          <ul className="w-full flex flex-col gap-2">
            <MobileLink name="Home" url="" />
            <MobileLink name="Flights" url="" />
            <MobileLink name="About" url="" />
            <MobileLink name="Contact" url="" />
          </ul>
          <ul className="w-full flex flex-col gap-2">
            <li>
              <Link
                href={""}
                className=" w-full h-full border hover:bg-blue-400 border-blue-400 text-center font-medium hover: hover:text-white block p-2 rounded"
              >
                login
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className=" w-full h-full border bg-black border-black text-center font-medium hover: text-white block p-2 rounded"
              >
                signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileHeader;
