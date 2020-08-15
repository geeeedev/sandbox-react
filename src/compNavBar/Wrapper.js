import React, {useState} from 'react';
import NavBarContext from "../context/NavBarContext";

//if combined the two (context & wrapper) using multiple export, do with below instead
// import React, {useState, createContext} from 'react';
// const NavBarContext = createContext();        


const Wrapper = ({children}) => { 
    //same as =({props}) ...{props.children}

    const [input, setInput] = useState("");
    return (
        <NavBarContext.Provider value={{input,setInput}}>
            {children}
        </NavBarContext.Provider>
    )
}
export default Wrapper;

//if combined the two (context & wrapper) using multiple export, do with below instead
// export { Wrapper, NavBarContext };     
//then must import with { } in child component like below
//import { NavBarContext } from "./Wrapper";   