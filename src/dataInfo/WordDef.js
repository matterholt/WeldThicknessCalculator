import React from "react";

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
  const listTerms = DataTerms.map(item => <li key={item.id}>{item}</li>);

  return (
    <div>
      <h3>Terminology:</h3>
      <ul>{listTerms}</ul>
    </div>
  );
};

export { Terms };
