import ShowNumbers from "./showNumbers";
import { useState } from "react";
import NumberButton from "./UI/button/NumberButton/NumberButton";
import NumberOperator from "./UI/button/NumberOperator/NumberOperator";
import "./styles/formCalculator.css";

function FormCalculator() {
  const numberList = [
    { number: "1" },
    { number: "2" },
    { number: "3" },
    { number: "4" },
    { number: "5" },
    { number: "6" },
    { number: "7" },
    { number: "8" },
    { number: "9" },
    { number: "0" },
  ];
  const operators = ["+", "-", "*", "/"];
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const numberOperation = (element) => {
    console.log(element.value);
    console.log(operators);
    if (
      (operators.includes(element.value) && number === "") ||
      (operators.includes(element.value) &&
        operators.includes(number.toString().slice(-1)))
    ) {
      console.log(operators);
      return;
    }
    setNumber(number + element.value);
    if (!operators.includes(element.value)) {
      setResult(eval(number + element.value).toString( ))
    }
  };

  return (
    <div className="wraper-calculator">
      <ShowNumbers number={result} />
      <div className="wraper-operators">
        {operators.map((element, index) => (
          <NumberOperator
            key={index}
            value={element}
            numberOperation={numberOperation}
          />
        ))}
        <button className="numberOperator" onClick={() => setNumber("")}>
          C
        </button>
        <button
          className="numberOperator"
          onClick={() => {
            setNumber(eval(number));
          }}
        >
          =
        </button>
      </div>
      <div className="wrapper-numbers">
        {numberList.map((element) => (
          <NumberButton
            key={element.number}
            value={element.number}
            numberOperation={numberOperation}
          />
        ))}
      </div>
    </div>
  );
}

export default FormCalculator;
