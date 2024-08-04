import React from "react";
const Dice = ({ value }) => {
  let DicePic = `/src/assets/img/dice-${value}.png`;
  return <img src={DicePic} alt={`Dice ${value}`} className="dice" />;
};

export default Dice;
