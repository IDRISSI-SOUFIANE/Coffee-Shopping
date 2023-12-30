/* eslint-disable react/prop-types */
import SnackBar from "../C-SnackBar/SnackBar";
import "./purchases.css";

import masterCard from "../../assets/visaCards/02.png";
import plateniumCard from "../../assets/visaCards/03.png";

import { useEffect, useState } from "react";

const Purchases = ({ departmentPurchase }) => {
  console.log(departmentPurchase);

  const [total, setTotal] = useState(null);

  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);

  const [loanInput, setLoanInput] = useState({
    firstName: "",
    lastName: "",
    number: "",
    card: "",
    cardTime: "",
    cardCvc: "",
    citySelect: "",
  });

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
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const showPoUp = () => {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const showHideToast = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  function handleFormSubmmit(event) {
    event.preventDefault();
  }

  const btnIsDisabled =
    loanInput.firstName == "" ||
    loanInput.lastName == "" ||
    loanInput.number == "" ||
    loanInput.card == "" ||
    loanInput.cardTime == "" ||
    loanInput.cardCvc == "" ||
    loanInput.citySelect == "";

  const hideFormm = () => {
    if (btnIsDisabled == false) {
      setShow(false);
    }
  };

  return (
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

      <div className={`department-Buy ${show ? "show" : ""} flex-column`}>
        {/* <div className="boxcontain flex-column"> */}
        <div className="field-name d-flex justify-content-between align-items-center gap-3 mb-3">
          <input
            type="text"
            placeholder="First Name"
            value={loanInput.firstName}
            onChange={(e) =>
              setLoanInput({ ...loanInput, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="last Name"
            value={loanInput.lastName}
            onChange={(e) =>
              setLoanInput({ ...loanInput, lastName: e.target.value })
            }
          />
        </div>

        <div className="number mb-3">
          <input
            type="text"
            placeholder="Your-Number"
            value={loanInput.number}
            onChange={(e) =>
              setLoanInput({ ...loanInput, number: e.target.value })
            }
          />
        </div>

        <div className="field-card d-flex flex-column mb-3">
          <div className="card">
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              value={loanInput.card}
              onChange={(e) =>
                setLoanInput({ ...loanInput, card: e.target.value })
              }
            />
            <div className="imageCard">
              <img src={masterCard} alt="" />
              <img src={plateniumCard} alt="" />
            </div>
          </div>

          <div className="card-info d-flex justify-content-between align-items-center">
            <input
              type="text"
              placeholder="MM / YY"
              value={loanInput.cardTime}
              onChange={(e) =>
                setLoanInput({ ...loanInput, cardTime: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="CVC"
              value={loanInput.cardCvc}
              onChange={(e) =>
                setLoanInput({ ...loanInput, cardCvc: e.target.value })
              }
            />
          </div>
        </div>

        <div className="Biling-address mb-3">
          <div className="section">
            <select
              value={loanInput.citySelect}
              onChange={(e) =>
                setLoanInput({ ...loanInput, citySelect: e.target.value })
              }
            >
              <option value="Choose-City">Choose-City</option>
              <option value="Casa-Blanca">Casa-Blanca</option>
              <option value="Settat">Settat</option>
              <option value="Mohamedia">Mohamedia</option>
            </select>
          </div>
          <div className="address">
            <input type="text" placeholder="Address Line 1" />
            <input type="text" placeholder="Address Line 2" />
          </div>
        </div>

        <button
          className={`pay ${btnIsDisabled ? "disabled" : ""}`}
          onClick={() => {
            showHideToast();
            handleFormSubmmit(event);
            hideFormm();
          }}
          disabled={btnIsDisabled}
        >
          Pay
        </button>
        {/* </div> */}

        <i className="x fa-regular fa-circle-xmark" onClick={closePoUp}></i>
      </div>

      <SnackBar open={open} />
    </div>
  );
};

export default Purchases;
