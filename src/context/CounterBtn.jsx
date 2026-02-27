import React from 'react'
import { useCounter } from './useCounter';
export default function CounterBtn() {

  const { increment, decrement, reset } = useCounter();
  return (
    <>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decremeemnt</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}
