import Image from "next/image";
import React from "react";
import Stay from "../../../../public/images/stay.jpg";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div className="w-full h-full relative">
      {/* content */}
      <div className="absolute w-full z-[2] h-full ">
        <div className="w-full h-full relative ">
          <div className="absolute lg:left-[50%] left-[10%] w-[80%] lg:w-[50%] lg:-translate-x-1/2 top-[25%] lg:top-[35%] text-center text-white">
            <h1 className="text-[3rem] text-center font-semibold ">
              Live Anywhere{" "}
            </h1>
            <p className="text-[1.2rem]">Get Inspiration for your next trip</p>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-full h-full relative">
        <div className="absolute h-full w-full  bg-[rgba(0,0,0,.5)]"></div>
        <Image src={Stay} alt="vacation" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Slider;
