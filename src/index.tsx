import * as React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

//import { MainDataTable } from "../src/MainDataTable";
//import { PopUpWindow } from "../src/PopUpThickness";
import { Header } from "../src/Header";

const TEST = styled.div`
  background: pink;
`;

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
