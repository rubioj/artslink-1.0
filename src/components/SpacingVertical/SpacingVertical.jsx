/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SpacingVertical = ({ spacing, visibility, className }) => {
  return (
    <div className={`spacing-vertical visibility-${visibility} spacing-${spacing} ${className}`}>
      <div className="min-height-4" />
    </div>
  );
};

SpacingVertical.propTypes = {
  spacing: PropTypes.oneOf(["seven", "two", "three", "four", "one", "five", "eight", "six"]),
  visibility: PropTypes.bool,
};
