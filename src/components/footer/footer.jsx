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
            <li><NavLink>About Us</NavLink></li>
            <li><NavLink>Latest Posts</NavLink></li>
            <li><NavLink>Contact Us</NavLink></li>
            <li><NavLink>Shop</NavLink></li>
          </div>
          <div className="footer-navlinks">
            <h2>Help Links</h2>
            <li><NavLink>About Us</NavLink></li>
            <li><NavLink>Latest Posts</NavLink></li>
            <li><NavLink>Contact Us</NavLink></li>
            <li><NavLink>Shop</NavLink></li>
          </div>
          <div className="footer-navlinks">
            <h2>Useful Links</h2>
            <li><NavLink>About Us</NavLink></li>
            <li><NavLink>Latest Posts</NavLink></li>
            <li><NavLink>Contact Us</NavLink></li>
            <li><NavLink>Shop</NavLink></li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
