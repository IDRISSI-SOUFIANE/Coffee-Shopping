/* eslint-disable react/no-unescaped-entities */
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import reviews.css
import "./reviews.css";

import DataSwiper from "../../Data-Api/dataSwiper";
import { useState } from "react";

const Reviews = () => {
  const [reviews, setreview] = useState(DataSwiper);

  return (
    <div className="reviwes container p-relative d-flex justif-content-center align-items-center">
      <h1>customerm's reviews</h1>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // navigation
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {reviews &&
          reviews.length > 0 &&
          reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="boxx  p-relative ">
                <div className="image">
                  <img src={review.img} alt="" />
                </div>

                <h6>{review.name}</h6>

                <p className="title">{review.title}</p>

                <p className="subtitle">{review.subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
