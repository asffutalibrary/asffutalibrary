import "./librarySection.css";
import Layout from "../../utils/layout/layout";
import { NavLink } from "react-router-dom";


const BookSection = ({ sectionTitle, navLinkTo, children }) => {
  return (
    <Layout>
      <div className="book-section-container">
        <h2>{sectionTitle}</h2>
        <div className="books-wrapper">
          {children}
        </div>
        <NavLink to={navLinkTo} target="_blank" className="book-section-button">View More</NavLink>
      </div>
    </Layout>
  );
};

export default BookSection;
