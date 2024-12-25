import React from "react";
import features from "../../lib/featureList.json";

const FeatureSection = () => {
  return (
    <>
      <h1
        style={{ textShadow: "1px 1px 5px teal, -1px -1px 5px teal" }}
        className=" underline underline-offset-[24px] text-focus-600 decoration-focus-600 decoration-2 text-7xl leading-relaxed font-light text-center pt-5"
      >
        Component list
      </h1>
      <div className="w-full mt-5 container m-auto">
        {features?.map((featureGroup) => (
          <div className="w-full">
            <h2 className="text-white">{featureGroup?.heading}</h2>
            <div className="w-full flex gap-5">
              {featureGroup?.content?.map((feature) => (
                <div className="w-1/3 p-4 rounded-lg border border-white">
                  <h3 className="text-white">{feature?.heading}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureSection;
