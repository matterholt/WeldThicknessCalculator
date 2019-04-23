import * as React from "react";
import { DataAdd } from "../src/DataInput";
import styled from "@emotion/styled";

const TitleHead = styled.div`
  display: flex;
  justify-content: space-between;
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

function MainDataTable() {
  return (
    <div>
      <DataAdd />
      <TitleHead>
        <button>Add Guage</button>
        <h1> Weld Calculator </h1>
      </TitleHead>

      <DataList />
    </div>
  );
}

export { MainDataTable };
