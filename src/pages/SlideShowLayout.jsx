import React, { useState } from "react";
import ArrowIcon from "../components/carousel/arrowIcon";
import Header from "../components/carousel/Header";
import jsonData from "../lib/data.json";
import { useParams } from "react-router-dom";

const SlideShowLayout = () => {
  const { layoutId } = useParams();
  const data = jsonData.filter((item) => item?.id == layoutId)[0];
  console.log(data);

  const [isDark, setIsDark] = useState(false);

  return (
    <div className="w-full h-screen relative">
      <Header isDark={isDark} setIsDark={setIsDark} />
      {data?.backId && (
        <span className="absolute cursor-pointer w-16 h-full top-0 left-0 flex items-center justify-start px-2 hover:bg-gradient-to-r from-slate-200 to-white group  transition-all duration-300">
          <ArrowIcon />
        </span>
      )}
      {data?.nextId && (
        <span className="absolute cursor-pointer w-16 h-full top-0 right-0 flex items-center justify-end px-2 hover:bg-gradient-to-r from-white to-slate-200 group  transition-all duration-300">
          <ArrowIcon left={false} />
        </span>
      )}
      <div className="w-[calc(100%-128px)] mx-auto h-full"></div>
    </div>
  );
};

export default SlideShowLayout;
