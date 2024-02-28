/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menufilled9 } from "../../icons/Menufilled9";
import { Starsharp30 } from "../../icons/Starsharp30";
import { IconButton } from "../IconButton";
import { Toolbar } from "../Toolbar";
import "./style.css";

export const AppBar = ({
  color,
  className,
  paperClassName,
  toolbarIconButtonIconIcon = <Menufilled9 className="menu-filled" color="white" />,
  toolbarSmallScreen = false,
  toolbarStack,
  toolbarTypographyBodyClassName,
  toolbarTypographyVariant = "body-1",
  toolbarTypographyContent = "Website",
  toolbarIconButtonIconSize = "medium",
  to,
}) => {
  return (
    <div className={`app-bar ${className}`}>
      <div className={`paper ${color} ${paperClassName}`}>
        <Toolbar
          className="toolbar-instance"
          iconButtonColor={["default", "inherit-white", "transparent"].includes(color) ? "inherit" : undefined}
          iconButtonIconIcon={toolbarIconButtonIconIcon}
          iconButtonIconSize={toolbarIconButtonIconSize}
          override={
            <IconButton
              className="instance-node"
              color={
                ["primary", "secondary"].includes(color)
                  ? "inherit-white"
                  : ["default", "inherit-white", "transparent"].includes(color)
                  ? "inherit"
                  : undefined
              }
              iconIcon={
                <Starsharp30
                  className="menu-filled"
                  color={
                    ["primary", "secondary"].includes(color)
                      ? "white"
                      : ["default", "inherit-white", "transparent"].includes(color)
                      ? "black"
                      : undefined
                  }
                  opacity={["default", "inherit-white", "transparent"].includes(color) ? "0.87" : undefined}
                />
              }
              iconSize="medium"
              size="medium"
              stateProp="enabled"
            />
          }
          smallScreen={toolbarSmallScreen}
          stack={toolbarStack}
          to={to}
          typographyBodyClassName={toolbarTypographyBodyClassName}
          typographyContent={toolbarTypographyContent}
          typographyVariant={toolbarTypographyVariant}
          variant="regular"
        />
      </div>
    </div>
  );
};

AppBar.propTypes = {
  color: PropTypes.oneOf(["default", "secondary", "primary", "inherit-white", "transparent"]),
  toolbarSmallScreen: PropTypes.bool,
  toolbarTypographyVariant: PropTypes.string,
  toolbarTypographyContent: PropTypes.string,
  toolbarIconButtonIconSize: PropTypes.string,
  to: PropTypes.string,
};
