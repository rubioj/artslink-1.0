/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Hidden43 = ({ color = "#2E7D32", opacity = "unset", className }) => {
  return (
    <svg
      className={`hidden-43 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M22.1667 3.5H5.83333C4.55 3.5 3.5 4.55 3.5 5.83333V22.1667C3.5 23.45 4.55 24.5 5.83333 24.5H22.1667C23.45 24.5 24.5 23.45 24.5 22.1667V5.83333C24.5 4.55 23.45 3.5 22.1667 3.5ZM19.8333 15.1667H8.16667V12.8333H19.8333V15.1667Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Hidden43.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
