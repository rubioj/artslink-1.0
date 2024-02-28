/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Favoritefilled22 } from "../../icons/Favoritefilled22";
import { Favoritefilled7 } from "../../icons/Favoritefilled7";
import "./style.css";

export const BottomNavigation = ({
  labelContent = "Label",
  active,
  label,
  state,
  className,
  icon = <Favoritefilled7 className="favorite-filled" color="black" opacity="0.6" />,
  override = <Favoritefilled22 className="favoritefilled-22" color="#173F56" />,
}) => {
  return (
    <div className={`bottom-navigation label-${label} state-0-${state} active-${active} ${className}`}>
      {!label && <>{override}</>}

      {label && (
        <>
          {icon}
          <div className="tab-one-wrapper">
            <div className="tab-one">{labelContent}</div>
          </div>
        </>
      )}
    </div>
  );
};

BottomNavigation.propTypes = {
  labelContent: PropTypes.string,
  active: PropTypes.bool,
  label: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "focused", "enabled"]),
};
