import React, { useState } from "react";
import "./mobileNav.css";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <img src={hamburger} alt="menu-hamburger" width="30" height="30" className="menu-button" onClick={toggleMenu} />
      <div className={`sliding-menu-container sliding-menu ${isMenuOpen ? "open" : "closed"}`}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/library/">Library</NavLink></li>
          <li><NavLink to="/about/">About</NavLink></li>
          <li><NavLink to="/contact/">Contact us</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
