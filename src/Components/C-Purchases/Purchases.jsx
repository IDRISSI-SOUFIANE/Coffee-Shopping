/* eslint-disable react/prop-types */
import "./purchases.css";

import { useEffect } from "react";

const Purchases = ({ departmentPurchase }) => {
  console.log(departmentPurchase);

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
                <td>{Purchase.pric} $</td>
              </tr>
            ))}
        </tbody>
      </table>

      <button>Shopping Now</button>
    </div>
  );
};

export default Purchases;
