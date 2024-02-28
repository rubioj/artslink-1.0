/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Starsharp30 } from "../../icons/Starsharp30";
import "./style.css";

export const Icon = ({
  size,
  className,
  icon = <Starsharp30 className="star-sharp" color="black" opacity="0.56" />,
}) => {
  return <div className={`icon ${size} ${className}`}>{icon}</div>;
};

Icon.propTypes = {
  size: PropTypes.oneOf(["large", "inherit", "medium", "small"]),
};
