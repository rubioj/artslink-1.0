/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Starsharp30 = ({ color = "#D32F2F", opacity = "unset", className }) => {
  return (
    <svg
      className={`starsharp-30 ${className}`}
      fill="none"
      height="35"
      viewBox="0 0 35 35"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.5 25.9146L26.5125 31.3542L24.1208 21.1021L32.0833 14.2042L21.5979 13.3146L17.5 3.64583L13.402 13.3146L2.91663 14.2042L10.8791 21.1021L8.48746 31.3542L17.5 25.9146Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Starsharp30.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
