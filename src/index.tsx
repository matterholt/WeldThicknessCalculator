import * as React from "react";
import { render } from "react-dom";
import AddData from "../src/AddThickness";

function App() {
  return (
    <div className="App">
      <div>
        <AddData />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
