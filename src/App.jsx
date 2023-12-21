import "./App.css";
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

import { createContext, useState } from "react";

import Header from "./Components/C-Header/Header";
import Section from "./Components/C-Section/Section";
import Selling from "./Components/C-Selling/Selling";

import dataProduct from "../src/Data-Api/product";

// console.log(dataProduct);

export const AppContext = createContext();

function App() {
  const [products] = useState(dataProduct);

  const [numberlove, setNumberLove] = useState(null);

  const [numberBuy, setNumberBuy] = useState(null);

  console.log(numberlove);

  return (
    <>
      <Header numberlove={numberlove} numberBuy={numberBuy} />
      <Section />

      <AppContext.Provider value={{ products }}>
        <Selling setNumberLove={setNumberLove} setNumberBuy={setNumberBuy} />
      </AppContext.Provider>
    </>
  );
}

export default App;
