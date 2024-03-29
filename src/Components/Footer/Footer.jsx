import React from "react";
import { Item } from "../Footer/Item";
import { Social } from "./Social/Social";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="left">
          <p className="download-the">
            DOWNLOAD THE <br />
            OFFICIAL F1 APP
          </p>
          <img
            className="img"
            alt="Google play badge"
            src="Footer/google-play-badge.svg"
          />
          <img
            className="img"
            alt="Apple store badge"
            src="Footer/apple-store-badge.svg"
          />
        </div>
        <Social />
      </div>
      <div className="footer-partners">
        <img src="Footer/icons/F1-logo.svg" />
        <div className="text-wrapper">Our partners</div>
        <img src="Footer/chevron-right.svg" />
      </div>
      <div className="row">
        <div className="col-lg">
          <Item className="design-component-instance-node" text="Latest News" />
          <Item className="design-component-instance-node" text="What is F1?" />
          <Item className="design-component-instance-node" text="Schedule" />
        </div>
        <div className="col-lg">
          <Item className="design-component-instance-node" text="Drivers" />
          <Item className="design-component-instance-node" text="Teams" />
          <Item className="design-component-instance-node" text="Results" />
        </div>
        <div className="col-lg">
          <Item
            className="design-component-instance-node"
            text="Driver Standings"
          />
          <Item className="design-component-instance-node" text="Tickets" />
          <Item className="design-component-instance-node" text="Store" />
        </div>
        <div className="col-lg">
          <Item
            className="design-component-instance-node"
            text="Rules &amp; Regulations"
          />
        </div>
      </div>
      <div className="bottom">
        <img src="https://c.animaapp.com/1lYYEIlP/img/divider-1.svg" />
        <div className="copyright">
          <img className="logo" src="Footer/icons/F1-logo-white.svg" />
          <p className="div">
            © 2003-2024 Formula One World Championship Limited
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
