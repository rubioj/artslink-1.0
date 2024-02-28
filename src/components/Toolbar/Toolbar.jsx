/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menufilled9 } from "../../icons/Menufilled9";
import { Starsharp30 } from "../../icons/Starsharp30";
import { IconButton } from "../IconButton";
import { Stack } from "../Stack";
import { Typography } from "../Typography";
import "./style.css";

export const Toolbar = ({
  menu = true,
  variant,
  smallScreen,
  className,
  iconButtonIconIcon = <Menufilled9 className="icon-instance-node" color="white" />,
  iconButtonIconSize = "medium",
  typographyVariant = "body-1",
  typographyContent = "Website",
  typographyBodyClassName,
  stack = (
    <IconButton
      className="icon-button-instance"
      color="inherit-white"
      iconIcon={<Starsharp30 className="icon-instance-node" color="white" />}
      iconSize="medium"
      size="medium"
      stateProp="enabled"
    />
  ),
  override = (
    <IconButton
      className="icon-button-instance"
      color="inherit-white"
      iconIcon={<Starsharp30 className="icon-instance-node" color="white" />}
      iconSize="medium"
      size="medium"
      stateProp="enabled"
    />
  ),
  iconButtonColor = "inherit-white",
  to,
}) => {
  return (
    <div className={`toolbar small-screen-${smallScreen} ${className}`}>
      <div className="left-side">
        {menu && (
          <IconButton
            className="icon-button-instance"
            color={iconButtonColor}
            iconIcon={iconButtonIconIcon}
            iconSize={iconButtonIconSize}
            size="medium"
            stateProp="enabled"
            to={to}
          />
        )}

        <Typography
          bodyClassName={typographyBodyClassName}
          className="icon-button-instance"
          content={typographyContent}
          gutterBottom={false}
          variant={typographyVariant}
        />
      </div>
      {variant === "regular" && !smallScreen && <div className="min-height" />}

      <Stack
        className="icon-button-instance"
        direction="row"
        instances="one"
        override={variant === "regular" && !smallScreen ? override : stack}
        spacing="zero"
      />
      {(smallScreen || variant === "dense") && <div className={`div ${variant}`} />}
    </div>
  );
};

Toolbar.propTypes = {
  menu: PropTypes.bool,
  variant: PropTypes.oneOf(["regular", "dense"]),
  smallScreen: PropTypes.bool,
  iconButtonIconSize: PropTypes.string,
  typographyVariant: PropTypes.string,
  typographyContent: PropTypes.string,
  iconButtonColor: PropTypes.string,
  to: PropTypes.string,
};
