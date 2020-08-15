//Light Switch: useState, ternary

import React, { useState } from "react";

function LightSwitch(props) {
  const [lightSwitch, setLightSwitch] = useState(false);
  const [counter, setCounter] = useState(0);

  const flipSwitch = () => {
    setCounter(counter+1);
    console.log(lightSwitch);
    return setLightSwitch(!lightSwitch);
  };

  return (
    <>
    {lightSwitch? 
      <div
        style={{
          backgroundColor: "yellow",
          marginLeft: "45%",
          height: "100px",
          width: "100px",
        }}
      ></div> :
      <div
        style={{
          backgroundColor: "grey",
          marginLeft: "45%",
          height: "100px",
          width: "100px",
        }}
      ></div>
    }
      <p>count: {counter}</p>
      <button onClick={flipSwitch}>Light Switch</button>
    </>
  );



}
export default LightSwitch;
