import React, {useState,useEffect } from 'react'



export default function UseEffect() {
const [count, setCount] = useState(0)

useEffect(() => {
  console.log('useEffect called')
}, [count])

  return (
    <>
    <h1>UseEffect Hook</h1>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    
    </>
  )
}
