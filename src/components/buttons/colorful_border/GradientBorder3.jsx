import React from "react";

const GradientBorder3 = () => {
  return (
    <div className="w-[300px] h-[300px] aspect-square relative z-[1] rounded-md text-center p-2 flex items-center  after:content-[''] after:absolute after:w-[500px] after:h-[500px] after:-z-[0] after:-left-[100px] after:bg-[conic-gradient(red,orange,yellow,lime,green,teal,blue,blueviolet,purple,red)] after:rounded-lg after:animate-rotate overflow-hidden">
      <p className="relative z-[2]  bg-white dark:bg-black dark:bg-black text-gray-700 dark:text-gray-300 h-full w-full  flex items-center  rounded-md p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a massa
        commodo, cursus nisi ut, dictum ante. Curabitur elementum ante sit amet
        ex eleifend, ut venenatis sem interdum.
      </p>
    </div>
  );
};

export default GradientBorder3;
