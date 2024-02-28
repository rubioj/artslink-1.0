/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SlidervalueLabel = ({ label = "12", active, className }) => {
  return (
    <div className={`slidervalue-label ${className}`}>
      <div className={`element active-1-${active}`}>{label}</div>
    </div>
  );
};

SlidervalueLabel.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
};
