import React from "react";

const LoginDisplay = (props) => {
    const {username, email, password, cfmPswd} = props.data;

    return (
        <div>
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
