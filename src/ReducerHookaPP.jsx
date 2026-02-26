import React, { useReducer }  from 'react'
import { useState } from 'react'  
export default function ReducerHookaPP() {
  const [text, setText] =useState('')
  const [editId, seteditId] =useState(null)
  const [tasks, dispatch] = useReducer(todoReducer,[]);


  const submit =()=>{
    if(!text) return;
    if(editId){
      dispatch({type:"EDIT_TASK", payload:{id:editId, text}})
      seteditId(null)
    }else{
      dispatch({type:"ADD_TASK", payload:{id:Date.now(), text}})
    }
    setText('');
  };
  function todoReducer(state, action){
    switch(action.type){
      case "ADD_TASK":
        return [...state, action.payload];
      case "DELETE_TASK":
        return state.filter(task => task.id !== action.payload);
      case "EDIT_TASK":
        return state.map(task => task.id === action.payload.id ? {...task, text:action.payload.text} : task);
      default:
        return state;
    }
  }
  return (
    <>
    <h1 className="text-3xl font-bold text-center">Reducer Hook App with todo App</h1>
    <input type="text" placeholder='Enter your task' value={text} onChange={e=> setText(e.target.value)} />
    <button onClick={submit} className='bg-blue-500 text-white p-2 rounded m-2'>{editId?"Save":"Add"}</button>
     
     <ul>
     {tasks.map(task => <li key={task.id}>{task.text}
      <button onClick={()=>{setText(task.text);seteditId(task.id)}} className='bg-green-500 text-white p-1 rounded m-1'>Edit</button>
      <button onClick={()=>dispatch({type:"DELETE_TASK", payload:task.id})} className='bg-red-500 text-white p-1 rounded m-1'>Delete</button>
     </li>)}
     </ul>
  
    </>
  )
}
