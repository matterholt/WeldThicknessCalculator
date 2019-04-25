import * as React from "react";
import styled from "@emotion/styled";

function Purpose() {
  return (
    <div>
      <h3>Purpose:</h3>
      <p>
        This App will calculate what the thickness(mm) of what the welding could
        be with the thickness of the to panels being welded together. Finite
        Element Analysis (FEA) is applying 2mm to 10mm square on a Geometry
        model and then perform simulations on the model. Object is to be able to
        predict the performance of the model. Achieving this by capturing how
        the real world part will be made. A small part of this is to estimate
        the thickness of the welding. The calculator will assist on creating
        properties that match welding thickness of each panel. If interested:
        Finite Element Analysis
        ....https://en.wikipedia.org/wiki/Finite_element_method
      </p>
    </div>
  );
}
const DataTerms = [
  "Gauge - Thickness of the Geometry or property",
  "Finite Element Analysis - is a numerical method for solving problems of engineering and mathematical physics.",
  "Panel - A Part of the Geometry",
  "Property - Information that is assign to a Panel or a Component",
  "Component - A spefic container for elements for the same part",
  "Welding - A process of bonding two metal together",
  "Simulation - A spcific loads and constraint on FEA model that is simular to real world conditions",
  "Loads - a force applied in Newtons",
  "Constraints - boundaries for the FEA model"
];
const Terms = () => {
  const listTerms = DataTerms.map(item => <li>{item}</li>);
  return (
    <div>
      <h3>Terminology:</h3>
      <ul>{listTerms}</ul>
    </div>
  );
};

const TempIMG = styled.div`
  background: white;
  color: grey;
  width: 10rem;
  height: 10rem;
  padding: 2rem;
`;
const VisualSVG = () => {
  <TempIMG />;
};

function AppInfo() {
  return (
    <div>
      <h2>INFO for app</h2>
      <Purpose />
      <Terms />
      <TempIMG />
    </div>
  );
}

export { AppInfo };
