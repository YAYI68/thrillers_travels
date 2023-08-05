import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: any;
  heading: string;
  content: string;
  position: number;
  current: number;
};

const Slider = (props: Props) => {
  const { imageUrl, heading, content, position, current } = props;
  return (
    <div
      style={{
        transform: `translateX(${100 * position}% )`,
        transition: "transform",
        transitionDuration: "250ms",
      }}
      className=" w-full h-full absolute"
    >
      {/* content */}
      <div className="w-full h-full relative">
        <div className="absolute w-full z-[2] h-full ">
          <div className="w-full h-full relative ">
            <div className="absolute lg:left-[50%] left-[10%] w-[80%] lg:w-[50%] lg:-translate-x-1/2 top-[25%] lg:top-[35%] text-center text-white">
              <h1 className=" text-[2.2rem] lg:text-[3rem] text-center font-semibold ">
                {heading}
              </h1>
              <p className=" lg:text-[1.2rem]">{content}</p>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full h-full relative">
          <div className="absolute h-full w-full  bg-[rgba(0,0,0,.5)]"></div>
          <Image src={imageUrl} alt="vacation" className="w-full h-full" />
        </div>
        {/* Current Indicator */}
        <div className="w-[30%]  absolute bottom-0 left-[5%] text-white flex items-center gap-2">
          <p>
            0<span>{current}</span>
          </p>
          <div className="h-1 w-5 bg-white"></div>
          <p>
            0<span>3</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
