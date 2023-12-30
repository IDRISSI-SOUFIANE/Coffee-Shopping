// App.jsx
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./C-HomePage/HomePage";
import Purchases from "./Components/C-Purchases/Purchases";

function App() {
  const [departmentPurchase, setDepartmentPurchase] = useState(null);

  console.log(departmentPurchase);

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
