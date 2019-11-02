import React, { useState } from "react";

function Button(props) {
  const [text, setText] = useState("");

  function handleClick() {
    setText("PROCEED TO CHECKOUT");
  }

  return <button onClick={handleClick}>{text || props.text}</button>;
}

export default Button;
