/* eslint-disable react/no-unescaped-entities */
import "./selling.css";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";

// eslint-disable-next-line react/prop-types
const Selling = ({ setNumberLove, setNumberBuy, setDepartmentLove }) => {
  const { products } = useContext(AppContext);

  const initialLove = JSON.parse(localStorage.getItem("love")) || [];

  const [love, setLove] = useState(initialLove);

  //==================================================================\\

  const initialBuying = JSON.parse(localStorage.getItem("buy")) || [];

  const [buying, setBuying] = useState(initialBuying);

  //  =====   ================== ========== ============== ============================\\
  //  =====   ================== ========== ============== ============   ===============\\

  useEffect(() => {
    const numberOfBuy = buying.map((n) => parseInt(n.n_buy));

    const sumArray = (array) => {
      let sum = 0;

      for (const num of array) {
        sum += num;
      }
      return sum;
    };

    const result = sumArray(numberOfBuy);

    // console.log(numberOfBuy);
    // console.log(result);
    setNumberBuy(result);
  }, [buying, setNumberBuy]);

  //   useEffect(() => {
  //     const numberOfBuy = buying.map((n) => parseInt(n.n_buy));
  //     const result = numberOfBuy.reduce(function (acc, current) {
  //       return acc + current;
  //     });
  //     setNumberBuy(result);
  //   }, [buying, setNumberBuy]);

  const buy = (id) => {
    let productBuy = products.map((p) => {
      if (p._id == id) {
        p.effect = !p.effect;
      }

      if (p.effect == true) {
        return { ...p, n_buy: p.n_buy + 1 };
      }

      return p;
    });

    // console.log(productBuy);
    setBuying(productBuy);

    // Save the state to localStorage
    localStorage.setItem("buy", JSON.stringify(productBuy));
  };

  //  =====   ================== ========== ============== == ============   ====     ========     =======\\
  //  =====   ================== ========== ============== == ============   ====     ========     =======\\

  useEffect(() => {
    const newNumbers = love.map((n) => parseInt(n.number));

    // Custom function to sum the array elements
    const sumArray = (array) => {
      let sum = 0;
      for (const num of array) {
        sum += num;
      }
      return sum;
    };

    // Use the custom function to calculate the sum
    const result = sumArray(newNumbers);

    // console.log(newNumbers);
    // console.log(result);
    setNumberLove(result);
  }, [love, setNumberLove]);

  const changBcg = (id) => {
    const newProducts = products.map((p) => {
      if (p._id === id) {
        p.active = !p.active; // Toggle the active property
      }

      if (p.active == true) {
        return { ...p, number: p.number + 1 };
      }

      return p;
    });

    // console.log(newProducts);
    setLove(newProducts);
    // setDepartmentLove(newProducts);
    setDepartmentLove(newProducts.filter((t) => t.active));

    // Save the state to localStorage
    localStorage.setItem("love", JSON.stringify(newProducts));
  };

  //  ===== ================== ========== ============== ============   ===============\\
  //  ===== ================== ========== ============== ============   ===============\\

  return (
    <div className="mainSelling p-relative">
      <div className="introduce p-relative">
        <h2>Our Top Selling Product</h2>
        <p>
          Our coffee is more than a beverage, it's a testament to hard work and
          passion. Just as we put our all into perfecting each blend, we
          recognize the relentless grind it takes to achieve your goals.
        </p>
      </div>

      <div className="boxes container row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 justify-content-between align-items-center">
        {products.map((product) => (
          <div className="box p-relative" key={product._id}>
            {/* <div className={`heart ${product.active ? "active" : ""}`}> */}
            {/* <div
              className={`heart ${
                love.find((p) => p._id === product._id)?.active ? "active" : ""
              }`}
            > */}
            <div
              className={`heart ${
                love.find((p) => p._id === product._id && p.active)
                  ? "active"
                  : ""
              }`}
            >
              <i
                className="fa-solid fa-heart"
                onClick={() => {
                  changBcg(product._id);
                  // numberoflove = { numberoflove };
                }}
              ></i>
            </div>

            <div className="image">
              <img src={product.image} alt="" />
            </div>

            <p className="child1">{product.title}</p>
            <p className="child2">{product.subtitle}</p>

            <div className="infoinfo">
              <span>$ {product.pric}</span>

              <div
                className={`Buy ${
                  buying.find((p) => p._id == product._id && p.effect)
                    ? "active"
                    : ""
                }`}
              >
                <i
                  className="bag bi-handbag"
                  onClick={() => buy(product._id)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selling;

// //  ================== =================== ================== ================== =================== ================== \\

//  // // // // // /// // // // // // // / / // /// // // // // // // // // // // // // // // // // // //

// import "./selling.css";
// import { useContext, useState, useEffect } from "react";
// import { AppContext } from "../../App";

// const Selling = ({ setNumberLove, setNumberBuy }) => {
//   const { products } = useContext(AppContext);

//   const initialLove = JSON.parse(localStorage.getItem("love")) || [];
//   const [love, setLove] = useState(initialLove);

//   const initialBuying = JSON.parse(localStorage.getItem("buy")) || [];
//   const [buying, setBuying] = useState(initialBuying);

//   useEffect(() => {
//     const numberOfBuy = buying.map((n) => parseInt(n.n_buy));
//     const result = numberOfBuy.reduce(function (acc, current) {
//       return acc + current;
//     });
//     setNumberBuy(result);
//   }, [buying, setNumberBuy]);

//   useEffect(() => {
//     const newNumbers = love.map((n) => parseInt(n.number));
//     const result = newNumbers.reduce(function (acc, current) {
//       return acc + current;
//     });
//     setNumberLove(result);
//   }, [love, setNumberLove]);

//   const buy = (id) => {
//     let productBuy = products.map((p) => {
//       if (p._id === id) {
//         const updatedProduct = { ...p, n_buy: p.n_buy + 1 };
//         return updatedProduct;
//       }
//       return p;
//     });

//     setBuying(productBuy);

//     localStorage.setItem("buy", JSON.stringify(productBuy));

//     const updatedNumberBuy = productBuy.reduce(
//       (acc, current) => acc + current.n_buy,
//       0
//     );
//     setNumberBuy(updatedNumberBuy);
//   };

//   const changBcg = (id) => {
//     const newProducts = products.map((p) => {
//       if (p._id === id) {
//         p.active = !p.active;
//       }

//       if (p.active === true) {
//         return { ...p, number: p.number + 1 };
//       }

//       return p;
//     });

//     setLove(newProducts);

//     localStorage.setItem("love", JSON.stringify(newProducts));
//   };

//   return (
//     <div className="mainSelling p-relative">
//       <div className="introduce p-relative">
//         <h2>Our Top Selling Product</h2>
//         <p>
//           Our coffee is more than a beverage, it's a testament to hard work and
//           passion. Just as we put our all into perfecting each blend, we
//           recognize the relentless grind it takes to achieve your goals.
//         </p>
//       </div>

//       <div className="boxes container row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 justify-content-between align-items-center">
//         {products.map((product) => (
//           <div className="box p-relative" key={product._id}>
//             {/* <div className={`heart ${product.active ? "active" : ""}`}> */}
//             {/* <div
//               className={`heart ${
//                 love.find((p) => p._id === product._id)?.active ? "active" : ""
//               }`}
//             > */}
//             <div
//               className={`heart ${
//                 love.find((p) => p._id === product._id && p.active)
//                   ? "active"
//                   : ""
//               }`}
//             >
//               <i
//                 className="fa-solid fa-heart"
//                 onClick={() => {
//                   changBcg(product._id);
//                   // numberoflove = { numberoflove };
//                 }}
//               ></i>
//             </div>

//             <div className="image">
//               <img src={product.image} alt="" />
//             </div>

//             <p className="child1">{product.title}</p>
//             <p className="child2">{product.subtitle}</p>

//             <div className="info">
//               <span>$ {product.pric}</span>
//               <i
//                 className="bag bi-handbag"
//                 onClick={() => buy(product._id)}
//               ></i>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Selling;
