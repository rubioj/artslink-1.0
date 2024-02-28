/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Favoritefilled7 = ({ color = "#173F56", opacity = "unset", className }) => {
  return (
    <svg
      className={`favoritefilled-7 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.5 21.175L11.05 19.855C5.9 15.185 2.5 12.105 2.5 8.32501C2.5 5.24501 4.92 2.82501 8 2.82501C9.74 2.82501 11.41 3.63501 12.5 4.91501C13.59 3.63501 15.26 2.82501 17 2.82501C20.08 2.82501 22.5 5.24501 22.5 8.32501C22.5 12.105 19.1 15.185 13.95 19.865L12.5 21.175Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Favoritefilled7.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
