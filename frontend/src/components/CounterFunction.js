import React, { useState } from "react";

function CounterFunction() {
  let [number, setNumber] = useState(0);

  function Increment() {
    setNumber(number++);
  }
  return (
    <div>
      <h3>Functional component</h3>
      <h2>Counter={number}</h2>
      <button onClick={(e) => Increment()}>Increment=</button>
    </div>
  );
}
export default CounterFunction;
