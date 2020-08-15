import React from "react";
import FormWrapper2 from "./FormWrapper2";

const FormWrapper1 = () => {
  return <FormWrapper2 />;
};
export default FormWrapper1;

//FormWrapper1.js: This component should only 
//wrap the Form Component as its child.
//This is to illustrate that you can use  
//nested components with context without 
//passing down props.