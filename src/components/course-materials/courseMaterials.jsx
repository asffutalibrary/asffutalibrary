import React from "react";
import "./courseMaterials.css";
import SingleBook from "../single-book/singleBook";
import Layout from "../../utils/layout/layout";
import { NavLink } from "react-router-dom";

// Academics Book Images
import OneHundredLevelImg from "../../assets/books/images/100-level.png"
import TwoHundredLevelImg from "../../assets/books/images/200-level.png"
import ThreeHundredLevelImg from "../../assets/books/images/300-level.png"
import FourHundredLevelImg from "../../assets/books/images/400-level.png"

// Academics Books
//The books will be links to each section of their google drives

const CourseMaterials = () => {
  return (
    <Layout>
      <div className="course-materials-container">
        <h2>Course Materials</h2>
        <p>Course materials for all department are available </p>
        <div className="course-materials-wrapper">
          <SingleBook title="100 Level Materials" author="ASF Library Editorial" coverImage={OneHundredLevelImg} bookLink={"https://drive.google.com/drive/folders/1qKXYrPEEG_bzHyhgEWpbjruQ6v7h9M32"}/>
          <SingleBook title="200 Level Materials" author="ASF Library Editorial" coverImage={TwoHundredLevelImg} bookLink={"https://drive.google.com/drive/folders/1MyLjOrLYOPiua6-VgnSgpNKjCVNzbZH5"}/>
          <SingleBook title="300 Level Materials" author="ASF Library Editorial" coverImage={ThreeHundredLevelImg} bookLink={"https://drive.google.com/drive/folders/1rxOTDR3Q8AX6C3fRC5mRhLjhjNdmmsU-"}/>
          <SingleBook title="400 Level Materials" author="ASF Library Editorial" coverImage={FourHundredLevelImg} bookLink={"https://drive.google.com/drive/folders/1TwBizPTYt7hgZevVRxKYbKr9IF7PpqAf"}/>
        </div>
        <NavLink to="https://drive.google.com/drive/folders/1Rec2TRhQUBIKy3pUDoqnT-O78vwacy2G" className="book-section-button">See More</NavLink>
      </div>
    </Layout>
  );
};

export default CourseMaterials;
