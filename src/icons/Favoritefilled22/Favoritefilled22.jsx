/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Favoritefilled22 = ({ color = "black", opacity = "unset", className }) => {
  return (
    <svg
      className={`favoritefilled-22 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 21.175L10.55 19.855C5.4 15.185 2 12.105 2 8.32501C2 5.24501 4.42 2.82501 7.5 2.82501C9.24 2.82501 10.91 3.63501 12 4.91501C13.09 3.63501 14.76 2.82501 16.5 2.82501C19.58 2.82501 22 5.24501 22 8.32501C22 12.105 18.6 15.185 13.45 19.865L12 21.175Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Favoritefilled22.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
