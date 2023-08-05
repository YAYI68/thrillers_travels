import Image from "next/image";
import React from "react";
import Stay from "../../../../public/images/stay.jpg";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div className="w-full h-full relative">
      {/* content */}
      <div className=" absolute w-full z-[2] h-full bg-transparent "></div>
      {/* Image */}
      <div className="w-full h-full relative">
        <div className="absolute h-full w-full z-[2] bg-[rgba(0,0,0,.5)]"></div>
        <Image src={Stay} alt="vacation" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Slider;
