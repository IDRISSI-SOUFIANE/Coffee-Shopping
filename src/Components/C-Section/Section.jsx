import "./section.css";
import data from "../../Data-Api/data";
import { useState } from "react";

// console.log(data);

const Section = () => {
  const [items, setItems] = useState(data);

  // console.log(items);
  return (
    <div className="mainSection p-relative">
      <div className="introduce p-relative">
        <h2>Indulge in Handcrafted Coffee Elegance</h2>
      </div>

      <div className="boxes container row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 justify-content-between align-items-center">
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <div className="box" key={item._id}>
              <div className="image">
                <img src={item.bgImg} alt="" />
              </div>
              <p>{item.title}</p>
              <a href="#">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Section;
