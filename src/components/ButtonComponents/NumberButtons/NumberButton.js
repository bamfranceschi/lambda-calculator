import React from "react";

const NumberButton = props => {
  return (
    <button
      className="numberButton"
      onClick={() => props.displayNum(props.text)}
    >
      {props.text}
    </button>
  );
};

/* Display a button element rendering the data being passed down from the parent container on props */

export default NumberButton;
