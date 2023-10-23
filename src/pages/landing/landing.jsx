import React from "react";
import Header from "../../components/header/header";
import Welcome from "../../components/welcome/welcome";
import About from "../../components/about/about";
import CourseMaterials from "../../components/course-materials/courseMaterials";
import Explore from "../../components/explore/explore";
import Footer from "../../components/footer/footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Explore />
      <CourseMaterials />
      <About />
      <Footer />
    </>
  );
};

export default Landing;
