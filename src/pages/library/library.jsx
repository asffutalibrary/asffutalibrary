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
      <Footer />
    </>
  );
};

export default Library;
