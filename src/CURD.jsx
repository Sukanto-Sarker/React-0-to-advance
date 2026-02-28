import React, { useEffect, useState } from "react";
import api from "./api";

export default function CRUD() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editid, setEditid] = useState(null);

  // ===============================
  // Fetch Todos (GET)
  // ===============================
  const fetchTodos = async () => {
    const res = await api.get("/");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // ===============================
  // Add Todo (POST)
  // ===============================
  const addTodo = async () => {
    if (input.trim() === "") {
      alert("Please enter a todo");
      return;
    }

    const res = await api.post("/", {
      title: input,
      completed: false,
    });

    setTodos([...todos, res.data]);
    setInput("");
  };

  // ===============================
  // Delete Todo (DELETE)
  // ===============================
  const deleteTodo = async (id) => {
    await api.delete(`/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // ===============================
  // Update Todo (PUT)
  // ===============================
  const updateTodo = async (id) => {
    const updatedTodo = todos.find(todo => todo.id === id);

    const res = await api.put(`/${id}`, {
      ...updatedTodo,
      title: input,
    });

    setTodos(
      todos.map(todo =>
        todo.id === id ? res.data : todo
      )
    );

    setEditid(null);
    setInput("");
  };

  // ===============================
  // Toggle Complete
  // ===============================
  const toggleCompleted = async (todo) => {
    const res = await api.put(`/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });

    setTodos(
      todos.map(t =>
        t.id === todo.id ? res.data : t
      )
    );
  };

  return (
    <>
      <h1>CRUD Operations</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
      />

      {editid ? (
        <button onClick={() => updateTodo(editid)}>
          Update
        </button>
      ) : (
        <button onClick={addTodo}>Add</button>
      )}

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo)}
            />

            <span
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                margin: "0 10px",
              }}
            >
              {todo.title}
            </span>

            <button
              onClick={() => {
                setEditid(todo.id);
                setInput(todo.title);
              }}
            >
              Edit
            </button>

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}