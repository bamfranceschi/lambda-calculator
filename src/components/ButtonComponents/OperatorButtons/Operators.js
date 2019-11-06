import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const opContStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between"
  };
  // STEP 2 - add the imported data to state
  const [o, setO] = useState(operators);

  return (
    <div style={opContStyle} className="operatorButtonContainer">
      {o.map((operator, index) => (
        <OperatorButton key={index} operator={operator} />
      ))}
    </div>
  );
};

export default Operators;
