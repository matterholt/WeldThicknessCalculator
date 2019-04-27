import React from "react";
import styled from "@emotion/styled";
//import { ModelTrems } from "../src/ModelTrems";
import { ModalTwo } from "../src/ModalTwo";

const HeaderStyle = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid blue;
`;
function Header() {
  return (
    <HeaderStyle>
      <h1>
        {" "}
        Weld Thickness <br /> Calculator{" "}
      </h1>
      <ModalTwo />
    </HeaderStyle>
  );
}

export { Header };
