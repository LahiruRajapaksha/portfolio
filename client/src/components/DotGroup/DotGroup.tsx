import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NAVBAR_ITEMS } from "../constants";

type DotGroupProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const DotGroup = (pros: DotGroupProps) => {
  const { selectedPage, setSelectedPage } = pros;
  const selectedStyle = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full 
  before:border-2 before:border-yellow before:top-[-50%] before:left-[-50%]`;

  return (
    <div className="z-40 flex flex-col gap-6 fixed top-[60%] right-7">
      {NAVBAR_ITEMS.map((item) => (
        <AnchorLink
          key={item}
          className={`${
            selectedPage === item ? selectedStyle : "bg-gray-dark"
          } w-3 h-3 rounded-full`}
          href="Home"
          onClick={() => setSelectedPage("home")}
        />
      ))}
    </div>
  );
};

export default DotGroup;
