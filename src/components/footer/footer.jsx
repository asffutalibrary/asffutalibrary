import React from "react";
import "./footer.css";
import Logo from "../../assets/asf-logo.png";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/arrow.svg"

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
          <div className="footer-navlinks about">
            <li><NavLink>About Us</NavLink></li>
            <li><NavLink>Latest Posts</NavLink></li>
            <li><NavLink>Contact Us</NavLink></li>
            <li><NavLink>Shop</NavLink></li>
          </div>
          <div className="footer-navlinks">
            <h2>Help Links</h2>
            <li><NavLink>Tracking</NavLink></li>
            <li><NavLink>Order Status</NavLink></li>
            <li><NavLink>Delivery</NavLink></li>
            <li><NavLink>Shipping Info</NavLink></li>
            <li><NavLink>FAQ</NavLink></li>
          </div>
          <div className="footer-navlinks">
            <h2>Useful Links</h2>
            <li><NavLink>Special Offers</NavLink></li>
            <li><NavLink>Gift Cards</NavLink></li>
            <li><NavLink>Advertising</NavLink></li>
            <li><NavLink>Terms of Use</NavLink></li>
          </div>
          <div className="footer-navlinks">
            <h2>Get In The Know</h2>
            <form action="#" method="post">
              <div>
                <input type="email" placeholder="Enter Email" />
                <button type="submit"><img src={arrow} alt="subscribe" width="48" height="48" /></button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom-footer">
            <NavLink>Privacy Policy</NavLink>
            <NavLink>Terms & Conditions</NavLink>
          </div>
      </div>
    </div>
  );
};

export default Footer;
