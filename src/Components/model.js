/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import Button from "./Button";
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
const Modal = css`
  display: flex;
  position: absolute;
  background: #646363de;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  justify-content: center;
  align-item: center;
`;

const animateCrtl = css`
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

const content = css`
  background: white;
  max-width: 550px;
  height: max-content;
  margin: 25px;
  border-radius: 5px;
  padding: 25px;
  line-height: 23px;
  display: flex;
  flex-flow: column;
  align-items: self-start;
  text-align: initial;
`;
const word = css`
  height: 100px;
`;

const topBar = css`
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-between;
`;
export default function SimpleModal({ toggle, bools, info }) {
  const showHideClassName = bools ? animateIN : animateOUT;

  return (
    <div css={[Modal, showHideClassName, animateCrtl]}>
      <div css={content}>
        <div css={topBar}>
          <h2>what is a weld calc.</h2>
          <Button Name="X" toggle={toggle} />
        </div>

        <div css={word}>
          {info}
          <button onClick={toggle}>Close</button>
        </div>
      </div>
    </div>
  );
}
