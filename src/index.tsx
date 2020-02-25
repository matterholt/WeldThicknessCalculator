import * as React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

import { MainDataTable } from "./Components/MainDataTable";
//import { PopUpWindow } from "../src/PopUpThickness";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MainDataTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
