"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Slider } from ".";
import SliderData from "../../../data/slider";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

type Props = {};

const HeroSlider = (props: Props) => {
  const [curState, setCurrent] = useState(0);

  const slideLen = SliderData.length;

  const moveRight = useCallback(() => {
    if (curState >= slideLen - 1) setCurrent(0);
    else {
      setCurrent((prev) => prev + 1);
    }
  }, [curState, slideLen]);

  const moveLeft = useCallback(() => {
    if (curState <= 0) {
      setCurrent(slideLen);
    }
    setCurrent((prev) => prev - 1);
  }, [curState, slideLen]);

  useEffect(() => {
    const timer = setInterval(() => {
      moveRight();
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, [curState, moveRight]);

  return (
    <div className="w-full lg:h-[90vh] h-[60vh] ">
      <div className="w-full h-full relative overflow-hidden">
        {SliderData.map((slide, i) => (
          <Slider
            key={i}
            imageUrl={slide.image}
            heading={slide.heading}
            content={slide.content}
            position={i - curState}
            current={curState + 1}
          />
        ))}

        <button
          onClick={moveLeft}
          className="absolute z-[2] h-[3rem] w-[3rem] left-0 lg:left-2 top-[50%] -translate-y-0"
        >
          <SlArrowLeft className="h-full w-full text-white" />
        </button>
        <button
          onClick={moveRight}
          className="absolute z-[2] h-[3rem] w-[3rem] right-0 lg:right-2 top-[50%] -translate-y-0"
        >
          <SlArrowRight className="h-full w-full text-white" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
