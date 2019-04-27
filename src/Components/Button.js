/** @jsx jsx */
import { jsx, css, } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";


const Button = styled.button`
  border: none;
  background: white;
  border: solid black 1px;
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 25px;
  :focus {
  }
  :hover {
    box-shadow: 5px 6px 16px grey;
  }
  :active {
  }
`;

function Button_comp (Name){
  return(
    < Button > {Name}  <Button />
  )
}
