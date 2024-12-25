import React from "react";

const FloatingLabelTextfield = () => {
  return (
    <section>
      <div className="w-full relative">
        <input
          type="text"
          required
          className="w-[40vw] h-14 rounded-lg text-xl leading-[3.5rem] px-4 bg-transparent border-2 border-black dark:border-white focus:border-focus-500 !outline-0 peer"
          id="floating_label_input"
        />
        <label
          className="text-xl absolute left-4 top-2/4 -translate-y-1/2 pointer-events-none duration-300 text-black dark:text-white
          peer-focus:text-xs peer-focus:top-0 peer-focus:px-1 peer-focus:bg-white dark:peer-focus:bg-black 
          peer-valid:text-xs peer-valid:top-0 peer-valid:px-1 peer-valid:bg-white dark:peer-valid:bg-black peer-valid:text-focus-500 peer-focus:text-focus-500"
          htmlFor="floating_label_input"
        >
          Enter value here
        </label>
      </div>
    </section>
  );
};

export default FloatingLabelTextfield;
