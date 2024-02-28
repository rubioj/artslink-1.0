import React from "react";
import { AppBar } from "../../components/AppBar";
import { BottomNavigationWrapper } from "../../components/BottomNavigationWrapper";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { CustomFormsEmail } from "../../components/CustomFormsEmail";
import { IconButton } from "../../components/IconButton";
import { Slider } from "../../components/Slider";
import { Homefilled2 } from "../../icons/Homefilled2";
import { Menufilled9 } from "../../icons/Menufilled9";
import { Peoplefilled } from "../../icons/Peoplefilled";
import { Searchfilled3 } from "../../icons/Searchfilled3";
import { Starsharp30 } from "../../icons/Starsharp30";
import "./style.css";

export const Search = () => {
  return (
    <div className="search">
      <div className="div-2" data-palette-mode="light">
        <div className="overlap-2">
          <AppBar
            className="app-bar-instance"
            color="primary"
            paperClassName="app-bar-2"
            to="/menu"
            toolbarIconButtonIconIcon={<Menufilled9 className="menufilled-9" color="white" />}
            toolbarIconButtonIconSize="large"
            toolbarSmallScreen
            toolbarStack={
              <IconButton
                className="instance-2"
                color="inherit-white"
                iconIcon={<Starsharp30 className="starsharp-124" color="white" />}
                iconSize="medium"
                size="small"
                stateProp="enabled"
              />
            }
            toolbarTypographyBodyClassName="app-bar-3"
            toolbarTypographyContent="Arts Link"
            toolbarTypographyVariant="h-4"
          />
          <img className="brush-brown" alt="Brush brown" src="/img/brush-brown-2.png" />
          <Slider
            className="slider-instance"
            color="secondary"
            orientation="horizontal"
            overlapGroupClassName="slider-2"
            size="small"
            sliderRailSizeSmallColorClassName="slider-3"
            state="enabled"
            values={false}
            variant="continuous"
          />
          <img className="rooster-color" alt="Rooster color" src="/img/rooster-color-1.png" />
          <img className="hpim" alt="Hpim" src="/img/hpim1656-1.png" />
          <Slider
            className="slider-4"
            color="secondary"
            orientation="horizontal"
            overlapGroupClassName="slider-2"
            size="small"
            sliderRailSizeSmallColorClassName="slider-3"
            state="enabled"
            values={false}
            variant="continuous"
          />
          <img className="snoqualmie" alt="Snoqualmie" src="/img/snoqualmie-1.png" />
        </div>
        <img className="links-logo" alt="Links logo" src="/img/links-logo.svg" />
        <div className="overlap-3">
          <img className="blue-brush" alt="Blue brush" src="/img/blue-brush-1-2.png" />
          <p className="we-are-a-passionate">
            We are a passionate community of artists and art enthusiasts, united in our mission to explore and celebrate
            the transformative power of art. From healing to connecting with nature, our creations echo the deep ties
            between art, the natural world, and human connections. Whether you&#39;re an artist seeking a tribe or an
            art lover searching for a unique piece, you&#39;ve found your haven.
          </p>
          <img className="snoqualmie-2" alt="Snoqualmie" src="/img/snoqualmie-2.png" />
        </div>
        <div className="overlap-4">
          <img className="brush-brown-2" alt="Brush brown" src="/img/brush-brown-2.png" />
          <p className="p">Find the art work to put a smile in your life</p>
          <CustomFormsEmail
            className="custom-forms-email-password"
            formcontrollabelLabelPlacementEndClassName="custom-forms-email-instance"
          />
        </div>
        <div className="button-subscribe">
          <div className="overlap-5">
            <div className="rectangle" />
            <div className="arrow-redo">
              <ConcreteComponentNode style="fill" />
            </div>
            <div className="text-wrapper-6">Join Our Community</div>
          </div>
        </div>
        <BottomNavigationWrapper
          className="bottom-navigation-2"
          iconOnlyFalseWrapperBottomNavigationIcon={<Peoplefilled className="icon-instance-node-3" color="#173F56" />}
          iconOnlyFalseWrapperBottomNavigationIcon1={<Searchfilled3 className="icon-instance-node-3" color="#173F56" />}
          override={<Homefilled2 className="icon-instance-node-3" />}
        />
      </div>
    </div>
  );
};
