import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Hello from "./compOther/Hello";
import PersonCard from "./compOther/PersonCard";

import LightSwitch from "./compLightSwitch/LightSwitch";

import MessageForm from "./compMsgFrmDsply/MessageForm";
import MessageDisplay from "./compMsgFrmDsply/MessageDisplay";

import Tab from "./compTabs/Tab";


import Wrapper from "./compNavBar/Wrapper";
//if combined the two (context & wrapper) must import with { } to grab all
// import { Wrapper, NavBarContext } from "./compNavBar/Wrapper";  
import NavBar from "./compNavBar/NavBar";
import FormWrapper1 from "./compNavBar/FormWrapper1";


function App() {
  const [currMsg, setCurrMsg] = useState(""); //lifting states to be shared in 2 child components
  // console.log(`app currMsg: ${currMsg}`);

  const tabs = ["Tab1", "Tab 2", "Tab3", "Tab 4", "Tab5"];

  return (
    <div className="App">
      <Hello />
      <hr />
      <PersonCard Fn="Jane" Ln="Doe" age={25} hairColor="green" />
      <hr />
      <LightSwitch />
      <hr />
      <MessageForm sendMsg={setCurrMsg} />
      <MessageDisplay message={currMsg} />
      <hr />
      <Tab tabs={tabs} />
      <hr />
      <Wrapper>
          <NavBar />
          <FormWrapper1 />
      </Wrapper>
      
    </div>
  );
}
export default App;
