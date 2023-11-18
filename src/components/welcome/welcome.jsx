import React from "react";
import { NavLink } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h2>ALL BOOKS picks beat the heat</h2>
      <NavLink to="/library/">Read Now</NavLink>

    </div>
  );
};

export default Welcome;
