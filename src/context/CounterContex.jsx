import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  const name = "Counter App";

  return (
    <CounterContext.Provider
      value={{ count, increment, decrement, reset, name }}
    >
      {children}
    </CounterContext.Provider>
  );
}