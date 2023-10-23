import React from "react";
import "./singleBook.css";
import Book from "../../assets/book.png";

const SingleBook = () => {
  return (
    <div className="single-book-container">
      <img src={Book} alt="book" />
      <div>
        <h2>Good morning Holyghost</h2>
        <p>Hagin</p>
      </div>
    </div>
  );
};

export default SingleBook;
