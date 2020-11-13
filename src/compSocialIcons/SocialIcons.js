import React from "react";
//npm i react-animated-social-icons
//npm install @emotion/core @emotion/styled @emotion/react
import { AnimatedSocialIcon } from "react-animated-social-icons";
import styles from "../css/SocialIcons.module.css";

const Icon = () => {
  return (
    <div className={styles.footerIcon, styles.debugOutline}>
      <AnimatedSocialIcon
        brandName="github"
        url="https://github.com/geeeedev"
        defaultColor="#b6c3d9"
        hoverColor="#15202B"
        animation="grow"
        animationDuration={1}
        width="2em"
        style={{padding: '3em'}}
        newPage={true}
      />
      <AnimatedSocialIcon
        brandName="twitter"
        url="https://twitter.com/geeeedev"
        defaultColor="#b6c3d9"
        hoverColor="#1DA1F2"
        animation="bounce"
        animationDuration={1}
        width="2em"
        // style={{ padding: "2em", margin: '5%', outline: "1px dashed green" }}
        style={{padding: '3em'}}
        newPage={true}
      />
      <AnimatedSocialIcon
        brandName="linkedin"
        url="https://www.linkedin.com/in/gwennielau/"
        defaultColor="#b6c3d9"
        hoverColor="#0A66C2"
        animation="float"
        animationDuration={1}
        width="2em"
        style={{padding: '3em'}}
        newPage={true}
      />
    </div>
  );
};

export default Icon;
