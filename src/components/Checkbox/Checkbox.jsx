/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Hidden106 } from "../../icons/Hidden106";
import { Hidden2 } from "../../icons/Hidden2";
import { Hidden43 } from "../../icons/Hidden43";
import { Hidden59 } from "../../icons/Hidden59";
import { Hidden86 } from "../../icons/Hidden86";
import "./style.css";

export const Checkbox = ({ checked, indeterminate, size, color, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    checked: checked || false,
    indeterminate: indeterminate || false,
    size: size || "medium",
    color: color || "primary",
    state: stateProp || "enabled",
  });

  return (
    <div
      className={`checkbox ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`padding state-${state.state} color-21-${state.color}`}>
        {!state.checked && !state.indeterminate && (
          <Hidden2
            className={`${state.size === "large" ? "hidden" : state.size === "medium" ? "hidden-106" : "hidden-86"}`}
            opacity={state.state === "disabled" ? "0.38" : "0.6"}
          />
        )}

        {state.indeterminate && (
          <Hidden43
            className={`${state.size === "large" ? "hidden" : state.size === "medium" ? "hidden-106" : "hidden-86"}`}
            color={
              state.color === "primary"
                ? "#173F56"
                : state.color === "secondary"
                ? "#574B3F"
                : state.color === "error"
                ? "#D32F2F"
                : state.color === "warning"
                ? "#EF6C00"
                : state.color === "info"
                ? "#0288D1"
                : state.color === "success"
                ? "#2E7D32"
                : undefined
            }
            opacity={state.color === "secondary" ? "0.82" : undefined}
          />
        )}

        {state.checked && state.size === "small" && (
          <Hidden86
            className="hidden-86"
            color={
              state.color === "primary"
                ? "#173F56"
                : state.color === "secondary"
                ? "#574B3F"
                : state.color === "error"
                ? "#D32F2F"
                : state.color === "warning"
                ? "#EF6C00"
                : state.color === "info"
                ? "#0288D1"
                : state.color === "success"
                ? "#2E7D32"
                : "black"
            }
            opacity={
              state.color === "default" && ["enabled", "focused", "hovered"].includes(state.state)
                ? "0.6"
                : state.color === "secondary"
                ? "0.82"
                : state.state === "disabled"
                ? "0.38"
                : undefined
            }
          />
        )}

        {state.checked && !state.indeterminate && state.size === "large" && (
          <Hidden59
            className="hidden"
            color={
              state.color === "default" || state.state === "disabled"
                ? "black"
                : state.color === "secondary"
                ? "#574B3F"
                : state.color === "error"
                ? "#D32F2F"
                : state.color === "warning"
                ? "#EF6C00"
                : state.color === "info"
                ? "#0288D1"
                : state.color === "success"
                ? "#2E7D32"
                : "#173F56"
            }
            opacity={
              state.state === "disabled"
                ? "0.38"
                : state.color === "default"
                ? "0.6"
                : state.color === "secondary"
                ? "0.82"
                : undefined
            }
          />
        )}

        {state.checked && state.size === "medium" && (
          <Hidden106
            className="hidden-106"
            color={
              state.color === "primary"
                ? "#173F56"
                : state.color === "secondary"
                ? "#574B3F"
                : state.color === "error"
                ? "#D32F2F"
                : state.color === "warning"
                ? "#EF6C00"
                : state.color === "info"
                ? "#0288D1"
                : state.color === "success"
                ? "#2E7D32"
                : "black"
            }
            opacity={
              state.color === "default" && ["enabled", "focused", "hovered"].includes(state.state)
                ? "0.6"
                : state.color === "secondary"
                ? "0.82"
                : state.state === "disabled"
                ? "0.38"
                : undefined
            }
          />
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (
    state.checked === false &&
    state.color === "default" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "default",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "primary" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "primary",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "primary" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "primary",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "default" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "default",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "secondary" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "secondary",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "error" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "error",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "warning" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "warning",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "info" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "info",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "success" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "success",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "secondary" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "secondary",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "error" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "error",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "warning" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "warning",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "info" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "info",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "success" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "success",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "default" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "default",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "primary" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "primary",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "primary" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "primary",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "default" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "default",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "secondary" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "secondary",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "error" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "error",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "warning" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "warning",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "info" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "info",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "success" &&
    state.indeterminate === false &&
    state.size === "large" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "success",
          indeterminate: false,
          size: "large",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "secondary" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "secondary",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "error" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "error",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "warning" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "warning",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "info" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "info",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "success" &&
    state.indeterminate === false &&
    state.size === "small" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "success",
          indeterminate: false,
          size: "small",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "default" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "default",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "primary" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "primary",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "secondary" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "secondary",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "error" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "error",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "warning" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "warning",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "info" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "info",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === false &&
    state.color === "success" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          color: "success",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "default" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "default",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "primary" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "primary",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "secondary" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "secondary",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "error" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "error",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "warning" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "warning",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "info" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "info",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

  if (
    state.checked === true &&
    state.color === "success" &&
    state.indeterminate === false &&
    state.size === "medium" &&
    state.state === "hovered"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          color: "success",
          indeterminate: false,
          size: "medium",
          state: "enabled",
        };
    }
  }

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

Checkbox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf(["warning", "info", "default", "success", "secondary", "primary", "error"]),
  stateProp: PropTypes.oneOf(["hovered", "disabled", "focused", "enabled"]),
};
