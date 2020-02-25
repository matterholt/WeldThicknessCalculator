/** @jsx jsx */
import { jsx, css } from "@emotion/core";

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
export { Purpose };
