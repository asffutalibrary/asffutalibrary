import React from "react";
import "./about.css";
import AboutImg from "../../assets/about-img.png";
import Layout from "../../utils/layout/layout";

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-wrapper">
          <img src={AboutImg} alt="about-img" />
          <div className="about-text">
            <h2>
              An Anglican Student Fellowship is a Christian organization typically associated with Anglican (Episcopal) churches and is specifically geared towards university
              students. ASFs are present in many universities and educational institutions, aiming to provide a supportive and nurturing environment for Christian students to grow
              in their faith while pursuing their academic studies.
            </h2>
            <button>Visit us</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
