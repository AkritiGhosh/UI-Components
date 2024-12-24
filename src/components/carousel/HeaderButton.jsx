import React from "react";
import { Link } from "react-router-dom";

const HeaderButton = ({ path, dataCheck = true, linkTo, ...props }) => {
  return dataCheck ? (
    <Link to={linkTo} className="size-6">
      <button
        type="button"
        className="size-6 cursor-pointer
        hover:drop-shadow-[0_0_2px_#FFFFFF] drop-shadow-[0_0_1px_#FFFFFF88]"
        {...props}
      >
        <img src={path} />
      </button>
    </Link>
  ) : null;
};

export default HeaderButton;
