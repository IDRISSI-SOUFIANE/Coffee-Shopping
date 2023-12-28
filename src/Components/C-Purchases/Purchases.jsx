import "./purchases.css";

import logo from "../../assets/images/logo.jpg";

const Purchases = ({ departmentPurchase }) => {
  console.log(departmentPurchase);
  return (
    <div className="box container d-flex justify-content-between align-items-center">
      <div className="image">
        <img src={logo} alt="" />
      </div>

      <div className="details-box">
        <h1>Here is the single Product Name and Information</h1>
        <p>Availablity (In Stock)</p>
        <h2>$ 344.99</h2>

        <table className="inputs">
          <tbody>
            <tr>
              <td>Quantity</td>
              <td align="right">
                <input type="number" id="first" />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Sub Total</td>
              <td align="right">
                <input type="number" id="second" />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Sales Tax 5.7%</td>
              <td align="right">
                <input type="number" id="third" />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Total</td>
              <td align="right">
                <input type="number" id="fourth" />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Spcification</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          commodi.
        </p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Purchases;
