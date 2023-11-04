import React from "react";
import "./explore.css";
import SingleBook from "../single-book/singleBook";
import Layout from "../../utils/layout/layout";
// books
import GodsGeneralImg from "../../assets/Gods-Generals-The-Revivalists.jpg"
import GodsGeneralBook from "../../assets/books/Gods-Generals-TheRevivalists-Roberts-Liardon.pdf"
import AtomicHabitImg from "../../assets/atomic-habits-james-clear.png"
import AtomicHabitBook from "../../assets/books/Atomic-Habits-by-James-Clear.pdf"
import PsyMoneyImg from "../../assets/psychology-of-money.webp"
import PsyMoneyBook from "../../assets/books/Psychology-of-Money.pdf"
import MonkFerrariImg from "../../assets/the-monk-who-sold-his-ferrari.jpg"
import MonkFerrariBook from "../../assets/books/the-monk-who-sold-his-ferrari.pdf"


const Explore = () => {
  return (
    <Layout>
      <div className="explore-container">
        <div className="explore-header">
          <h2>Explore New Books</h2>
          <p>Newly uploaded books can be explore here.</p>
        </div>
        <div className="explore-wrapper">
          <div className="explore-cont">
            <SingleBook title="Gods Generals The Revivalists" author="Robert Liardon" coverImage={GodsGeneralImg} bookLink={GodsGeneralBook}/>
            <SingleBook title="Atomic Habits" author="James Clear" coverImage={AtomicHabitImg} bookLink={AtomicHabitBook}/>
            <SingleBook title="Psychology of Money" author="Morgan Housel" coverImage={PsyMoneyImg} bookLink={PsyMoneyBook} />
            <SingleBook title="The Monk Who Sold His Ferrari" author="Robin Sharma" coverImage={MonkFerrariImg} bookLink={MonkFerrariBook} />
            <SingleBook />
            <SingleBook />
            <SingleBook />
            <SingleBook />
          </div>
          <div className="explore-peace">
            <div className="peace-of-mind">
              <div className="peace-of-text">
                <h2>peace of mind</h2>
                <p>A one-stop platform for all your book needs, hassle-free. Buy with a peace of mind.</p>
              </div>
              <button>buy now</button>
            </div>
            <div className="explore-buy">
              <div className="explore-buy-text">
                <h2>Buy 2 Get 1 Free</h2>
                <p>End of season sale. Buy any 2 items of your choice and get 1 free.</p>
              </div>
              <button>buy now</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
