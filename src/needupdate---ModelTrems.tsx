/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import styled from "@emotion/styled";

import { Terms } from "../src/dataInfo/WordDef";
const ModalDiv = css`
  position:absolute;
  z-index: 5;
	background: #426270;
	color: white;
	width: 50vw;
	height: 100vh;
	display: flex;
	flex-flow: column;
  padding: 2rem;
	border-radius: 1rem;
  box-shadow: 3px 5px 10px rgba(20, 20, 20, 0.5);
	button {
		width: 7rem;
		height: 3rem;
		background: none;
		border: 3px solid white;
		color: white;
		font-size: 20px;
		border-radius: 0.2rem;
		margin: 2rem;
		:focus {
			outline: none;
		}
		:hover {
			background: #114860;
			box-shadow: 3px 5px 10px #3a3c3d;
			border: 3px solid white;
			/*transition: <property> <duration> <timing-function> <delay>;*/
			transition: all 50ms ease-in-out 1ms;
			transform: scale(1.1);
		}
		:active {
			background: #259cd1;
			outline: none;
			box-shadow: 3px 5px 10px rgba(200, 200, 200, 1);
			transform: scale(1.2);
		}
	}
}`;
const Hide = css`
  display: none;
`;

function SimpleModal({ close, show }) {
  const showHideClassName = show ? ModalDiv : Hide;
  return (
    <div css={showHideClassName}>
      <h2> Terms </h2>
      <button onClick={close}>Close</button>
      <Terms />
    </div>
  );
}

const LauncherDiv = styled.div`
    display: flex;
    button {
      border:none;
      font-size: 25px;
      background: white;
      border-bottom: solid black 2px;
      :focus {
        outline: none;
      }
      :hover {
        border-bottom: solid black 2px;
        /*transition: <property> <duration> <timing-function> <delay>;*/
        transition: all 50ms ease-in-out 1ms;
        transform: scale(1.01);
      }
      :active {
        background: white;
        border-bottom: solid black 2px;
        outline: none;
        box-shadow: 0px 10px 10px grey;
        transform: scale(1.1);
      }
    }
  }
`;

const TopContainer = css`
  height: 3rem;
  border-bottom: solid 1px blue;
`;

function ModelTrems() {
  const [view, updateView] = useState(false);
  const ToggleView = () => {
    updateView(!view);
    //console.log(view);
  };
  return (
    <div css={TopContainer}>
      <SimpleModal close={ToggleView} show={view} />
      <LauncherDiv>
        <button onClick={ToggleView}>show</button>
      </LauncherDiv>
    </div>
  );
}
export { ModelTrems };
