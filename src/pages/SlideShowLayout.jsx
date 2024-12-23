import React, { useState } from "react";
import ArrowIcon from "../components/carousel/arrowIcon";
import Header from "../components/carousel/Header";
import { useNavigate, useParams } from "react-router-dom";
import data from "../lib/data";

const SlideShowLayout = () => {
  const { layoutId } = useParams();
  const nav = useNavigate();

  if (!layoutId) nav(data[0]?.id);

  const pageData = data.filter((item) => item?.id == layoutId)[0];

  const [isDark, setIsDark] = useState(false);
  const handleBack = () => nav("/component/" + pageData?.backId);
  const handleNext = () => nav("/component/" + pageData?.nextId);

  return (
    <div className="w-full h-screen relative flex flex-col">
      <Header isDark={isDark} setIsDark={setIsDark} />
      {pageData?.backId && (
        <span
          onClick={handleBack}
          className="absolute cursor-pointer w-16 h-full top-0 left-0 flex items-center justify-start px-2 hover:bg-gradient-to-r from-app-200 to-white group  transition-all duration-300"
        >
          <ArrowIcon />
        </span>
      )}
      {pageData?.nextId && (
        <span
          onClick={handleNext}
          className="absolute cursor-pointer w-16 h-full top-0 right-0 flex items-center justify-end px-2 hover:bg-gradient-to-r from-white to-app-200 group  transition-all duration-300"
        >
          <ArrowIcon left={false} />
        </span>
      )}
      <div className="w-[calc(100%-128px)] mx-auto h-full flex items-center justify-center">
        {pageData?.file}
      </div>
    </div>
  );
};

export default SlideShowLayout;
