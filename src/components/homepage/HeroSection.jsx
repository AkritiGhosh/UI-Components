import React, { useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState([0, 0]);
  const mouseRadius = 200;
  return (
    <div
      className="w-full h-full overflow-hidden cursor-none"
      onMouseMove={(e) =>
        setMousePosition([
          e.clientX -
            e.currentTarget.getBoundingClientRect().left -
            mouseRadius / 2,
          e.clientY -
            e.currentTarget.getBoundingClientRect().top -
            mouseRadius / 2,
        ])
      }
    >
      <div
        style={{
          width: mouseRadius + "px",
          height: mouseRadius + "px",
          top: mousePosition[1] + "px",
          left: mousePosition[0] + "px",
        }}
        className="size-24 rounded-full absolute z-10 bg-transparent border-2 border-white"
      />
      <button onClick={() => console.log("clicked")}>Click me</button>
    </div>
  );
};

export default HeroSection;
