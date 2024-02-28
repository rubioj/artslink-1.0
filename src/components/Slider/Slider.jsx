/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SliderRail } from "../SliderRail";
import { SliderThumb } from "../SliderThumb";
import { SliderTrack } from "../SliderTrack";
import { SlidervalueLabel } from "../SlidervalueLabel";
import "./style.css";

export const Slider = ({
  label = false,
  values = true,
  size,
  variant,
  color,
  state,
  orientation,
  className,
  overlapGroupClassName,
  sliderRailSizeSmallColorClassName,
}) => {
  return (
    <div className={`slider orientation-0-${orientation} state-${state} ${variant} size-4-${size} ${className}`}>
      <div className="overlap-group-wrapper">
        <div className={`overlap-group ${overlapGroupClassName}`}>
          {orientation === "vertical" && variant === "continuous" && ["disabled", "enabled"].includes(state) && (
            <>
              <SliderThumb
                className={`${size === "medium" ? "class-7" : "class-8"}`}
                color={
                  color === "secondary" && state === "enabled" ? "secondary" : state === "disabled" ? "none" : "primary"
                }
                disabled={state === "disabled" ? true : undefined}
                size={size === "medium" ? "medium" : "small"}
              />
              <SliderTrack
                className={`${size === "medium" ? "class-9" : "class-10"}`}
                color={
                  color === "secondary" && state === "enabled" ? "secondary" : state === "disabled" ? "none" : "primary"
                }
                disabled={state === "disabled" ? true : undefined}
                orientation="vertical"
                size={size === "medium" ? "medium" : "small"}
              />
            </>
          )}

          {((orientation === "horizontal" && state === "hover") ||
            (orientation === "vertical" && state === "hover" && variant === "marks") ||
            (orientation === "vertical" && state === "hover" && variant === "range") ||
            state === "disabled" ||
            state === "enabled") && (
            <SliderRail
              className={`${
                orientation === "horizontal" && size === "medium" && ["marks", "range"].includes(variant)
                  ? "class-11"
                  : orientation === "vertical" && size === "small"
                  ? "class-12"
                  : orientation === "vertical" && size === "medium"
                  ? "class-13"
                  : variant === "continuous" && orientation === "horizontal"
                  ? sliderRailSizeSmallColorClassName
                  : "class-14"
              }`}
              color={
                color === "secondary" && ["enabled", "hover"].includes(state)
                  ? "secondary"
                  : state === "disabled"
                  ? "none"
                  : "primary"
              }
              disabled={state === "disabled" ? true : undefined}
              orientation={orientation === "vertical" ? "vertical" : "horizontal"}
              size={size === "medium" ? "medium" : "small"}
            />
          )}

          {orientation === "vertical" && variant === "continuous" && state === "hover" && (
            <div className={`div-wrapper color-4-${color} size-7-${size}`}>
              <div className="overlap-group-2">
                <div className="overlay" />
                <div className="color-2" />
              </div>
            </div>
          )}

          {((orientation === "horizontal" && state === "disabled") ||
            (orientation === "horizontal" && state === "enabled" && variant === "continuous") ||
            (orientation === "vertical" && state === "disabled" && variant === "marks") ||
            (orientation === "vertical" && state === "disabled" && variant === "range") ||
            (state === "enabled" && variant === "marks") ||
            (state === "enabled" && variant === "range") ||
            state === "hover") && (
            <SliderTrack
              className={`${
                orientation === "horizontal" && size === "small" && ["continuous", "marks"].includes(variant)
                  ? "class-15"
                  : color === "primary" && variant === "continuous" && size === "medium" && state === "enabled"
                  ? "class-16"
                  : variant === "continuous" && state === "disabled" && size === "medium"
                  ? "class-17"
                  : color === "secondary" && variant === "continuous" && size === "medium" && state === "enabled"
                  ? "class-18"
                  : size === "medium" &&
                    variant === "marks" &&
                    color === "primary" &&
                    orientation === "horizontal" &&
                    state === "enabled"
                  ? "class-19"
                  : (color === "secondary" &&
                      orientation === "horizontal" &&
                      size === "medium" &&
                      state === "enabled" &&
                      variant === "marks") ||
                    (color === "secondary" &&
                      orientation === "horizontal" &&
                      size === "medium" &&
                      state === "hover" &&
                      variant === "continuous")
                  ? "class-20"
                  : (color === "primary" &&
                      orientation === "horizontal" &&
                      size === "medium" &&
                      state === "hover" &&
                      variant === "marks") ||
                    (orientation === "horizontal" && size === "medium" && state === "disabled" && variant === "marks")
                  ? "class-21"
                  : orientation === "vertical" && size === "medium" && ["continuous", "marks"].includes(variant)
                  ? "class-9"
                  : size === "medium" &&
                    color === "secondary" &&
                    variant === "marks" &&
                    orientation === "horizontal" &&
                    state === "hover"
                  ? "class-22"
                  : orientation === "vertical" && size === "small" && variant === "marks" && state === "hover"
                  ? "class-23"
                  : variant === "range" &&
                    size === "medium" &&
                    color === "primary" &&
                    orientation === "horizontal" &&
                    state === "hover"
                  ? "class-24"
                  : size === "medium" &&
                    color === "primary" &&
                    variant === "continuous" &&
                    orientation === "horizontal" &&
                    state === "hover"
                  ? "class-25"
                  : (orientation === "horizontal" && size === "small" && state === "enabled" && variant === "range") ||
                    (orientation === "horizontal" && size === "small" && state === "hover" && variant === "range")
                  ? "class-26"
                  : variant === "range" &&
                    size === "medium" &&
                    color === "secondary" &&
                    orientation === "horizontal" &&
                    state === "hover"
                  ? "class-27"
                  : orientation === "vertical" && size === "small" && variant === "range" && state === "hover"
                  ? "class-28"
                  : orientation === "vertical" && variant === "range" && size === "medium"
                  ? "class-29"
                  : size === "small" && orientation === "horizontal" && state === "disabled" && variant === "range"
                  ? "class-30"
                  : variant === "range" &&
                    size === "medium" &&
                    color === "primary" &&
                    orientation === "horizontal" &&
                    state === "enabled"
                  ? "class-31"
                  : variant === "range" &&
                    size === "medium" &&
                    color === "secondary" &&
                    orientation === "horizontal" &&
                    state === "enabled"
                  ? "class-32"
                  : orientation === "horizontal" && state === "disabled" && variant === "range" && size === "medium"
                  ? "class-33"
                  : (orientation === "vertical" && size === "small" && state === "disabled" && variant === "range") ||
                    (orientation === "vertical" && size === "small" && state === "enabled" && variant === "range")
                  ? "class-34"
                  : "class-10"
              }`}
              color={
                color === "secondary" && ["enabled", "hover"].includes(state)
                  ? "secondary"
                  : state === "disabled"
                  ? "none"
                  : "primary"
              }
              disabled={state === "disabled" ? true : undefined}
              orientation={orientation === "vertical" ? "vertical" : "horizontal"}
              size={size === "medium" ? "medium" : "small"}
            />
          )}

          {orientation === "vertical" && variant === "continuous" && state === "hover" && (
            <SliderRail
              className={`${size === "medium" ? "class-13" : "class-12"}`}
              color={color === "secondary" ? "secondary" : "primary"}
              disabled={false}
              orientation="vertical"
              size={size === "medium" ? "medium" : "small"}
            />
          )}

          {((color === "primary" &&
            orientation === "vertical" &&
            size === "medium" &&
            state === "hover" &&
            variant === "range") ||
            (color === "secondary" && size === "medium" && state === "hover" && variant === "range") ||
            (size === "small" && state === "hover" && variant === "range") ||
            (state === "disabled" && variant === "range") ||
            (state === "enabled" && variant === "range") ||
            variant === "marks") && (
            <div className="marks-2">
              <div className={`slider-mark variant-1-${variant} state-1-${state} color-7-${color}`}>
                {variant === "marks" && <div className="rec" />}
              </div>
              <div className={`slider-mark-2 variant-2-${variant} state-2-${state} color-8-${color}`}>
                {variant === "marks" && <div className="rec" />}
              </div>
              <div
                className={`slider-mark-3 state-3-${state} color-9-${color} variant-3-${variant} size-12-${size} orientation-4-${orientation}`}
              >
                {((color === "primary" && size === "small" && state === "hover" && variant === "marks") ||
                  (color === "secondary" &&
                    orientation === "vertical" &&
                    size === "small" &&
                    state === "hover" &&
                    variant === "marks") ||
                  (orientation === "vertical" && size === "medium" && state === "enabled" && variant === "range") ||
                  (size === "small" && state === "disabled" && variant === "range")) && <div className="rec" />}
              </div>
              <div
                className={`slider-mark-4 state-4-${state} variant-4-${variant} color-10-${color} size-13-${size} orientation-5-${orientation}`}
              >
                {((color === "primary" && orientation === "horizontal" && size === "small" && state === "hover") ||
                  (color === "secondary" && orientation === "horizontal" && state === "hover" && variant === "range") ||
                  (orientation === "horizontal" && state === "disabled" && variant === "range") ||
                  (orientation === "horizontal" && state === "enabled" && variant === "range") ||
                  (orientation === "vertical" && size === "medium" && state === "disabled" && variant === "range") ||
                  (orientation === "vertical" && size === "medium" && state === "hover" && variant === "range") ||
                  (orientation === "vertical" && size === "small" && state === "hover" && variant === "marks") ||
                  (orientation === "vertical" && size === "small" && variant === "range")) && <div className="rec" />}
              </div>
              <div className={`slider-mark-5 state-5-${state} color-11-${color} variant-1-${variant} size-14-${size}`}>
                {state === "disabled" && size === "small" && variant === "range" && <div className="rec" />}
              </div>
              <div className={`slider-mark-6 state-6-${state} color-12-${color}`} />
              <div className={`slider-mark-7 state-7-${state} color-13-${color}`} />
            </div>
          )}

          {((orientation === "horizontal" && state === "disabled") ||
            (orientation === "horizontal" && state === "enabled" && variant === "continuous") ||
            (orientation === "vertical" && state === "disabled" && variant === "marks") ||
            (orientation === "vertical" && state === "disabled" && variant === "range") ||
            (state === "enabled" && variant === "marks") ||
            (state === "enabled" && variant === "range")) && (
            <SliderThumb
              className={`${
                variant === "continuous" || (orientation === "horizontal" && variant === "marks")
                  ? "class-35"
                  : orientation === "vertical" && size === "small" && variant === "marks"
                  ? "class-8"
                  : orientation === "vertical" && variant === "marks" && size === "medium" && state === "enabled"
                  ? "class-7"
                  : orientation === "vertical" && state === "disabled" && size === "medium" && variant === "marks"
                  ? "class-36"
                  : orientation === "horizontal" && variant === "range" && size === "medium" && state === "enabled"
                  ? "slider-thumb-instance"
                  : orientation === "vertical" && size === "small" && variant === "range"
                  ? "class-37"
                  : orientation === "vertical" && variant === "range" && size === "medium" && state === "enabled"
                  ? "class-38"
                  : orientation === "vertical" && state === "disabled" && variant === "range" && size === "medium"
                  ? "class-39"
                  : "class-40"
              }`}
              color={
                color === "secondary" && state === "enabled" ? "secondary" : state === "disabled" ? "none" : "primary"
              }
              disabled={state === "disabled" ? true : undefined}
              size={size === "medium" ? "medium" : "small"}
            />
          )}

          {((color === "primary" &&
            orientation === "horizontal" &&
            size === "medium" &&
            state === "hover" &&
            variant === "continuous") ||
            (color === "primary" &&
              orientation === "horizontal" &&
              size === "medium" &&
              state === "hover" &&
              variant === "marks") ||
            (color === "primary" && orientation === "horizontal" && size === "small" && state === "hover") ||
            (color === "secondary" && orientation === "horizontal" && state === "hover") ||
            (orientation === "vertical" && state === "hover" && variant === "marks") ||
            (orientation === "vertical" && state === "hover" && variant === "range")) && (
            <div
              className={`slider-thumb-2 color-14-${color} size-15-${size} orientation-6-${orientation} variant-5-${variant}`}
            >
              <div className="overlap-group-3">
                <div className="overlay-2" />
                <div className="color-3" />
              </div>
            </div>
          )}

          {variant === "range" && ["disabled", "enabled"].includes(state) && (
            <SliderThumb
              className={`${
                orientation === "horizontal" && state === "enabled"
                  ? "class-41"
                  : state === "disabled" && orientation === "horizontal"
                  ? "class-42"
                  : orientation === "vertical" && size === "small"
                  ? "class-43"
                  : orientation === "vertical" && state === "disabled" && size === "medium"
                  ? "class-44"
                  : "class-8"
              }`}
              color={
                color === "secondary" && state === "enabled" ? "secondary" : state === "disabled" ? "none" : "primary"
              }
              disabled={state === "disabled" ? true : undefined}
              size={size === "medium" ? "medium" : "small"}
            />
          )}

          {((color === "primary" &&
            orientation === "vertical" &&
            size === "medium" &&
            state === "hover" &&
            variant === "range") ||
            (color === "secondary" && size === "medium" && state === "hover" && variant === "range") ||
            (size === "small" && state === "hover" && variant === "range")) && (
            <div className={`overlap-wrapper color-17-${color} size-19-${size} orientation-7-${orientation}`}>
              <div className="overlap">
                <div className="overlay-3" />
                <div className="color-4" />
              </div>
            </div>
          )}

          {variant === "range" &&
            size === "medium" &&
            color === "primary" &&
            orientation === "horizontal" &&
            state === "hover" && (
              <>
                <div className="marks-3">
                  <div className="slider-mark-8" />
                  <div className="slider-mark-8" />
                  <div className="slider-mark-8" />
                  <div className="rec-wrapper">
                    <div className="rec" />
                  </div>
                  <div className="slider-mark-8" />
                  <div className="slider-mark-8" />
                  <div className="slider-mark-8" />
                </div>
                <SliderThumb className="slider-thumb-instance" color="primary" disabled={false} size="medium" />
                <div className="slider-thumb-3">
                  <div className="overlap-group-4">
                    <div className="overlay-4" />
                    <div className="color-5" />
                  </div>
                </div>
              </>
            )}
        </div>
      </div>
      {values && (
        <div
          className={`values variant-6-${variant} state-8-${state} size-23-${size} orientation-8-${orientation} color-20-${color}`}
        >
          <SlidervalueLabel
            active={false}
            className={`${orientation === "vertical" ? "class-45" : "class-46"}`}
            label={orientation === "vertical" ? "12" : "0"}
          />
          <SlidervalueLabel active={false} className="slidervalue-label-instance" label="12" />
        </div>
      )}
    </div>
  );
};

Slider.propTypes = {
  label: PropTypes.bool,
  values: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "small"]),
  variant: PropTypes.oneOf(["continuous", "marks", "range"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  state: PropTypes.oneOf(["disabled", "hover", "enabled"]),
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};
