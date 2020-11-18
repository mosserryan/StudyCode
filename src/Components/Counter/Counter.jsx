import React, { useState } from "react";
import UpdateCounter from "./updateCounter";

function Counter() {
  const [buttonText, setText] = useState(0);
  const [isAbove, setBool] = useState(false);

  let counter = () => {
    if (isAbove === true) {
      setText(buttonText - 1);
      if (buttonText <= 1) {
        setBool(false);
      }
    } else if (isAbove === false) {
      setText(buttonText + 1);
      if (buttonText >= 9) {
        setBool(true);
      }
    }
  };

  return (
    <UpdateCounter
      isAbove={isAbove}
      buttonText={buttonText}
      counter={counter}
    />
  );
}

export default Counter;
