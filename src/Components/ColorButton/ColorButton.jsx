import React, { useState } from "react";
import UpdateColorButton from "./updateColorButton";

function ColorButton() {
  const [number, randomNumber] = useState(null);
  const [color, randomColor] = useState("grey");

  let randomNumberGenerator = () => {
    return Math.floor(Math.random() * 256);
  };

  let randomized = () => {
    let results = `${randomNumberGenerator()}, ${randomNumberGenerator()}, ${randomNumberGenerator()}`;
    randomNumber(results);
    randomColor(`rgb(${results})`);
  };

  return (
    <UpdateColorButton color={color} number={number} randomized={randomized} />
  );
}

export default ColorButton;
