/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { Starsharp30 } from "../../icons/Starsharp30";
import { Icon } from "../Icon";
import "./style.css";

export const IconButton = ({
  size,
  color,
  stateProp,
  className,
  iconSize = "medium",
  iconIcon = <Starsharp30 className="starsharp-30" color="white" />,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "medium",
    color: color || "default",
    state: stateProp || "enabled",
  });

  return (
    <Link
      className={`icon-button size-${state.size} color-${state.color} ${state.state} ${className}`}
      to={to}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <Icon className="icon-instance" icon={iconIcon} size={iconSize} />
    </Link>
  );
};

function reducer(state, action) {
  if (state.color === "primary" && state.size === "small" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "primary",
          size: "small",
          state: "hovered",
        };
    }
  }

  if (state.color === "primary" && state.size === "small" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "primary",
          size: "small",
          state: "enabled",
        };
    }
  }

  if (state.color === "inherit" && state.size === "small" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "inherit",
          size: "small",
          state: "hovered",
        };
    }
  }

  if (state.color === "inherit" && state.size === "small" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "inherit",
          size: "small",
          state: "enabled",
        };
    }
  }

  if (state.color === "inherit-white" && state.size === "small" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "inherit-white",
          size: "small",
          state: "hovered",
        };
    }
  }

  if (state.color === "inherit-white" && state.size === "small" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "inherit-white",
          size: "small",
          state: "enabled",
        };
    }
  }

  if (state.color === "default" && state.size === "small" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "default",
          size: "small",
          state: "hovered",
        };
    }
  }

  if (state.color === "default" && state.size === "small" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "default",
          size: "small",
          state: "enabled",
        };
    }
  }

  if (state.color === "secondary" && state.size === "small" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "secondary",
          size: "small",
          state: "hovered",
        };
    }
  }

  if (state.color === "secondary" && state.size === "small" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "secondary",
          size: "small",
          state: "enabled",
        };
    }
  }

  if (state.color === "error" && state.size === "small" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "error",
          size: "small",
          state: "hovered",
        };
    }
  }

  if (state.color === "error" && state.size === "small" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "error",
          size: "small",
          state: "enabled",
        };
    }
  }

  if (state.color === "warning" && state.size === "small" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "warning",
          size: "small",
          state: "hovered",
        };
    }
  }

  if (state.color === "warning" && state.size === "small" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "warning",
          size: "small",
          state: "enabled",
        };
    }
  }

  if (state.color === "info" && state.size === "small" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "info",
          size: "small",
          state: "hovered",
        };
    }
  }

  if (state.color === "info" && state.size === "small" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "info",
          size: "small",
          state: "enabled",
        };
    }
  }

  if (state.color === "success" && state.size === "small" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "success",
          size: "small",
          state: "hovered",
        };
    }
  }

  if (state.color === "success" && state.size === "small" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "success",
          size: "small",
          state: "enabled",
        };
    }
  }

  if (state.color === "primary" && state.size === "medium" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "primary",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "primary" && state.size === "medium" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "primary",
          size: "large",
          state: "enabled",
        };
    }
  }

  if (state.color === "primary" && state.size === "large" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "primary",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "inherit" && state.size === "medium" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "inherit",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "inherit" && state.size === "medium" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "inherit",
          size: "large",
          state: "enabled",
        };
    }
  }

  if (state.color === "inherit" && state.size === "large" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "inherit",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "inherit-white" && state.size === "medium" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "inherit-white",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "inherit-white" && state.size === "medium" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "inherit-white",
          size: "large",
          state: "enabled",
        };
    }
  }

  if (state.color === "inherit-white" && state.size === "large" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "inherit-white",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "default" && state.size === "medium" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "default",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "default" && state.size === "medium" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "default",
          size: "large",
          state: "enabled",
        };
    }
  }

  if (state.color === "default" && state.size === "large" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "default",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "secondary" && state.size === "medium" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "secondary",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "secondary" && state.size === "medium" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "secondary",
          size: "large",
          state: "enabled",
        };
    }
  }

  if (state.color === "secondary" && state.size === "large" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "secondary",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "error" && state.size === "medium" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "error",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "error" && state.size === "medium" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "error",
          size: "large",
          state: "enabled",
        };
    }
  }

  if (state.color === "error" && state.size === "large" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "error",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "warning" && state.size === "medium" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "warning",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "warning" && state.size === "medium" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "warning",
          size: "large",
          state: "enabled",
        };
    }
  }

  if (state.color === "warning" && state.size === "large" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "warning",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "info" && state.size === "medium" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "info",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "info" && state.size === "medium" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "info",
          size: "large",
          state: "enabled",
        };
    }
  }

  if (state.color === "info" && state.size === "large" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "info",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "success" && state.size === "medium" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "success",
          size: "medium",
          state: "hovered",
        };
    }
  }

  if (state.color === "success" && state.size === "medium" && state.state === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          color: "success",
          size: "large",
          state: "enabled",
        };
    }
  }

  if (state.color === "success" && state.size === "large" && state.state === "enabled") {
    switch (action) {
      case "mouse_enter":
        return {
          color: "success",
          size: "medium",
          state: "hovered",
        };
    }
  }

  return state;
}

IconButton.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf([
    "warning",
    "inherit",
    "info",
    "default",
    "success",
    "secondary",
    "primary",
    "inherit-white",
    "error",
  ]),
  stateProp: PropTypes.oneOf(["hovered", "disabled", "focused", "enabled"]),
  iconSize: PropTypes.string,
  to: PropTypes.string,
};
