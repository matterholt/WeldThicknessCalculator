/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import { useState } from "react";
import styled from "@emotion/styled";

const AnimateIn = keyframes`
  from { 
		opacity:0;
    height: 1px;
    width: 1px;
  }
  to {
		opacity:1;
    height: 350px;
    width: 250px;
  }
}
`;
const AnimateOut = keyframes`
  from {
		opacity:1;
    height: 350px;
    width: 250px;
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
  border-bottom: solid black 3px;
  padding: 0.5rem;
  font-size: 25px;
  :focus {
  }
  :hover {
    background: pink;
  }
  :active {
  }
`;

const Modal = css`
  display: content;
  position: absolute;
  background: lightgrey;
  overflow: hidden;
  height: 1px;
  width: 1px;
`;
const animateIN = css`
  animation-name: ${AnimateIn};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;
const animateOUT = css`
  animation-name: ${AnimateOut};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

function SimpleModal({ close, show }) {
  const showHideClassName = show ? animateIN : animateOUT;
  return (
    <div css={[Modal, showHideClassName]}>
      <h2> Testing </h2>
      <p />
      <Button onClick={close}>Close</Button>
    </div>
  );
}

const PurposeContainer = css`
  height: 100vh;
  background: white;
  margin: 2rem;
  border-bottom: solid 1px blue;
`;

function ModalTwo() {
  const [view, updateView] = useState(false);
  const ToggleView = () => {
    updateView(!view);
    //console.log(view);
  };
  return (
    <div css={PurposeContainer}>
      <SimpleModal close={ToggleView} show={view} />
      <Button onClick={ToggleView}>Purpose</Button>
    </div>
  );
}
export { ModalTwo };
