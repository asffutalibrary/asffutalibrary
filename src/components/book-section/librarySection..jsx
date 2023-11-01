import React from "react";
import "./librarySection.css";
import SingleBook from "../single-book/singleBook";
import Layout from "../../utils/layout/layout";
import { NavLink } from "react-router-dom";

const BookSection = ({ sectionTitle, navLinkTo }) => {
  return (
    <Layout>
      <div className="book-section-container">
        <h2>{sectionTitle}</h2>
        <div className="books-wrapper">
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
        </div>
        <NavLink to={navLinkTo} className="book-section-button">View More</NavLink>
      </div>
    </Layout>
  );
};

export default BookSection;
