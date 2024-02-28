import React from "react";
import { AppBar } from "../../components/AppBar";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { CustomFormsEmail } from "../../components/CustomFormsEmail";
import { IconButton } from "../../components/IconButton";
import { LogoInstagramWrapper } from "../../components/LogoInstagramWrapper";
import { Homefilled3 } from "../../icons/Homefilled3";
import { Logo } from "../../icons/Logo";
import { Menufilled9 } from "../../icons/Menufilled9";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled3 } from "../../icons/Searchfilled3";
import { Starsharp30 } from "../../icons/Starsharp30";
import "./style.css";

export const Mobile = () => {
  return (
    <div className="mobile">
      <div className="mobile-home" data-palette-mode="light">
        <div className="overlap-6">
          <CustomFormsEmail
            className="custom-forms-email-password-instance"
            formcontrollabelLabelPlacementEndClassName="custom-forms-email-2"
          />
          <img className="blue-brush-2" alt="Blue brush" src="/img/blue-brush-1-2.png" />
        </div>
        <div className="overlap-7">
          <img className="brush-brown-3" alt="Brush brown" src="/img/brush-brown-2.png" />
          <p className="main-tagline">We are your connection to arts</p>
          <Logo className="logo-instance" />
        </div>
        <div className="overlap-group-5">
          <img className="brush-brown-4" alt="Brush brown" src="/img/brush-brown-2.png" />
          <p className="here-every-piece">
            Here, every piece tells a story, every artist shares a vision, and every member finds a place. Join us in
            weaving a collective tapestry of creativity, where art isn&#39;t just seen—it&#39;s experienced, shared, and
            celebrated. Welcome to ArtLinks, where your journey through art begins
          </p>
          <LogoInstagramWrapper className="logo-instagram" />
          <p className="text-wrapper-7">Juan Rubio, San Sebastian Couple, digital photograph</p>
          <img className="couple" alt="Couple" src="/img/hpim1656-1.png" />
        </div>
        <p className="text-wrapper-8">
          ArtLinks is your gateway to a vibrant world where art meets community. Our platform is dedicated to bridging
          the gap between talented artists and passionate art lovers, creating a dynamic space for discovery,
          inspiration, and connection.
        </p>
        <img className="NY-city-girl" alt="Ny city girl" src="/img/rooster-color-1.png" />
        <p className="text-wrapper-9">Find the art work you always wanted</p>
        <div className="overlap-8">
          <LogoInstagramWrapper className="logo-instagram-instance" />
          <p className="text-wrapper-10">Juan Rubio, NY City Girl, digital photograph</p>
        </div>
        <AppBar
          className="app-bar-4"
          color="primary"
          paperClassName="app-bar-5"
          to="/menu"
          toolbarIconButtonIconIcon={<Menufilled9 className="menufilled-2" color="white" />}
          toolbarIconButtonIconSize="large"
          toolbarSmallScreen
          toolbarStack={
            <IconButton
              className="instance-3"
              color="inherit-white"
              iconIcon={<Starsharp30 className="starsharp-126" color="white" />}
              iconSize="medium"
              size="small"
              stateProp="enabled"
            />
          }
          toolbarTypographyBodyClassName="app-bar-6"
          toolbarTypographyContent="Arts Link"
          toolbarTypographyVariant="h-4"
        />
        <BottomNavigationWrapper
          className="bottom-navigation-3"
          iconOnlyFalseWrapperBottomNavigationIcon={<Peoplefilled className="icon-instance-node-4" color="#173F56" />}
          iconOnlyFalseWrapperBottomNavigationIcon1={<Searchfilled3 className="icon-instance-node-4" color="#173F56" />}
          override={<Homefilled3 className="icon-instance-node-4" />}
        />
      </div>
    </div>
  );
};
