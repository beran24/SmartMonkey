import React from "react";
import { div } from "../Assets/LoadResults";
import { divLoadingResults } from "../Assets/Loader";
import loader from "../Assets/Images/loader.png";

const LoaderComponent = () => {
  return (
    <div style={div}>
      <img src={loader} />
      <div style={divLoadingResults}>Loading results...</div>
    </div>
  );
};

export default LoaderComponent;
