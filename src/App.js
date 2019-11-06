import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { numbers } from "./data";
import { operators } from "./data";
import { specials } from "./data";
import Logo from "./components/DisplayComponents/Logo";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components

function App() {
  const [numberData, setNumberData] = useState(numbers);
  const [operatorData, setOperatorData] = useState(operators);
  const [specialsData, setSpecialsData] = useState(specials);

  const appStyle = {
    height: 400
  };

  // STEP 5 -
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div style={appStyle} className="App">
        <Display />
        <Numbers />
        <Operators />
        <Specials />
      </div>
    </div>
  );
}

export default App;
