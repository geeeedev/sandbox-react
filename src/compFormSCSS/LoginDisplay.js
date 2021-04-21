import React from "react";
import "./css/LoginForm-Display.css"; //importing post-scss css
// import "./css/LoginDisplay.css"; 

const LoginDisplay = (props) => {
  const { username, email, password, cfmPswd } = props.data;

  return (
    <>
      <div className="display">
        <p>Entry Confirmation</p>
        <hr />
        <div className="container-label-data">
          <label className="display-label">Username: </label> 
          <label className="display-data"> {username} </label>
        </div>

        <div className="container-label-data">
          <label className="display-label">Email: </label> 
          <label className="display-data"> {email} </label>
        </div>

        <div className="container-label-data">
          <label className="display-label">Password: </label> 
          <label className="display-data"> {password} </label>
        </div>

        <div className="container-label-data">
          <label className="display-label">Password Confirmation: </label> 
          <label className="display-data"> {cfmPswd} </label>
        </div>
      </div>
    </>
  );
};

export default LoginDisplay;
