import React from "react";
import classes from "../NumberButton/NumberButton.module.css";

const NumberButton = ({ value ,numberOperation}) => {

  return (
    <button
      className={classes.numberButton}
      onClick={() => numberOperation({value})}
    >
      {value}
    </button>
  );
}

export default NumberButton;
