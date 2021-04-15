import React from "react";
import "./css/Login.css"    //importing post-scss css

const LoginDisplay = (props) => {
    const {username, email, password, cfmPswd} = props.data;

    return (
        <div className="display">
          <hr />
          <p>Entry Confirmation</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Password Confirmation: {cfmPswd}</p>
        </div>
    );
    
};

export default LoginDisplay;
