import React, { useReducer } from 'react'

const initialState={
    count:0,
  }
function reducer(state,action){
  switch(action.type){
    case "INCREMENT":
      return{...state,count:state.count+1}
    case "DECREMENT":
      return{...state,count:state.count-1}
    case "RESET":
      return{...state,count:0}
  }}

export default function ReducerHook() {
 
  const [state,dispatch]=useReducer(reducer,initialState);

  

  return (
    <>
    <h1 className="text-3xl font-bold text-center">Reducer Hook</h1>
    <h2>Count {state.count}</h2>
    <button className='bg-blue-500 text-white p-2 rounded m-2' onClick={()=> dispatch({ type :"INCREMENT"})}>INCREMENT</button>
    <button className='bg-red-500 text-white p-2 rounded m-2' onClick={()=> dispatch({ type :"DECREMENT"})}>DECREMENT</button>
    <button className='bg-green-500 text-white p-2 rounded m-2' onClick={()=> dispatch({ type :"RESET"})}>RESET</button>
    </>
  )
}
