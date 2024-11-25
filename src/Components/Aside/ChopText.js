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
        <button onClick={() => setHidden(false)} style={{color:"blue"}}> show more </button>
      ) : (
        <button onClick={() => setHidden(true)} style={{color:"red"}}> show less</button>
      )}
    </span>
  );

}

export default ChopText;