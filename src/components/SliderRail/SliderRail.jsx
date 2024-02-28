/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SliderRail = ({ size, color, disabled, orientation, className }) => {
  return <div className={`slider-rail color-0-${color} ${orientation} size-0-${size} ${className}`} />;
};

SliderRail.propTypes = {
  size: PropTypes.oneOf(["medium", "small"]),
  color: PropTypes.oneOf(["primary", "none", "secondary"]),
  disabled: PropTypes.bool,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};
