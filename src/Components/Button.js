/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";

const Button_style = styled.button`
  border: none;
  text-align: center;
  background: white;
  border-radius: 2px;
  font-size: 15px;
  height: 25px;
  width: 25px;
  :focus {
  }
  :hover {
    background: lightgrey;
    box-shadow: 5px 6px 16px grey;
  }
  :active {
  }
`;

export default function Button_comp({ Name, toggle }) {
  return <Button_style onClick={toggle}> {Name} </Button_style>;
}
