import React from "react";

const ArrowIcon = ({ left = true }) => {
  const position = left ? "left-0" : "right-0";
  const rotateTop = left ? "group-hover:rotate-45" : "group-hover:-rotate-45";
  const rotateBottom = !left
    ? "group-hover:rotate-45"
    : "group-hover:-rotate-45";
  return (
    <div className={"w-2 h-10 relative group " + position}>
      <div
        className={`w-2 h-10 bg-indigo-950 rounded-sm rounded-t-lg relative top-0 left-0 rotate-0 origin-bottom  ${rotateTop} transition-all duration-300`}
      />
      <div
        className={`w-2 h-10 bg-indigo-950 rounded-sm rounded-b-lg relative -top-1 left-0 rotate-0 origin-top ${rotateBottom}  transition-all duration-300`}
      />
    </div>
  );
};

export default ArrowIcon;
