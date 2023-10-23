import React from "react";
import "./footer.css";
import Logo from "../../assets/asf-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="asf-logo" />
          <div>
            <h2>ASFFUTA</h2>
            <p>LIBRARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
