import "./App.css";
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

import { createContext, useState } from "react";

import Header from "./Components/C-Header/Header";
import Section from "./Components/C-Section/Section";
import Selling from "./Components/C-Selling/Selling";
import Team from "./Components/C-Team/Team";
import Reviews from "./Components/C-Reviwes/Reviews";
import Book from "./Components/C-Book/Book";
import Foteer from "./Components/C-Foteer/foteer";

import dataProduct from "../src/Data-Api/product";

export const AppContext = createContext();

function App() {
  const [products] = useState(dataProduct);

  const [numberlove, setNumberLove] = useState(null);

  const [numberBuy, setNumberBuy] = useState(null);

  return (
    <>
      <Header numberlove={numberlove} numberBuy={numberBuy} />
      <Section />

      <AppContext.Provider value={{ products }}>
        <Selling setNumberLove={setNumberLove} setNumberBuy={setNumberBuy} />
      </AppContext.Provider>

      <Team />

      <Reviews />

      <Book />

      <Foteer />
    </>
  );
}

export default App;
