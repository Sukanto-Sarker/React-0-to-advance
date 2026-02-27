import { useContext } from "react";
import { CounterContext } from "./CounterContex";

export function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used inside CounterProvider");
  }

  return context;
}