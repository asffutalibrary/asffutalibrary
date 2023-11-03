import React from "react";
import "./singleBook.css";
import Book from "../../assets/book.png"

const SingleBook = ({ title = "Good morning holy spirit", author = "Hagin", coverImage = Book, bookLink }) => {
  return (
    <div className="single-book-container">
      <a href={bookLink} download={title}>
        <img src={coverImage} alt={coverImage} />
        <div>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
      </a>
    </div>
  );
};

export default SingleBook;
