import React from "react";
import "./footer.css";
import Logo from "../../assets/asf-logo.png";
import { NavLink } from "react-router-dom";

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
        <div className="footer-sections">
          <div className="footer-navlinks">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Latest Pos9ts</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Shop</a></li>
          </div>
          <div className="footer-navlinks">
            <h2>Help Links</h2>
            <NavLink>HOME</NavLink>
            <NavLink>LIBRARY</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact us</NavLink>
          </div>
          <div className="footer-navlinks">
            <h2>Useful Links</h2>
            <NavLink>HOME</NavLink>
            <NavLink>LIBRARY</NavLink>;
            <NavLink>About</NavLink>
            <NavLink>Contact us</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
