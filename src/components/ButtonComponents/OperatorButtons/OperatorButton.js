import React from "react";
import { grey } from "ansi-colors";

const OperatorButton = props => {
  const opBtnStyle = {
    borderRadius: 50,
    height: 25,
    width: 25,
    backgroundColor: "steelblue",
    border: 0,
    shadowColor: "grey",
    shadowOpacity: 1.0,
    shadowOffset: { width: 25, height: 25 },
    shadowRadius: 50,
    alignSelf: "flex-end",
    color: "white"
  };

  return (
    <button style={opBtnStyle} className="operatorButton">
      {props.operator.char}
    </button>
  );
};

/* Display a button element rendering the data being passed down from the parent container on props */

export default OperatorButton;
