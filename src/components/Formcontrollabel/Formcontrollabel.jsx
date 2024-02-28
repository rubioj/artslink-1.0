/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkbox } from "../Checkbox";
import { FormLabel } from "../FormLabel";
import "./style.css";

export const Formcontrollabel = ({ labelPlacement, disabled, className, formLabelValue = "Label" }) => {
  return (
    <div className={`formcontrollabel ${labelPlacement} ${className}`}>
      {["start", "top"].includes(labelPlacement) && (
        <FormLabel className="instance-node-2" color="one" state={disabled ? "disabled" : "enabled"} value="Label" />
      )}

      <Checkbox
        checked={false}
        className="instance-node-2"
        color={disabled ? "default" : "primary"}
        indeterminate={false}
        size="medium"
        stateProp={disabled ? "disabled" : "enabled"}
      />
      {["bottom", "end"].includes(labelPlacement) && (
        <FormLabel
          className="instance-node-2"
          color="one"
          state={disabled ? "disabled" : "enabled"}
          value={formLabelValue}
        />
      )}
    </div>
  );
};

Formcontrollabel.propTypes = {
  labelPlacement: PropTypes.oneOf(["start", "top", "end", "bottom"]),
  disabled: PropTypes.bool,
  formLabelValue: PropTypes.string,
};
