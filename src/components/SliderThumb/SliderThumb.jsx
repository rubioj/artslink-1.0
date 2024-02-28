/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SliderThumb = ({ size, color, disabled, className }) => {
  return (
    <div className={`slider-thumb color-2-${color} size-2-${size} ${className}`}>
      {!disabled && <div className="color" />}
    </div>
  );
};

SliderThumb.propTypes = {
  size: PropTypes.oneOf(["medium", "small"]),
  color: PropTypes.oneOf(["primary", "none", "secondary"]),
  disabled: PropTypes.bool,
};
