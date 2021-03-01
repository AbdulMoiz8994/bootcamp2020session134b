import React from "react";
import "./App.css";

import {
  Header,
  Contant1,
  Contant2,
  Contant3,
  Contant4,
  About,
} from "./Components/index";

function App() {
  return (
    <div>
      <Header />
      <div className='comp'>
        <Contant1 />
        <Contant2 />
        <Contant3 />
        <Contant4 />
        <About />
      </div>
    </div>
  );
}

export default App;
