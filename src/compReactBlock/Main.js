//ReactBlock: modular components with {props.children} (Main.js)


import React from "react";
import styles from "../css/Main.module.css";

function Main(props) {
  return (
      <div className={styles.block}>
          {props.children}  {/* <<< template for content block */}
      </div>
  );
}

export default Main;
