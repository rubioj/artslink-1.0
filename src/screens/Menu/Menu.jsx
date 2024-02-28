import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { MenuItem } from "../../components/MenuItem";
import "./style.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="div-3" data-palette-mode="light">
        <img className="links-logo-2" alt="Links logo" src="/img/links-logo-1.svg" />
        <div className="overlap-9">
          <img className="blue-brush-3" alt="Blue brush" src="/img/blue-brush-1-2.png" />
          <img className="brush-brown-5" alt="Brush brown" src="/img/brush-brown-2.png" />
          <p className="text-wrapper-11">Find the art work to put a smile in your life</p>
          <div className="creativity-meets"> Creativity Meets Community</div>
          <MenuItem
            className="menu-item-instance"
            dense={false}
            disGutters={false}
            smallScreen
            stateProp="enabled"
            to="/mobile-home3"
            value="Home"
            valueClassName="menu-item-2"
          />
          <MenuItem
            className="menu-item-3"
            dense={false}
            disGutters={false}
            smallScreen={false}
            stateProp="enabled"
            to="/search"
            value="Browse"
            valueClassName="menu-item-2"
          />
          <MenuItem
            className="menu-item-4"
            dense={false}
            disGutters={false}
            smallScreen={false}
            stateProp="enabled"
            value="Join"
            valueClassName="menu-item-2"
          />
        </div>
        <div className="button-subscribe-2">
          <div className="overlap-group-6">
            <div className="rectangle-2" />
            <div className="arrow-redo-wrapper">
              <ConcreteComponentNode style="fill" />
            </div>
            <div className="text-wrapper-12">Join Our Community</div>
          </div>
        </div>
      </div>
    </div>
  );
};
