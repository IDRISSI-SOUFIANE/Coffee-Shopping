/* eslint-disable react/no-unescaped-entities */
import "./book.css";

import bookImage from "../../assets/bookImage.jpg";

const Book = () => {
  return (
    <div className="book">
      <div className="all container position-relative">
        <div className="backgroundImg position-relative ">
          <div className="image position-relative">
            <img src={bookImage} alt="" />
          </div>
          <div className="cover"></div>
        </div>

        <div className="info">
          <p className="title">Let's Book a Table For You</p>

          <div className="icons">
            <i className="phone fa-solid fa-phone-volume"></i>
            <input type="text" className="phone" placeholder="Your Number" />

            <i className="fa-solid fa-user"></i>
            <input type="number" placeholder="People" />

            <button>Book Table</button>
          </div>

          <p className="subtitle">
            We Will Contact You To Confirm Your Booking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
