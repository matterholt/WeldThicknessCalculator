/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";

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
  position: fixed;
  overflow-y: scroll;
  position: absolute;
  background: #f2f2f2de;
  background-color: gray;
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
  margin: 25px;
  border-radius: 5px;
  padding: 50px;
`;

export default function SimpleModal({ toggle, bools, info }) {
  const showHideClassName = bools ? animateIN : animateOUT;
  return (
    <div css={[Modal, showHideClassName, animateCrtl]}>
      <div css={content}>
        <h2>what is a weld calc.</h2>
        {info}
        <button onClick={toggle}>Close</button>
      </div>
    </div>
  );
}
const ProjectInfo = () => {
  return (
    <div>
      <p>
        This App will calculate what the thickness(mm) of what the welding could
        be with the thickness of the to panels being welded together. Finite
        Element Analysis (FEA) is applying 2mm to 10mm square on a Geometry
        model and then perform simulations on the model. Object is to be able to
        predict the performance of the model.
      </p>
      <p>
        Achieving this by capturing how the real world part will be made. A
        small part of this is to estimate the thickness of the welding. The
        calculator will assist on creating properties that match welding
        thickness of each panel. If interested: Finite Element Analysis
        ....https://en.wikipedia.org/wiki/Finite_element_method
      </p>
    </div>
  );
};
