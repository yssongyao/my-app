import React from "react";
import { useState } from "react";

function ChopText (props) {

  const maxChars = 50;

  const [hidden, setHidden] = useState(true);


  if (props.text.length <= maxChars) {
    return (
      <span>{props.text}</span>
    );
  }

  return (
    <span>
      {hidden ? `${props.text.substr(0, maxChars).trim()} ...` : props.text}
      {hidden ? (
        <a onClick={() => setHidden(false)} style={{color:"yellow"}}> show more </a>
      ) : (
        <a onClick={() => setHidden(true)} style={{color:"red"}}> show less</a>
      )}
    </span>
  );

}

export default ChopText;