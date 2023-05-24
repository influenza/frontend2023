import { useState, useEffect } from "react";
import "./App.css";
import Diabo from "./diabo";
import Div from "./div";
import Tela1 from "./tela1";
import Tela2 from "./Tela2";
import Teste from "./Teste";
import Tela3 from "./Tela3";
import Tela4 from "./Tela4";
import FrontEnd from "./Front-end";
import Tela5 from "./Tela5";
import Rodape from "./footer";

function App() {

  return (
    <>
      <Div />
      <Tela1/>
      <FrontEnd/>
      <Tela2/>
      <Tela3/>
      <Tela4/>
      <Teste/>
      <Tela5/>
      <div style={{backgroundColor:"#9a4a74", height:"110px"}}>
      </div>
    </>
  );
}

export default App;
