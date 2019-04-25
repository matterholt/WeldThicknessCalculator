import React, { useState } from "react";
import styled from "@emotion/styled";

const ContainerInputs = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  z-index: 1;
  background: rgba(24, 24, 24, 0.9);
  visibility: hidden;
`;

const AddData = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  text-align: center;
  color: navy;
  padding: 1rem 2rem;
  background: white;
  border-radius: 1rem;
`;

const TitleThickness = () => <h2> Input Gauge </h2>;

const InputPart = styled.input`
  margin: 0.5rem;
  font-size: 25px;
  border: none;
  border-bottom: solid 2px black;
  text-align: center;
`;
const TitlePart = props => {
  return <InputPart type="text" placeholder="Part Name" />;
};

const TitleGauge = props => {
  return (
    <input
      type="number"
      step="0.01"
      name={props.ThicknessTitle}
      placeholder="mm"
    />
  );
};

function DataAdd() {
  const [weldData, updateWeldData] = useState([{ partName: " ", gauge: "" }]);
  return (
    <ContainerInputs>
      <AddData>
        <TitleThickness />
        <TitlePart />
        <TitleGauge ThicknessTitle="Thicknes A" />
        <TitlePart />
        <TitleGauge ThicknessTitle="Thicknes B" />
        <button>Add</button>
      </AddData>
    </ContainerInputs>
  );
}

export { DataAdd };
