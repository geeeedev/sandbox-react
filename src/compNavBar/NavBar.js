import React, { useContext } from "react";
import NavBarContext from "../context/NavBarContext";

//if combined the two (context & wrapper) use below instead
//  import { NavBarContext } from "./Wrapper";

 

const NavBar = () => {
  const navBarContext = useContext(NavBarContext);
  return (
    <>
      <h4>Hi {navBarContext.input}!</h4>
    </>
  );
};
export default NavBar;
