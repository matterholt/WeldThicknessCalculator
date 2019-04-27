import * as React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

import { MainDataTable } from "../src/MainDataTable";
import { PopUpWindow } from "../src/PopUpThickness";
import { ModelTrems } from "../src/ModelTrems";
import { ModalTwo } from "../src/ModalTwo";

const TEST = styled.div`
  background: pink;
`;

function App() {
  return (
    <div className="App">
      <ModelTrems />
      <div>
        <MainDataTable />
      </div>
      <PopUpWindow />
      <TEST>
        <h1>TEEST</h1>
        <ModalTwo />
      </TEST>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
