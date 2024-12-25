import React from "react";
import features from "../../lib/featureList.json";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <>
      <h1
        style={{
          textShadow:
            "teal 1px 1px 1px, teal -1px -1px 1px, teal 1px -1px 1px, teal -1px 1px 1px, teal 0px 0px 12px",
        }}
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
                <div className="w-1/3 p-4 rounded-lg border border-white flex flex-col gap-2">
                  <h3 className="text-white">{feature?.heading}</h3>
                  {feature?.imgSrc && (
                    <img
                      src={feature.imgSrc}
                      alt={feature?.heading + " working demo"}
                      className="max-w-full h-auto"
                    />
                  )}
                  {feature?.tags?.length > 0 ? (
                    <div className="w-full flex flex-wrap gap-2">
                      {feature?.tags?.map((tag) => (
                        <span className="w-auto py-1 px-2 rounded border border-focus-400 text-sm font-normal text-focus-50 flex items-center gap-1">
                          {tag?.icon ? tag.icon : null}
                          {tag?.data ?? tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {feature?.description && (
                    <p className="w-full text-sm font-light text-app-50">
                      {feature?.description}
                    </p>
                  )}
                  <div className="w-full flex justify-end">
                    <Link to={"/component/" + feature?.path}>
                      <button
                        type="button"
                        className="w-auto py-1 px-2 rounded border border-focus-50 text-sm font-semibold text-focus-50 flex items-center gap-1 hover:border-focus-400"
                      >
                        Open
                      </button>
                    </Link>
                  </div>
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
