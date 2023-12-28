import "./header.css";
import logo from "../../assets/logo.jpg";

import { Link } from "react-router-dom";

// import { Link } from "react-scroll";

import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ numberlove, numberBuy, departmentLove }) => {
  useEffect(() => {
    if (departmentLove) {
      //  loaclastorage to work should be change from object to string why?
      //  => caus LocalStorage just save strings ""
      const serializedDepartmentLove = JSON.stringify(departmentLove);
      localStorage.setItem("departments", serializedDepartmentLove);
    }
  }, [departmentLove]);

  const storedDepartmentLove = localStorage.getItem("departments");
  const lovedepartments = storedDepartmentLove
    ? JSON.parse(storedDepartmentLove)
    : null;
  // console.log(lovedepartments);

  //  =============== ================= ===============s
  //  =============== ================= ===============
  //  =============== ================= ===============

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
    <div className="mainBox" id="Home">
      <div className="cover"></div>
      <div className="navBar container">
        <div className="image">
          <img src={logo} alt="" />
        </div>

        {/* <ul className={`links ${show == true ? "active" : "no-active"}`}>
          <li>
            <Link
              className="a"
              to="Home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="a"
              to="Services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              className="a"
              to="Product"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Product
            </Link>
          </li>

          <li>
            <Link
              className="a"
              to="Team"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Team
            </Link>
          </li>

          <li>
            <Link
              className="a"
              to="Reviews"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Reviews
            </Link>
          </li>
        </ul> */}

        <ul className={`links ${show == true ? "active" : "no-active"}`}>
          <li>
            <a className="dropdown-item a" href="#Home">
              Home
            </a>
          </li>

          <li>
            <a className="dropdown-item a" href="#Services">
              Services
            </a>
          </li>

          <li>
            <a className="dropdown-item a" href="#Product">
              Product
            </a>
          </li>

          <li>
            <a className="dropdown-item a" href="#Team">
              Team
            </a>
          </li>

          <li>
            <a className="dropdown-item a" href="#Reviews">
              Reviews
            </a>
          </li>
        </ul>

        <div className="icons d-inline-flex align-items-center m-0 justify-content-between">
          <a className="heart" onClick={clciked}>
            <i className="bi bi-heart-fill">
              <span className="information">{numberlove}</span>
            </i>
          </a>
          <Link to={"/purchase"} className="bag">
            <i className="bi bi-bag-fill">
              <span className="information">{numberBuy}</span>
            </i>
          </Link>
        </div>

        <div className="barsclick">
          <i className="bars fa-solid fa-bars" onClick={showMenu}></i>
        </div>
      </div>

      {/* <a href="#articles" className="go-down">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a> */}

      <a className="go-down" href="#Services">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>

      <div className={`department-heart ${clickHeart == true ? "active" : ""}`}>
        {lovedepartments &&
          lovedepartments.length > 0 &&
          lovedepartments.map((dep) => (
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
