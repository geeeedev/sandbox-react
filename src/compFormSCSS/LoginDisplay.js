import React from "react";
import "./css/LoginDisplay.css"; //importing post-scss css
import "./css/LoginForm.css";

const LoginDisplay = (props) => {
  const { username, email, password, cfmPswd } = props.data;

  return (
    <>
      <div className="display">
        <p>Entry Confirmation</p>
        <hr />
        <div className="containerLabelInput">
          <label className="displayLabel">Username: </label> {username}
        </div>

        <div className="containerLabelInput">
          <label className="displayLabel">Email: </label> {email}
        </div>

        <div className="containerLabelInput">
          <label className="displayLabel">Password: </label> {password}
        </div>

        <div className="containerLabelInput">
          <label className="displayLabel">Password Confirmation: </label> {cfmPswd}
        </div>
      </div>
    </>
  );
};

export default LoginDisplay;
