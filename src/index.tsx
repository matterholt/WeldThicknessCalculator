import * as React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

import { MainDataTable } from "../src/MainDataTable";
import { PopUpWindow } from "../src/PopUpThickness";
import { AppInfo } from "../src/AppWriteUp";

const TEMP = styled.div`
  background: grey;
  color: orange;
  padding: 2rem;
  display: none;
`;

function App() {
  return (
    <div className="App">
      <div>
        <MainDataTable />
      </div>
      <PopUpWindow />
      <TEMP>
        <AppInfo />
      </TEMP>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
