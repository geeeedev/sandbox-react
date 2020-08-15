//Tabs:map(), callback param @ event
//Next - I could add css modules to make better layout

import React, { useState } from "react";
import styles from "../css/Tab.module.css";


const Tab = (props) => {
  // const tabs = ["Tab1", "Tab 2", "Tab3"];  //passing thru props instead
  const [tabText, setTabText] = useState("");

  const handleClick = (e, tabItem) => {
    setTabText(tabItem);
  };

  return (
    <>
      {props.tabs.map((tab) => {
        return (
          <label className={styles.label} type="submit" onClick={(e) => handleClick(e, tab)}>
            {tab}
          </label>
        );
      })}
      <div className={styles.div}>{tabText ? <span>{tabText} content is showing here.</span> : ""}</div>
    </>
  );
};
export default Tab;
