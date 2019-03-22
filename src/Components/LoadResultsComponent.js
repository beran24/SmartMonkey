import React from "react";
import PropTypes from "prop-types";
import { div, buttonLoadResults } from "../Assets/LoadResults";

const LoadResultsComponent = ({ handleClickLoadResults }) => {
  return (
    <div style={div}>
      <button onClick={handleClickLoadResults} style={buttonLoadResults}>
        LOAD RESULTS
      </button>
    </div>
  );
};

LoadResultsComponent.propTypes = {
  handleClickLoadResults: PropTypes.func.isRequired
};

export default LoadResultsComponent;
