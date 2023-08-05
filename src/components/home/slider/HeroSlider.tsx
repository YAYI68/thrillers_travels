import React from "react";
import { Slider } from ".";

type Props = {};

const HeroSlider = (props: Props) => {
  return (
    <div className="w-full absolute h-[90vh] bg-yellow-500">
      <Slider />
    </div>
  );
};

export default HeroSlider;
