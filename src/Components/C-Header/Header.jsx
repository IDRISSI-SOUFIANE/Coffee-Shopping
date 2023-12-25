import "./header.css";
import logo from "../../assets/logo.jpg";

import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ numberlove, numberBuy, departmentLove }) => {
  const departments = departmentLove;

  const [show, setShow] = useState(false);

  const [clickHeart, setClickHeart] = useState(false);

  const showMenu = () => {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  // console.log(show);

  useEffect(() => {
    document.addEventListener("click", function (e) {
      let elementUl = document.querySelector("ul");

      let elementI = document.querySelector(".bars");

      if (e.target !== elementUl && e.target !== elementI) {
        setShow(false);
      }

      // console.log(e.target);
    });
  }, []);

  const clciked = () => {
    console.log("clicked");
    if (clickHeart == false) {
      setClickHeart(true);
    } else {
      setClickHeart(false);
    }
  };

  return (
    <div className="mainBox">
      <div className="cover"></div>
      <div className="navBar container">
        <div className="image">
          <img src={logo} alt="" />
        </div>

        <ul className={`${show == true ? "active" : "no-active"}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>

          <li>
            <a href="#">Product </a>
          </li>

          <li>
            <a href="#">Team</a>
          </li>

          <li>
            <a href="#">Reviews </a>
          </li>
        </ul>

        <div className="icons d-inline-flex align-items-center m-0 justify-content-between">
          <a className="heart" onClick={clciked}>
            <i className="bi bi-heart-fill">
              <span className="information">{numberlove}</span>
            </i>
          </a>
          <a href="#" className="bag">
            <i className="bi bi-bag-fill">
              <span className="information">{numberBuy}</span>
            </i>
          </a>
        </div>

        <div className="barsclick">
          <i className="bars fa-solid fa-bars" onClick={showMenu}></i>
        </div>
      </div>

      <a href="#articles" className="go-down">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>

      <div className={`department-heart ${clickHeart == true ? "active" : ""}`}>
        {departments &&
          departments.length > 0 &&
          departments.map((dep) => (
            <div className="box" key={dep._id}>
              <div className="image">
                <img src={dep.image} alt="" />
              </div>
              <p>{dep.subtitle}</p>
              <a href="#">
                <i className="bi bi-heart-fill"></i>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
