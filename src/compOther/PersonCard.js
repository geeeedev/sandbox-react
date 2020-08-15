//PersonCard: Props - destructuring


import React from "react";

function PersonCard({ Fn, Ln, age, hairColor }) {
  // function PersonCard(props) {
  //   const { Fn, Ln, age, hairColor } = props;
  return (
    <>
      <h1>
        {Ln}, {Fn}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </>
  );
}

export default PersonCard;
