import React from "react";
import "./css/Login.css"

const LoginDisplay = (props) => {
    const {username, email, password, cfmPswd} = props.data;

    return (
        <div className="display">
          <p>Entry Confirmation</p>
          <hr />
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Password Confirmation: {cfmPswd}</p>
        </div>
    );
    
};

export default LoginDisplay;
