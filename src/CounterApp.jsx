import { useState } from 'react'
export default function CounterApp() {
  const[count,setCount]=useState(0)

function incremental() {
  setCount(count+1)
} 
function decremental() {
  setCount(count-1)
}

function reset() {
  setCount(0)
}
  return (
  <>
  <div className="mt-10">
  <h1 className="text-center text-blue-500 text-4xl font-bold">
    Counter App
  </h1>

  <div className="flex flex-col items-center gap-6 mt-6">
  
    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold">
      {count}
    </div>

 
    <div className="flex gap-4">
      <button onClick={incremental} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded">
        Increment +
      </button>

      <button onClick={decremental} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded">
        Decrement -
      </button>
      <button onClick={reset} className="bg-green-500 hover:bg-blue-600 text-white px-5 py-2 rounded">
        Reset 0
      </button>
    </div>
  </div>
</div>

  </>
    
  )
}
