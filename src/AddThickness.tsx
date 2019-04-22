import * as React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const AddData = styled.div`
  display: flex;
  justify-content: space-between;
  color: navy;
  border-bottom: navy solid 4px;
  margin: 1rem;
  padding: 1rem;
`;

function DataList() {
  return (
    <ul>
      <li>Thick1: 2.0mm, Thick2: 2.0mm, WeldThick : 2.0mm</li>
    </ul>
  );
}

const PopUpInputs = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  background: #97a7b3;
  background-blend-mode: multiply;
  margin: 0;
  height: 100vh;
  width: 100vw;
  color: white;
  //visibility: hidden;
`;

function InputLabel(props) {
  return <p> add thickness to get the weld thickness property</p>;
}

function DataInputField() {
  //create a component that will transition in to
  //reviel input field for thickness
  return (
    <PopUpInputs>
      <InputLabel />
    </PopUpInputs>
  );
}

function DataAdd() {
  const [weldData, updateWeldData] = useState("test");
  return (
    <div>
      <AddData>
        <button>Add Guage</button>
        <h1> Weld Calculator </h1>
        <DataInputField />
      </AddData>
      <DataList />
    </div>
  );
}

export default DataAdd;
