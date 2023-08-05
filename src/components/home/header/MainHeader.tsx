import Image from "next/image";
import React from "react";
import ThrillerPng from "../../../../public/svg/thriller.svg";
import Link from "next/link";

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <nav className="w-full h-full hidden lg:flex lg:items-center lg:p-2 lg:justify-center">
      <div className="w-[80%]  h-full flex items-center justify-between">
        <div className="w-[10%] h-full flex items-center gap-2">
          <Image src={ThrillerPng} alt="" className="h-full w-[2.5rem]" />
          <Link href={""} className=" text-center text-white items-center ">
            {" "}
            <span className="text-[1.3rem]">Thrillers</span>{" "}
            <span>travels</span>{" "}
          </Link>
        </div>
        <div className=" w-[40%] h-full py-2 px-4">
          <ul className="w-full h-full flex items-center justify-between text-white">
            <li className="nav_link">
              <Link href={"w-full"}>Home</Link>
            </li>
            <li className="nav_link">
              <Link href={"w-full"}>Flights</Link>
            </li>
            <li className="nav_link">
              <Link href={"w-full"}>About</Link>
            </li>
            <li className="nav_link">
              <Link href={"w-full"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="py-2 h-full px-2">
          <ul className="w-full h-full flex items-center gap-4 ">
            <li className="border border-white hover:bg-black text-white rounded h-full w-fit ">
              <Link href={""} className="w-full block py-2 px-4 h-full">
                login
              </Link>
            </li>
            <li className="border border-black  rounded h-full w-fit ">
              <Link
                href={""}
                className="w-full block h-full bg-black  py-2 px-4 text-white"
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

export default MainHeader;
