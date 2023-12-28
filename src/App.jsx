// import "./App.css";
// // import Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Bootstrap Icons
// import "bootstrap-icons/font/bootstrap-icons.css";

// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import HomePage from "./C-HomePage/HomePage";
// import Purchases from "./Components/C-Purchases/Purchases";

// function App() {
//   const [departmentPurchase, setDepartmentPurchase] = useState(null);

//   console.log(departmentPurchase);

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<HomePage />} />

//         <Route
//           path="/purchase"
//           element={<Purchases setDepartmentPurchase={setDepartmentPurchase} />}
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;

// App.jsx
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./C-HomePage/HomePage";
import Purchases from "./Components/C-Purchases/Purchases";

function App() {
  const [departmentPurchase, setDepartmentPurchase] = useState(null);

  // useEffect(() => {
  //   console.log("Updated departmentPurchase:", departmentPurchase);
  // }, [departmentPurchase]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage setDepartmentPurchase={setDepartmentPurchase} />}
        />
        <Route
          path="/purchase"
          element={<Purchases departmentPurchase={departmentPurchase} />}
        />
      </Routes>
    </>
  );
}

export default App;
