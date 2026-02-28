import React from "react";

import { useCounter } from "./useCounter";

export default function Counterr() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}