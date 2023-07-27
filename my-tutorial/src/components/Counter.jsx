import React, { useState } from "react";

const Counter = function () {
  const [count, setCounst] = useState(0);

  function increment() {
    setCounst(count + 1);
  }
  function decrement() {
    setCounst(count - 1);
  }
  return (
    <div>
      <h1>THIS IS COUNTER COMPONENTS</h1>
      <h1>The number is {count}</h1>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>
    </div>
  );
};

export default Counter;
