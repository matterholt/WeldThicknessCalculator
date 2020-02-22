import React from "react";
import styled from "@emotion/styled";
import { Detail } from "./Header_Detail";

const HeaderStyle = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid blue;
  max-width: 100vw;
`;
function Header() {
  return (
    <HeaderStyle>
      <Detail />
      <h1>Weld Thickness Calculator</h1>
    </HeaderStyle>
  );
}

export { Header };
