/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import { useState } from "react";
import styled from "@emotion/styled";
import { Purpose } from "../src/dataInfo/AppDetail";

const AnimateIn = keyframes`
  from { 
		opacity:0;
    height: 1px;
    width: 1px;
  }
  to {
		opacity:1;
    height: 100vh;
    width: 50vw;
  }
}
`;
const AnimateOut = keyframes`
  from {
		opacity:1;
    height: 100vh;
    width: 50vw;
  }
  to {
		opacity:0;
    height: 1px;
    width: 1px;
  }
}
`;

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

const Modal = css`
  display: content;
  position: absolute;
  background: lightblue;
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0 4rem;
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;
const animateIN = css`
  animation-name: ${AnimateIn};
`;
const animateOUT = css`
  animation-name: ${AnimateOut};
`;

function SimpleModal({ toggle, bools, info }) {
  const showHideClassName = bools ? animateIN : animateOUT;
  return (
    <div css={[Modal, showHideClassName]}>
      <h2> App Description </h2>
      <Button onClick={toggle}>Close</Button>
      <Purpose />
    </div>
  );
}

const PurposeContainer = css``;

// TODO for simpleModal , pass
function ModalTwo() {
  const [view, updateView] = useState(false);
  const ToggleView = () => {
    updateView(!view);
    //console.log(view);
  };
  return (
    <div css={PurposeContainer}>
      <SimpleModal toggle={ToggleView} bools={view} />
      <Button onClick={ToggleView}>Detail</Button>
    </div>
  );
}
export { ModalTwo };
