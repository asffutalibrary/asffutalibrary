import React from "react";
import "./header.css";
import Logo from "../../assets/asf-logo.png";
import { NavLink } from "react-router-dom";
import Search from "../../svg-components/search";
import MobileNav from "../mobile-nav/mobileNav";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <NavLink to="/">
          <div className="header-logo">
            <img src={Logo} alt="asf-logo" className="" />
            <div>
              <h2>ASFFUTA</h2>
              <p>LIBRARY</p>
            </div>
          </div>
        </NavLink>
        <div className="header-navlinks">
          <NavLink to="/library/">LIBRARY</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/" style={{width: 84}}>Contact us</NavLink>
        </div>
        <div className="hamburger">
          <MobileNav />
        </div>
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search" />
        <Search />
      </div>
    </div>
  );
};

export default Header;
