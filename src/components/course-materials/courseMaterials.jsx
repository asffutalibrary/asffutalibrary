import React from "react";
import "./courseMaterials.css";
import SingleBook from "../single-book/singleBook";
import Layout from "../../utils/layout/layout";
import { NavLink } from "react-router-dom";

const CourseMaterials = () => {
  return (
    <Layout>
      <div className="course-materials-container">
        <h2>Course Materials</h2>
        <p>Course materials for all department are available </p>
        <div className="course-materials-wrapper">
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
        </div>
        <NavLink to="https://drive.google.com/drive/folders/1Rec2TRhQUBIKy3pUDoqnT-O78vwacy2G" className="book-section-button">See More</NavLink>
      </div>
    </Layout>
  );
};

export default CourseMaterials;
