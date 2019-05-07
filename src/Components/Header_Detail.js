/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import { useState } from "react";
import styled from "@emotion/styled";

const appDetail = css`
  line-height: 20px;
  word-wrap: none;
`;
const modal__textBox = css`
  padding: 1rem;
  text-align: center;
  width: 100%;
  height: 100%;
  background: #fff;
`;

function Purpose() {
  return (
    <div css={modal__textBox}>
      <div>
        <h3>Purpose:</h3>
        <p css={appDetail}>
          This App will calculate what the thickness(mm) of what the welding
          could be with the thickness of the to panels being welded together.
          Finite Element Analysis (FEA) is applying 2mm to 10mm square on a
          Geometry model and then perform simulations on the model. Object is to
          be able to predict the performance of the model.
        </p>
        <p css={appDetail}>
          Achieving this by capturing how the real world part will be made. A
          small part of this is to estimate the thickness of the welding. The
          calculator will assist on creating properties that match welding
          thickness of each panel. If interested: Finite Element Analysis
          ....https://en.wikipedia.org/wiki/Finite_element_method
        </p>
      </div>
    </div>
  );
}
const AnimateIn = keyframes`
  from { 

		opacity:0;
    height: 1px;
    width: 1px;
  }
  to {
		opacity:1;
    height: 100vh;
  }
}
`;
const AnimateOut = keyframes`
  from {
		opacity:1;
    height: 100vh;
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

const Modal = css`
  display: content;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  background: #f2f2f2de;
  overflow: hidden;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
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
function Detail() {
  const [view, updateView] = useState(false);
  const ToggleView = () => {
    updateView(!view);
    //console.log(view);
  };
  return (
    <div css={PurposeContainer}>
      <div css={modal__textBox}>
        <Button onClick={ToggleView}>Detail</Button>
        <SimpleModal toggle={ToggleView} bools={view} />
      </div>
    </div>
  );
}
export { Detail };
