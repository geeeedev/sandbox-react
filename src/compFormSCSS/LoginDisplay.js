import React from "react";
import "./css/Login.css"; //importing post-scss css

const LoginDisplay = (props) => {
  const { username, email, password, cfmPswd } = props.data;

  return (
    <>
      <div className="display">
        <p>Entry Confirmation</p>
        <hr />
        <div className="whereami">
          <p className="displayEnteredInfo">Username: {username}</p>
          <p className="displayEnteredInfo">Email: {email}</p>
          <p className="displayEnteredInfo">Password: {password}</p>
          <p className="displayEnteredInfo">Password Confirmation: {cfmPswd}</p>
        </div>
      </div>
    </>
  );
};

export default LoginDisplay;
