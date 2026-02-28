import React from 'react'
import { useState,useMemo } from 'react';

export default function UseMemo() {
  const [count, setCount] = useState(0)

  const result =useMemo(()=>{
    console.log("Calculation...........");
    return count*2;
  },[count])

  return (
    <>
    <h1>UseMemo Hook</h1>
    <h2>Count: {count}</h2>
    <h2>Memoized Value: {result}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
