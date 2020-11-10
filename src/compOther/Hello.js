//Hello: React/JSX-very basic


import React from "react";

function Hello() {
  return (
    <>
      <h1>Hello Dojo!</h1>
      <ul>
        <span style={{fontWeight:"bold",color:"dark grey"}}> Things I need to do:</span>
        {/* <li>Start Freezer App</li>
        <li>Quick through React chapter</li>
        <li>Do dishes</li>
        <li>Blow up pool</li> */}
        <li className='text-success'>Start Google Map API</li>
        <li style={{color: "red"}}>Start Portfoli with JSON Feed</li>
        <li className="text-info">Test Json Feed HERE</li>
        <li className='text-primary'>Clean and Pack Away Pool</li>
        <li></li>
      </ul>
    </>
  );
}

export default Hello;
