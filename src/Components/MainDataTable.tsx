import React, { useState } from "react";
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";

//import { DataAdd } from "../src/DataInput";
import styled from "@emotion/styled";
import data from "../dataInfo/thick_example";

const TitleHead = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: navy solid 4px;
  margin: 1rem;
  padding: 1rem;
`;

const ThicknessItem = styled.li`
  list-style: none;
  display: flex;
  width: 100%;
`;
const ItemBox = styled.p`
  min-width: 100px;
  padding: 10px;
  margin: 5px;
  text-algin: center;
  display: flex;
  justify-content: center;
  align-item: center;
`;

function TableHeader() {
  return (
    <ThicknessItem>
      <ItemBox>Remove</ItemBox>
      <ItemBox>ID</ItemBox>
      <ItemBox>Thick1</ItemBox>
      <ItemBox>Thick2</ItemBox>
      <ItemBox>WeldThick</ItemBox>
    </ThicknessItem>
  );
}

interface rowThickCal {
  keyId: number;
  rowInfo: {
    thicka: number;
    thickb: number;
    thickweld: number;
  };
}

const DataTabel = ({ rowInfo, keyId }: rowThickCal) => {
  return (
    <ThicknessItem key="keyId">
      <ItemBox>X</ItemBox>
      <ItemBox>{keyId}</ItemBox>
      <ItemBox>{rowInfo.thicka}</ItemBox>
      <ItemBox>{rowInfo.thickb}</ItemBox>
      <ItemBox>{rowInfo.thickweld}</ItemBox>
    </ThicknessItem>
  );
};

function MainDataTable() {
  const [thickness, updateTs] = useState(data);

  return (
    <div>
      <TitleHead>
        <button>Add Guage</button>
      </TitleHead>

      <ul
        css={{
          backgroundColor: "gray"
        }}
      >
        <TableHeader />
        {thickness.map((row, id) => {
          return <DataTabel rowInfo={row} keyId={id} />;
        })}
      </ul>
    </div>
  );
}

export { MainDataTable };
