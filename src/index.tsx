import * as React from "react";
import { render } from "react-dom";
import { MainDataTable } from "../src/MainDataTable";

function App() {
  return (
    <div className="App">
      <div>
        <MainDataTable />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
