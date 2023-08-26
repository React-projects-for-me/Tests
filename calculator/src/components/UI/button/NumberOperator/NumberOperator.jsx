import React from "react";
import classes from '../NumberOperator/NumberOperator.module.css'

const NumberOperator = ({value,numberOperation}) => {
  return (
    <button
    className={classes.numberOperator}
    onClick={() => numberOperation({value})}
    >
        {value}
    </button>
  );
};

export default NumberOperator;
