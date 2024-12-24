import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../lib/data";
import menu from "../../assets/menu.svg";
import article from "../../assets/article.svg";
import code from "../../assets/code.svg";
import lightTheme from "../../assets/lightTheme.svg";
import darkTheme from "../../assets/darkTheme.svg";
import HeaderButton from "./HeaderButton";

const Header = ({ isDark, setIsDark }) => {
  const { layoutId } = useParams();
  const data = jsonData.filter((item) => item?.id == layoutId)[0];
  return (
    <div className="z-50 relative w-full h-16 bg-app-800 flex justify-between px-16 text-app-300">
      <div className="h-full inline-flex items-center gap-5">
        <HeaderButton linkTo="/" path={menu} />
        <p className="text-xl text-white drop-shadow-[0_0_1px_#FFFFFF66]">
          {data?.heading}
        </p>
      </div>
      <div className="h-full inline-flex items-center gap-5">
        <HeaderButton
          dataCheck={data?.article}
          linkTo={data?.article}
          path={article}
        />
        <HeaderButton dataCheck={data?.code} linkTo={data?.code} path={code} />
        {isDark ? (
          <HeaderButton path={lightTheme} onClick={() => setIsDark(false)} />
        ) : (
          <HeaderButton path={darkTheme} onClick={() => setIsDark(true)} />
        )}
      </div>
    </div>
  );
};

export default Header;
