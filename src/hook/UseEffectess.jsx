import React from 'react'
import { useState, useEffect } from 'react'


export default function UseEffectess() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setData(json))
  }, [])
  return (
    <>
    <h1>use Effectess with API</h1>
    {data ? (
      <ul>
        {data.map(post => <li  key={post.id}>{post.title}</li>)}
      </ul>
    ) : (
      <p>Loading...</p>
    )}
    </>
  )
}
