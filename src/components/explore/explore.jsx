import React from "react";
import "./explore.css";
import SingleBook from "../single-book/singleBook";
import Layout from "../../utils/layout/layout";

//book images
import GodsGeneralImg from "../../assets/books/images/Gods-Generals-The-Revivalists.jpg"
import AtomicHabitImg from "../../assets/images/atomic-habits-james-clear.png"
import PsyMoneyImg from "../../assets/images/psychology-of-money.webp"
import MonkFerrariImg from "../../assets/images/the-monk-who-sold-his-ferrari.jpg"
import RichDadPoorDadImg from "../../assets/books/images/rich-dad-poor-dad.jpg"
import SecretOfPreparationImg from "../../assets/books/images/secret-of-preparation-on-time.jpg"
import HowYouCanBeLedByHolySpiritImg from "../../assets/books/images/how-you-can-be-led-by-the-spirit-of-god.jpg"
import GrowingUpSpirituallyImg from "../../assets/books/images/growing-up-spiritually.jpg"

// books
import GodsGeneralBook from "../../assets/books/spiritual/Gods-Generals-TheRevivalists-Roberts-Liardon.pdf"
import AtomicHabitBook from "../../assets/books/Atomic-Habits-by-James-Clear.pdf"
import PsyMoneyBook from "../../assets/books/financial/Psychology-of-Money.pdf"
import MonkFerrariBook from "../../assets/books/financial/the-monk-who-sold-his-ferrari.pdf"
import RichDadPoorDad from "../../assets/books/financial/Rich-Dad-Poor-Dad.pdf"
import SecretOfPreparation from "../../assets/books/[david_oyedepo]_secret_of_preparation_on_time(b-ok.org).pdf"
import HowYouCanBeLedByHolySpirit from "../../assets/books/spiritual/How-You-Can-Be-Led-By-The-Spirit-Kenneth-E-Hagin.pdf"
import GrowingUpSpiritually from "../../assets/books/spiritual/Kenneth-E-Hagin-Growing-Up-Spiritually.pdf"


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
            <SingleBook title="Rich Dad Poor Dad" author="Robert Kiyosaki" coverImage={RichDadPoorDadImg} bookLink={RichDadPoorDad}/>
            <SingleBook title="Secret of Preparation on Time" author="Bishop David Oyedepo" coverImage={SecretOfPreparationImg} bookLink={SecretOfPreparation}/>
            <SingleBook title="How To Be Led By The Spirit of God" author="Kenneth Hagin" coverImage={HowYouCanBeLedByHolySpiritImg} bookLink={HowYouCanBeLedByHolySpirit}/>
            <SingleBook title="Growing Up Spiritually" author="Kenneth Hagin" coverImage={GrowingUpSpirituallyImg} bookLink={GrowingUpSpiritually}/>
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
