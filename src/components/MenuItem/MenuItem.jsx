/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const MenuItem = ({
  value = "Menu Item",
  divider = false,
  rightSlot = false,
  leftSlot = false,
  smallScreen,
  dense,
  disGutters,
  stateProp,
  className,
  valueClassName,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    smallScreen: smallScreen || false,
    dense: dense || false,
    disGutters: disGutters || false,
    state: stateProp || "enabled",
  });

  return (
    <Link
      className={`menu-item state-0-${state.state} ${className}`}
      to={to}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`container dis-gutters-${state.disGutters} small-screen-1-${state.smallScreen} dense-${state.dense}`}
      >
        <div className="value-wrapper">
          <div className={`value-5 state-25-${state.state} dense-0-${state.dense} ${valueClassName}`}>{value}</div>
        </div>
      </div>
    </Link>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

MenuItem.propTypes = {
  value: PropTypes.string,
  divider: PropTypes.bool,
  rightSlot: PropTypes.bool,
  leftSlot: PropTypes.bool,
  smallScreen: PropTypes.bool,
  dense: PropTypes.bool,
  disGutters: PropTypes.bool,
  stateProp: PropTypes.oneOf(["hovered", "disabled", "selected", "enabled"]),
  to: PropTypes.string,
};
