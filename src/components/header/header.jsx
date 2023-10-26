import React from "react";
import "./header.css";
import Logo from "../../assets/asf-logo.png";
import { NavLink } from "react-router-dom";
import Search from "../../svg-components/search";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-logo">
          <img src={Logo} alt="asf-logo" />
          <div>
            <h2>ASFFUTA</h2>
            <p>LIBRARY</p>
          </div>
        </div>
        <div className="header-navlinks">
          <NavLink>HOME</NavLink>
          <NavLink>LIBRARY</NavLink>
          <NavLink>About</NavLink>
          <NavLink style={{width: 84}}>contact us</NavLink>
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
