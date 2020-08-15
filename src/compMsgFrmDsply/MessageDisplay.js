//MsgFrmDsply: Lifting State


import React from "react";
// import React, { useState } from "react";

const MessageDisplay = (props) => {
  //   const [msges, setMsges] = useState("");
  //   setMsges(props.message);
  //   Error: Too many re-renders. React limits the number of
  //   renders to prevent an infinite loop.

  return (
    <>
      {props.message ? <h4>New Message Sent:</h4> : ""}
      <p>{props.message}</p>
    </>
  );
};
export default MessageDisplay;
