/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Menufilled9 = ({ color = "white", opacity = "unset", className }) => {
  return (
    <svg
      className={`menufilled-9 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill={color} fillOpacity={opacity} />
    </svg>
  );
};

Menufilled9.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
