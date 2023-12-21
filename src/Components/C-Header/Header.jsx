import "./header.css";
import logo from "../../assets/logo.jpg";

import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ numberlove, numberBuy }) => {
  const [show, setShow] = useState(false);

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

  return (
    <div className="mainBox">
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
          <a href="#" className="heart">
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
    </div>
  );
};

export default Header;
