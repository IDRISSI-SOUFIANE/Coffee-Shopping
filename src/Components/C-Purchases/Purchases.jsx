/* eslint-disable react/prop-types */
import "./purchases.css";

import { useEffect, useState } from "react";

const Purchases = ({ departmentPurchase }) => {
  console.log(departmentPurchase);

  const [total, setTotal] = useState(null);

  const [close, setClose] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (departmentPurchase) {
      //  loaclastorage to work should be change from object to string why?
      //  => caus LocalStorage just save strings ""
      const serializedDepartmentPurchase = JSON.stringify(departmentPurchase);
      localStorage.setItem("departmentsPurchase", serializedDepartmentPurchase);
    }
  }, [departmentPurchase]);

  const storedDepartmentPurchase = localStorage.getItem("departmentsPurchase");
  const Purchaseepartments = storedDepartmentPurchase
    ? JSON.parse(storedDepartmentPurchase)
    : null;

  console.log(Purchaseepartments);

  useEffect(() => {
    let prices = Purchaseepartments.map((price) => parseFloat(price.pric));

    let result = prices.reduce(function (acc, current) {
      return acc + current;
    });
    console.log(result);
    setTotal(result);
  }, [Purchaseepartments]);

  const closePoUp = () => {
    if (close == false) {
      setClose(true);
    } else {
      setClose(false);
    }
  };

  const showPoUp = () => {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    // <div className="box container d-flex justify-content-between align-items-center"></div>

    <div className="box d-flex justify-content-center align-items-center flex-column gap-5">
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Product-Name</td>
            <td>Avaialble</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {Purchaseepartments &&
            Purchaseepartments.length > 0 &&
            Purchaseepartments.map((Purchase) => (
              <tr key={Purchase._id}>
                <td className="image">
                  <img src={Purchase.image} alt="" />
                </td>
                <td>{Purchase.subtitle}</td>
                <td>{Purchase.title}</td>
                <td className="prix">{Purchase.pric} $</td>
              </tr>
            ))}
          <tr>
            <td colSpan={"3"}>Total</td>
            <td>{total} $</td>
          </tr>
        </tbody>
      </table>

      <button onClick={showPoUp}>Shopping Now</button>

      <div
        className={`department-Buy ${show ? "effect" : ""} ${
          close == true ? "active" : ""
        }`}
      >
        <div className="box">
          <div className="image">
            <img src={""} alt="" />
          </div>
          <div className="boxcontain flex-column">
            <div className="field-name d-flex justify-content-between align-items-center gap-3 mb-3">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="last Name" />
            </div>

            <div className="number mb-3">
              <input type="text" placeholder="Your-Number" />
            </div>

            <div className="field-card d-flex flex-column mb-3">
              <div className="card">
                <input type="text" placeholder="1234 1234 1234 1234" />
              </div>
              <div className="card-info d-flex justify-content-between align-items-center">
                <input type="text" placeholder="MM / YY" />
                <input type="text" placeholder="CVC" />
              </div>
            </div>

            <div className="Biling-address mb-3">
              <div className="section">
                <select>
                  <option value="">Casa-Blanca</option>
                  <option value="">Settat</option>
                  <option value="">Mohamedia</option>
                </select>
              </div>
              <div className="address">
                <input type="text" placeholder="Address Line 1" />
                <input type="text" placeholder="Address Line 2" />
              </div>
            </div>

            <button className="pay">Pay</button>
          </div>

          <i className="x fa-regular fa-circle-xmark" onClick={closePoUp}></i>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
