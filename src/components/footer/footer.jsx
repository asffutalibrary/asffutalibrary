import React from "react";
import "./footer.css";
import Logo from "../../assets/asf-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Logo} alt="asf-logo" />
    </div>
  );
};

export default Footer;
