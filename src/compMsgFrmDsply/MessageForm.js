//MsgFrmDsply: Lifting State


import React, { useState } from "react";

const MessageForm = (props) => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      props.sendMsg(msg);
    //console.log(`form submit: ${msg}`);
      setMsg("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter a Message:</h3>
      <input
        type="text"
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
      ></input>
      <button type="submit" >
        Send
      </button>
    </form>
  );
};
export default MessageForm;
