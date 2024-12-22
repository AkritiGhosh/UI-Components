import React, { lazy } from "react";

const DynamicComponent = ({ path, ...props }) => {
  const ImportedComponent = lazy(() => import(path));
  return <ImportedComponent {...props} />;
};

export default DynamicComponent;
