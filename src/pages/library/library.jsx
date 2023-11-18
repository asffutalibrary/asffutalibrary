import React from "react";
import Header from "../../components/header/header";
import BookSection from "../../components/book-section/librarySection";
import SingleBook from "../../components/single-book/singleBook";
import Footer from "../../components/footer/footer";


// Spiritual Book Images
import GodsGeneralImg from "../../assets/books/images/Gods-Generals-The-Revivalists.jpg"
import HowYouCanBeLedByHolySpiritImg from "../../assets/books/images/how-you-can-be-led-by-the-spirit-of-god.jpg"
import GrowingUpSpirituallyImg from "../../assets/books/images/growing-up-spiritually.jpg"
import OperatingInTheSupernaturalImg from "../../assets/books/images/operating-in-the-supernatural.jpg"

// Spiritual Books
import GodsGeneralBook from "../../assets/books/spiritual/Gods-Generals-TheRevivalists-Roberts-Liardon.pdf"
import HowYouCanBeLedByHolySpirit from "../../assets/books/spiritual/How-You-Can-Be-Led-By-The-Spirit-Kenneth-E-Hagin.pdf"
import GrowingUpSpiritually from "../../assets/books/spiritual/Kenneth-E-Hagin-Growing-Up-Spiritually.pdf"
import OperatingInTheSupernatural from "../../assets/books/spiritual/[David_Oyedepo]_Operating_In_The_Supernatural(BookSee.org)-1.pdf"


// Academics Book Images
import OneHundredLevelImg from "../../assets/books/images/100-level.png"
import TwoHundredLevelImg from "../../assets/books/images/200-level.png"
import ThreeHundredLevelImg from "../../assets/books/images/300-level.png"
import FourHundredLevelImg from "../../assets/books/images/400-level.png"

// Academics Books
//The books will be links to each section of their google drives


// Financial Book Images
import PsyMoneyImg from "../../assets/books/images/psychology-of-money.webp"
import MonkFerrariImg from "../../assets/books/images/the-monk-who-sold-his-ferrari.jpg"
import RichDadPoorDadImg from "../../assets/books/images/rich-dad-poor-dad.jpg"
import SecretOfPreparationImg from "../../assets/books/images/secret-of-preparation-on-time.jpg"

// Financial Books
import PsyMoneyBook from "../../assets/books/financial/Psychology-of-Money.pdf"
import MonkFerrariBook from "../../assets/books/financial/the-monk-who-sold-his-ferrari.pdf"
import RichDadPoorDad from "../../assets/books/financial/Rich-Dad-Poor-Dad.pdf"
import SecretOfPreparation from "../../assets/books/[david_oyedepo]_secret_of_preparation_on_time(b-ok.org).pdf"


const Library = () => {
  return (
    <>s
      <Header />
      <BookSection sectionTitle="Spiritual Books" navLinkTo="https://drive.google.com/drive/folders/1MSbugMQEDOIeW8FqrLHvZVMbn5b-_tiDl">
        <SingleBook title="Gods Generals The Revivalists" author="Robert Liardon" coverImage={GodsGeneralImg} bookLink={GodsGeneralBook}/>
        <SingleBook title="How You Can Be Led By The Spirit of God" author="Kenneth Hagin" coverImage={HowYouCanBeLedByHolySpiritImg} bookLink={HowYouCanBeLedByHolySpirit}/>
        <SingleBook title="Growing Up Spiritually" author="Kenneth Hagin" coverImage={GrowingUpSpirituallyImg} bookLink={GrowingUpSpiritually}/>
        <SingleBook title="Operating In The Supernatural" author="Bishop David Oyedepo" coverImage={OperatingInTheSupernaturalImg} bookLink={OperatingInTheSupernatural}/>
      </BookSection>
      <BookSection sectionTitle="Academic Books" navLinkTo="https://drive.google.com/drive/folders/1Rec2TRhQUBIKy3pUDoqnT-O78vwacy2G">
        <SingleBook title="100 Level Materials" author="ASF Library Editorial" coverImage={OneHundredLevelImg} bookLink={"https://drive.google.com/drive/folders/1qKXYrPEEG_bzHyhgEWpbjruQ6v7h9M32"}/>
        <SingleBook title="200 Level Materials" author="ASF Library Editorial" coverImage={TwoHundredLevelImg} bookLink={"https://drive.google.com/drive/folders/1MyLjOrLYOPiua6-VgnSgpNKjCVNzbZH5"}/>
        <SingleBook title="300 Level Materials" author="ASF Library Editorial" coverImage={ThreeHundredLevelImg} bookLink={"https://drive.google.com/drive/folders/1rxOTDR3Q8AX6C3fRC5mRhLjhjNdmmsU-"}/>
        <SingleBook title="400 Level Materials" author="ASF Library Editorial" coverImage={FourHundredLevelImg} bookLink={"https://drive.google.com/drive/folders/1TwBizPTYt7hgZevVRxKYbKr9IF7PpqAf"}/>
      </BookSection>
      <BookSection sectionTitle="Financial Books" navLinkTo="https://drive.google.com/drive/folders/1bWJkN5F5MK3cTqLdNpeqLgP9a5RR5aJf">
        <SingleBook title="Psychology of Money" author="Morgan Housel" coverImage={PsyMoneyImg} bookLink={PsyMoneyBook} />
        <SingleBook title="The Monk Who Sold His Ferrari" author="Robin Sharma" coverImage={MonkFerrariImg} bookLink={MonkFerrariBook} />
        <SingleBook title="Rich Dad Poor Dad" author="Robert Kiyosaki" coverImage={RichDadPoorDadImg} bookLink={RichDadPoorDad}/>
        <SingleBook title="Secret of Preparation on Time" author="Bishop David Oyedepo" coverImage={SecretOfPreparationImg} bookLink={SecretOfPreparation}/>
      </BookSection>
      <Footer />
    </>
  );
};

export default Library;
