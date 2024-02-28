/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Hidden86 = ({ color = "#574B3F", opacity = "unset", className }) => {
  return (
    <svg
      className={`hidden-86 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.8333 2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.7583 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.7583 2.5 15.8333 2.5ZM8.33333 14.1667L4.16667 10L5.34167 8.825L8.33333 11.8083L14.6583 5.48333L15.8333 6.66667L8.33333 14.1667Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Hidden86.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
