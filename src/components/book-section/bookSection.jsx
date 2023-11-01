import React from "react";
import "./bookSection.css";
import SingleBook from "../single-book/singleBook";
import Layout from "../../utils/layout/layout";
import { NavLink } from "react-router-dom";

const BookSection = () => {
  return (
    <Layout>
      <div className="book-section-container">
        <h2>Spiritual Books</h2>
        <div className="books-wrapper">
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
        </div>
        <NavLink className="book-section-button">View More</NavLink>
      </div>
    </Layout>
  );
};

export default BookSection;
