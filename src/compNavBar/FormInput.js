import React, { useContext } from "react";
import NavBarContext from "../context/NavBarContext";

//if combined the two (context & wrapper) use below instead
// import { NavBarContext } from "./Wrapper";

const FormInput = () => {
  const navBarContext = useContext(NavBarContext);

  return (
    <>
      <p>Enter Text Here: </p>
      <input
        type="text"
        onChange={(e) => {
          navBarContext.setInput(e.target.value);
        }}
      ></input>
    </>
  );
};
export default FormInput;
