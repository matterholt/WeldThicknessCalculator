import * as React from "react";
import styled from "@emotion/styled";

const AddData = styled.div`
  display: flex;
  color: navy;
  border: navy solid 4px;
  margin: 1rem;
  padding: 1rem;
`;

const TitleLabel = props => {
  return (
    <div>
      <label for={props.ThicknessTitle}>{props.ThicknessTitle}</label>
      <input type="number" name={props.ThicknessTitle} placeholder="mm" />
    </div>
  );
};

function DataAdd() {
  return (
    <AddData>
      <TitleLabel ThicknessTitle="Thick A" />
      <TitleLabel ThicknessTitle="Thick B" />
    </AddData>
  );
}

export default DataAdd;
