import React from 'react'
import UsecallbakClild from './UsecallbakClild';
import { useState,useCallback } from 'react';


export default function UseCallBack() {
  const [count, setCount] =useState(0)

 const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);


  return (
   <>
   <h1>UseCallBack Hook</h1>
   <h2>Count {count}</h2>
   <button onClick={()=>setCount(count+1)}>Increment</button>
    <UsecallbakClild handleClick={handleClick}/>
   </>
  )
}
