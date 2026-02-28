import React from "react";
import { useFetch } from "./useFetch";

export default function Posts() {
  const { data, loading, error } =
    useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h1>Posts List</h1>

      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}