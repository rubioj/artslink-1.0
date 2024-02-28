/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowRedo = ({ color = "#709775", className }) => {
  return (
    <svg
      className={`arrow-redo ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 25 22"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.6425 18.8693C3.49799 18.8227 3.37261 18.735 3.28387 18.6184C3.19513 18.5019 3.14744 18.3623 3.14746 18.2192C3.14746 15.0782 3.82096 12.5662 5.15008 10.7525C6.75584 8.56109 9.28882 7.38117 12.6903 7.23465V3.78168C12.6903 3.64706 12.7325 3.5154 12.8117 3.40305C12.8909 3.29069 13.0035 3.20257 13.1357 3.14963C13.2678 3.09669 13.4137 3.08125 13.5551 3.10523C13.6966 3.12921 13.8274 3.19156 13.9313 3.28453L22.006 10.5033C22.0778 10.5675 22.1349 10.6446 22.1739 10.7301C22.2129 10.8155 22.2331 10.9075 22.2331 11.0004C22.2331 11.0934 22.2129 11.1853 22.1739 11.2708C22.1349 11.3562 22.0778 11.4334 22.006 11.4976L13.9313 18.7163C13.8274 18.8093 13.6966 18.8716 13.5551 18.8956C13.4137 18.9196 13.2678 18.9042 13.1357 18.8512C13.0035 18.7983 12.8909 18.7102 12.8117 18.5978C12.7325 18.4855 12.6903 18.3538 12.6903 18.2192V14.7916C10.6257 14.85 9.06585 15.1632 7.82391 15.7644C6.48195 16.4141 5.50885 17.3847 4.46006 18.6433C4.36597 18.7561 4.23662 18.8386 4.09006 18.8793C3.94349 18.92 3.78703 18.9168 3.6425 18.8702V18.8693Z"
        fill={color}
      />
    </svg>
  );
};

ArrowRedo.propTypes = {
  color: PropTypes.string,
};
