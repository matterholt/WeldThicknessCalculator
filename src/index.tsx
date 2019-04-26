import * as React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

import { MainDataTable } from "../src/MainDataTable";
import { PopUpWindow } from "../src/PopUpThickness";
import { ModelTrems } from "../src/ModelTrems";

function App() {
  return (
    <div className="App">
      <ModelTrems />
      <div>
        <MainDataTable />
      </div>
      <PopUpWindow />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
