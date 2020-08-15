//ReactBlock: modular components with {props.children} (Main.js)

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./compReactBlock/Header";
import SideNav from "./compReactBlock/SideNav";
import Main from "./compReactBlock/Main";
import Content from "./compReactBlock/Content";
import FooterAds from "./compReactBlock/FooterAds";

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Main>
        <Content />
        <Content />
        <Content />
        <FooterAds />
      </Main>
    </div>
  );
}

export default App;

{
  /* <>
      <Hello />
      <hr />
      <PersonCard Fn="Jane" Ln="Doe" age={25} hairColor="green"/>
      <hr />
      <LightSwitch />
      
import Hello from "./components/Hello";
import PersonCard from "./components/PersonCard";
import LightSwitch from "./components/LightSwitch";
    </> */
}
