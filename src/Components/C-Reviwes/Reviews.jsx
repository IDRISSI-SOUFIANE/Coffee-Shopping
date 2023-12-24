// /* eslint-disable react/no-unescaped-entities */
// // import { useState } from "react";
// import "./reviews.css";

// // import DataSwiper from "../../Data-Api/dataSwiper";

// import img from "../../assets/images-reviews/1.jpg";

// const Reviews = () => {
//   // const [data, setData] = useState(DataSwiper);

//   return (
//     <div className="reviwes d-flex flex-column justify-content-center align-items-center">
//       <h1 className="intro">customerm's reviews</h1>

//       <div className="boxx position-relative">
//         <div className="image">
//           <img src={img} alt="" />
//         </div>

//         <h6>SOUFIANE IDRISSI</h6>

//         <p className="title">Lorem ipsum dolor sit amet.</p>

//         <p className="subtitle">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Reviews;

// ==================================

/* eslint-disable react/no-unescaped-entities */
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import reviews.css
// import "./reviews.css";

// import DataSwiper from "../../Data-Api/dataSwiper";
// // import { useState } from "react";

// const Reviews = () => {
//   const reviews = DataSwiper;

//   console.log(reviews);

//   return (
//     <div className="reviwes">
//       <h1 className="intro">customerm's reviews</h1>

//       <Swiper
//         // install Swiper modules
//         modules={[Navigation, Pagination]}
//         spaceBetween={50}
//         slidesPerView={3}
//         pagination={{ clickable: true }}
//       >
//         {reviews &&
//           reviews.length > 0 &&
//           reviews.map((review) => (
//             <SwiperSlide key={review._id}>
//               <div className="boxx position-relative">
//                 <div className="image">
//                   <img src={review.img} alt="" />
//                 </div>

//                 <h6>{review.name}</h6>

//                 <p className="title">{review.title}</p>

//                 <p className="subtitle">{review.subtitle}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Reviews;

//  =========================================================

import DataSwiper from "../../Data-Api/dataSwiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Autoplay } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./reviews.css";

// Import Swiper styles
import "swiper/css";

const Reviews = () => {
  const reviews = DataSwiper;
  return (
    <div className="review">
      <div className="start">
        <h2>Customerm's Reviews</h2>
        <h5>
          Savor the stories of coffee enthusiasts like you. Dive into our
          customer reviews, where every cup creates memorable moments.
        </h5>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {reviews &&
          reviews.length > 0 &&
          reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="boxx position-relative" key={review._id}>
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
