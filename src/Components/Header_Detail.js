/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import SimpleModal from "./model";
import ProjectInfo from "./projectInfo";
import styled from "@emotion/styled";

const modal__textBox = css`
  padding: 1rem;
  text-align: center;
  width: 100%;
  height: 100%;
  background: #fff;
`;

const Button = styled.button`
  border: none;
  background: white;
  border-bottom: solid black 1px;
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 25px;
  :focus {
  }
  :hover {
    transform: scale(1.2);
  }
  :active {
    transform: scale(1.1);
  }
`;

// TODO for simpleModal , pass
function Detail() {
  const [view, updateView] = useState(false);
  const ToggleView = () => {
    updateView(!view);
    console.log(view);
  };
  return (
    <div>
      <div css={modal__textBox}>
        <Button onClick={ToggleView}>Detail</Button>
        <SimpleModal toggle={ToggleView} bools={view} info={<ProjectInfo />} />
      </div>
    </div>
  );
}
export { Detail };
