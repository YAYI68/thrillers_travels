import React from "react";
import { MainHeader, MobileHeader } from ".";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full fixed bg-[rgba(0,0,0,.5)] z-[5] top-0 left-0 h-[10vh]">
      <MainHeader />
      <MobileHeader />
    </header>
  );
};

export default Header;
