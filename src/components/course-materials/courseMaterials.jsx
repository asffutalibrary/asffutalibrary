import React from "react";
import "./courseMaterials.css";
import SingleBook from "../single-book/singleBook";
import Layout from "../../utils/layout/layout";

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
      </div>
    </Layout>
  );
};

export default CourseMaterials;
