import React from "react";
import { MainHeader, MobileHeader } from ".";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full fixed top-0 left-0 bg-white h-[10vh]">
      <MainHeader />
      <MobileHeader />
    </header>
  );
};

export default Header;
