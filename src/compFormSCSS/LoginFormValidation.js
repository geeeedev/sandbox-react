import React, { useState } from "react";
import LoginDisplay from "./LoginDisplay";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfmPswd, setCfmPswd] = useState("");

  const newLogin = {
    username,
    email,
    password,
    cfmPswd,
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cfmPswd">Confirmed Password:</label>
          <input
            id="cfmPswd"
            name="cfmPswd"
            type="password"
            onChange={(e) => setCfmPswd(e.target.value)}
          />
        </div>
      </form>

      <LoginDisplay data={newLogin} />
    </> 
  );
};

export default LoginForm;
