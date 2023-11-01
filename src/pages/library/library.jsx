import React from "react";
import Header from "../../components/header/header";
import BookSection from "../../components/book-section/librarySection";
import Footer from "../../components/footer/footer";

const Library = () => {
  return (
    <>
      <Header />
      <BookSection sectionTitle="Spiritual Books" navLinkTo="/books/spiritual" />
      <BookSection sectionTitle="Academic Books" navLinkTo="/books/academics" />
      <BookSection sectionTitle="Financial Books" navLinkTo="/books/financial" />
      <Footer />
    </>
  );
};

export default Library;
