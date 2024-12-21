import React from "react";
import ArrowIcon from "../components/carousel/arrowIcon";

const SlideShowLayout = ({ children }) => {
  return (
    <div className="w-full h-screen ">
      <span className="absolute cursor-pointer w-16 h-full top-0 left-0 flex items-center justify-start px-2 hover:bg-gradient-to-r from-indigo-200 to-white group  transition-all duration-300">
        <ArrowIcon />
      </span>
      <span className="absolute cursor-pointer w-16 h-full top-0 right-0 flex items-center justify-end px-2 hover:bg-gradient-to-r from-white to-indigo-200 group  transition-all duration-300">
        <ArrowIcon left={false} />
      </span>
      <div className="w-[calc(100%-128px)] mx-auto h-full">{children}</div>
    </div>
  );
};

export default SlideShowLayout;
