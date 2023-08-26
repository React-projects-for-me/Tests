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
  const operators = [
    { operator: "+" },
    { operator: "-" },
    { operator: "*" },
    { operator: "/" },
    { operator: "C" },
    { operator: "=" },
  ];
  const [number, setNumber] = useState("");

  const numberOperation = (element) => {
    console.log(element.value);
    console.log(element);

    if (element.value === "C") {
      setNumber("");
    } else if (element.value === "=") {
      console.log(number);
      setNumber(eval(number));
    } else {
      setNumber(number + element.value);
    }
  };

  return (
    <div className="wraper-calculator">
      <ShowNumbers number={number} />
      <div className="wraper-operators">
        {operators.map((element, index) => (
          <NumberOperator
            key={index}
            value={element.operator}
            numberOperation={numberOperation}
          />
        ))}
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
