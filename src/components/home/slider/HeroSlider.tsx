import React from "react";
import { Slider } from ".";

type Props = {};

const HeroSlider = (props: Props) => {
  return (
    <div className="w-full absolute h-[90vh] ">
      <Slider />
    </div>
  );
};

export default HeroSlider;
