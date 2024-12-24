import React, { useMemo, useRef, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState(0);
  const ref = useRef();
  const screenWidth = window?.innerWidth;
  const heading = "UI Components";
  const textWidth = useMemo(() => {
    console.log(ref?.current?.clientWidth, screenWidth);
    return ref?.current?.clientWidth;
  }, [ref?.current]);

  return (
    <div
      className="w-full h-full overflow-hidden flex flex-col justify-around"
      onMouseMove={(e) =>
        setMousePosition(
          e.clientX - e.currentTarget.getBoundingClientRect().left
        )
      }
    >
      <div className="w-auto text-center">
        <div
          style={{
            left:
              mousePosition && textWidth
                ? mousePosition > (screenWidth - textWidth) / 2
                  ? mousePosition < screenWidth / 2 + textWidth / 2
                    ? mousePosition - 10
                    : screenWidth / 2 + textWidth / 2 - 6
                  : (screenWidth - textWidth) / 2 - 20
                : "-10px",
          }}
          className="h-28 w-2 mt-6 absolute z-10 bg-clip-content bg-transparent border-r-2 border-app-900 "
        />
        <span className="relative inline-block w-auto">
          <span
            ref={ref}
            style={{
              textShadow: "0 0 2px #d8b4fe ",
            }}
            className="absolute top-0 left-0 inline-block w-auto text-8xl leading-snug font-bold cursor-none"
          >
            {heading}
          </span>
          <span
            ref={ref}
            style={{
              backgroundSize: textWidth ? textWidth * 2 + " 100%" : "200% 100%",
              backgroundPositionX:
                mousePosition > (screenWidth - textWidth) / 2
                  ? mousePosition < screenWidth / 2 + textWidth / 2
                    ? -textWidth +
                      (mousePosition - (screenWidth - textWidth) / 2) +
                      5
                    : "0%"
                  : "-100%",
            }}
            className="relative inline-block w-auto text-8xl leading-snug font-bold text-transparent bg-clip-text cursor-none bg-gradient-to-r from-focus-500 via-app-600 to-transparent from-0% via-50% to-50%"
          >
            {heading}
          </span>
        </span>
      </div>

      <button onClick={() => console.log("clicked")}>Click me</button>
    </div>
  );
};

export default HeroSection;
