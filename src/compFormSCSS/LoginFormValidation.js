import React, { useState } from "react";
import LoginDisplay from "./LoginDisplay";
import "./css/Login.css"; //importing post-scss css

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfmPswd, setCfmPswd] = useState("");

  const [errUsername, setErrUsername] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCfmPswd, setErrCfmPswd] = useState("");

  const newLogin = {
    username,
    email,
    password,
    cfmPswd,
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 3) {
      setErrUsername("Username must be at least 3 characters.");
    } else {
      setErrUsername("");
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@")) {
      setErrEmail("Email must be in email format.");
    } else {
      setErrEmail("");
    }
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setErrPassword("Password must be at least 8 characters.");
    } else {
      setErrPassword("");
    }
  };

  const updateCfmPswd = (e) => {
    setCfmPswd(e.target.value);
    if (e.target.value !== password) {
      setErrCfmPswd("Password Confirmation must match Password.");
    } else {
      setErrCfmPswd("");
    }
  };

  return (
    <>
      <form>
        <div className="flexSideBySide">
          <div className="flexRowLabel">
            <label htmlFor="username">User Name: </label>
            <label htmlFor="email">Email: </label>
            <label htmlFor="password">Password: </label>
            <label htmlFor="cfmPswd">Confirm Password: </label>
          </div>
          <div className="flexRowInput">
            <input
              id="username"
              name="username"
              type="text"
              // onChange={(e)=>setUsername(e.target.value)}
              onChange={updateUsername}
              className="inputField"
            />
            {errUsername ? <p className="errWarning">{errUsername}</p> : ""}
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => updateEmail(e)}
              className="inputField"
            />
            {errEmail ? <p className="errWarning">{errEmail}</p> : ""}
            <input
              id="password"
              name="password"
              type="password"
              onChange={updatePassword}
              className="inputField"
            />
            {errPassword ? <p className="errWarning">{errPassword}</p> : ""}
            <input
              id="cfmPswd"
              name="cfmPswd"
              type="password"
              onChange={updateCfmPswd}
              className="inputField"
            />
            {errCfmPswd ? <p className="errWarning">{errCfmPswd}</p> : ""}
          </div>
        </div>
      </form>

      <LoginDisplay data={newLogin} />
    </>
  );
};

export default LoginForm;
