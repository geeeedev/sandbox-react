import React, { useState } from "react";
import LoginDisplay from "./LoginDisplay";

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
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            id="username"
            name="username"
            type="text"
            // onChange={(e)=>setUsername(e.target.value)}
            onChange={updateUsername}
          />
          {errUsername ? <span>{errUsername}</span> : ""}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) => updateEmail(e)}
          />
          {errEmail ? <span>{errEmail}</span> : ""}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={updatePassword}
          />
          {errPassword ? <span>{errPassword}</span> : ""}
        </div>
        <div>
          <label htmlFor="cfmPswd">Confirm Password:</label>
          <input
            id="cfmPswd"
            name="cfmPswd"
            type="password"
            onChange={updateCfmPswd}
          />
          {errCfmPswd ? <span>{errCfmPswd}</span> : ""}
        </div>
      </form>

      <LoginDisplay data={newLogin} />
    </>
  );
};

export default LoginForm;
