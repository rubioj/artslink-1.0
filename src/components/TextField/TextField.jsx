/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const TextField = ({
  placeholder = "Placeholder",
  value = "Value",
  adornEnd = false,
  placeholder1 = false,
  value1 = true,
  label = "Label",
  adornStart = false,
  helper = false,
  variant,
  size,
  stateProp,
  hasValue,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "standard",
    size: size || "medium",
    state: stateProp || "enabled",
    hasValue: hasValue || true,
  });

  return (
    <div
      className={`text-field ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {((!state.hasValue && state.size === "medium") ||
        (!state.hasValue && state.size === "small" && state.state === "disabled" && state.variant === "filled") ||
        (!state.hasValue && state.size === "small" && state.state === "disabled" && state.variant === "standard") ||
        (!state.hasValue && state.size === "small" && state.state === "hovered" && state.variant === "filled") ||
        (!state.hasValue && state.size === "small" && state.state === "hovered" && state.variant === "standard") ||
        (!state.hasValue && state.size === "small" && state.variant === "outlined") ||
        (state.hasValue && state.size === "medium" && state.state === "disabled" && state.variant === "outlined") ||
        (state.hasValue && state.size === "medium" && state.state === "hovered" && state.variant === "outlined") ||
        (state.hasValue && state.size === "medium" && state.variant === "filled") ||
        (state.hasValue && state.size === "medium" && state.variant === "standard") ||
        (state.hasValue && state.size === "small" && state.state === "disabled") ||
        (state.hasValue && state.size === "small" && state.state === "enabled" && state.variant === "outlined") ||
        (state.hasValue && state.size === "small" && state.state === "hovered") ||
        (state.hasValue && state.state === "error" && state.variant === "outlined") ||
        (state.hasValue && state.state === "focused" && state.variant === "outlined") ||
        (state.size === "small" && state.state === "enabled" && state.variant === "filled") ||
        (state.size === "small" && state.state === "enabled" && state.variant === "standard") ||
        (state.size === "small" && state.state === "error" && state.variant === "filled") ||
        (state.size === "small" && state.state === "error" && state.variant === "standard") ||
        (state.size === "small" && state.state === "focused" && state.variant === "filled") ||
        (state.size === "small" && state.state === "focused" && state.variant === "standard")) && (
        <div className={`input ${state.variant} state-9-${state.state} size-24-${state.size}`}>
          {state.variant === "standard" && (
            <>
              <div className={`temp-label state-10-${state.state} has-value-${state.hasValue}`}>
                {!state.hasValue && <>Label</>}

                {state.hasValue && <>{label}</>}
              </div>
              <div className={`label has-value-0-${state.hasValue} state-11-${state.state}`}>
                {!state.hasValue && <>{label}</>}

                {state.hasValue && (
                  <>
                    <>{value1 && <div className="value">{value}</div>}</>
                  </>
                )}
              </div>
              <img
                className="underline"
                alt="Underline"
                src={
                  state.state === "error" &&
                  (state.hasValue || state.size === "small") &&
                  (!state.hasValue || state.size === "medium")
                    ? "/img/underline-1.svg"
                    : state.state === "disabled" &&
                      (state.hasValue || state.size === "medium") &&
                      (!state.hasValue || state.size === "small")
                    ? "/img/underline-2.svg"
                    : state.state === "focused" &&
                      (state.hasValue || state.size === "medium") &&
                      (!state.hasValue || state.size === "small")
                    ? "/img/underline-3.svg"
                    : state.state === "focused" &&
                      (state.hasValue || state.size === "small") &&
                      (!state.hasValue || state.size === "medium")
                    ? "/img/underline-4.svg"
                    : state.state === "disabled" &&
                      (state.hasValue || state.size === "small") &&
                      (!state.hasValue || state.size === "medium")
                    ? "/img/underline-5.svg"
                    : state.state === "enabled" &&
                      (state.hasValue || state.size === "medium") &&
                      (!state.hasValue || state.size === "small")
                    ? "/img/underline-12.svg"
                    : state.state === "enabled" &&
                      (state.hasValue || state.size === "small") &&
                      (!state.hasValue || state.size === "medium")
                    ? "/img/underline-13.svg"
                    : state.state === "hovered" &&
                      (state.hasValue || state.size === "medium") &&
                      (!state.hasValue || state.size === "small")
                    ? "/img/underline-16.svg"
                    : state.state === "hovered" &&
                      (state.hasValue || state.size === "small") &&
                      (!state.hasValue || state.size === "medium")
                    ? "/img/underline-17.svg"
                    : "/img/underline.svg"
                }
              />
            </>
          )}

          {state.variant === "filled" && (
            <>
              <div className={`input-2 size-25-${state.size} has-value-1-${state.hasValue}`}>
                {!state.hasValue && <div className="text-wrapper">{label}</div>}

                {state.hasValue && (
                  <>
                    <div className="label-2">{label}</div>
                    <div className="content">
                      {["disabled", "enabled", "error", "hovered"].includes(state.state) && (
                        <div className="min-height-2" />
                      )}

                      {value1 && <div className="value-2">{value}</div>}

                      <div className="min-height-3" />
                      {state.state === "focused" && <div className="min-width" />}
                    </div>
                  </>
                )}
              </div>
              <img
                className="img"
                alt="Underline"
                src={
                  state.state === "focused"
                    ? "/img/underline-3.svg"
                    : state.state === "disabled"
                    ? "/img/underline-2.svg"
                    : state.state === "error"
                    ? "/img/underline.svg"
                    : state.state === "hovered"
                    ? "/img/underline-16.svg"
                    : "/img/underline-12.svg"
                }
              />
            </>
          )}

          {state.variant === "outlined" && !state.hasValue && (
            <div className="content-2">
              <div className="text-wrapper-2">Label</div>
            </div>
          )}

          {state.variant === "outlined" && state.hasValue && (
            <>
              <div className="content-3">{value1 && <div className="value-3">{value}</div>}</div>
              <div className="label-container">
                <div className="label-3">{label}</div>
              </div>
            </>
          )}
        </div>
      )}

      {state.variant === "outlined" && state.hasValue && state.size === "medium" && state.state === "enabled" && (
        <>
          <div className="content-wrapper">
            <div className="content-4">{value1 && <div className="value-4">{value}</div>}</div>
          </div>
          <div className="label-container">
            <div className="label-4">{label}</div>
          </div>
        </>
      )}
    </div>
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

TextField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  adornEnd: PropTypes.bool,
  placeholder1: PropTypes.bool,
  value1: PropTypes.bool,
  label: PropTypes.string,
  adornStart: PropTypes.bool,
  helper: PropTypes.bool,
  variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
  size: PropTypes.oneOf(["medium", "small"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "hovered", "error", "disabled"]),
  hasValue: PropTypes.bool,
};
