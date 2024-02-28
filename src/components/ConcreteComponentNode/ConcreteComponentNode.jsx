/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowRedo } from "../../icons/ArrowRedo";
import { StyleOutline } from "../../icons/StyleOutline";
import { StyleSharp } from "../../icons/StyleSharp";
import "./style.css";

export const ConcreteComponentNode = ({ style }) => {
  return (
    <>
      {style === "outline" && <StyleOutline className="instance-node-3" />}

      {style === "fill" && <ArrowRedo className="instance-node-3" color="black" />}

      {style === "sharp" && <StyleSharp className="instance-node-3" />}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  style: PropTypes.oneOf(["fill", "sharp", "outline"]),
};
