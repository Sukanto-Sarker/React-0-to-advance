import { useState } from "react";

export default function TodoApp() {
  const [taskName, setTaskname] = useState("");
  const [tasks, setTask] = useState(["wakeUp", "exercise", "meditate"]);
  const [editIndex, setEditIndex] = useState(false);

  function handleSubmit() {
    if (taskName.trim() === "") {
      alert("Please enter a valid task name");
      return;
    }

    if (editIndex !== false) {
      
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = taskName;
      setTask(updatedTasks);
      setEditIndex(false);
    } else {
      
      setTask([...tasks, taskName]);
    }

    setTaskname("");
  }

  function deleteHandler(index) {
    const newTaskList = tasks.filter((_, idx) => idx !== index);
    setTask(newTaskList);

    
    if (editIndex === index) {
      setEditIndex(false);
      setTaskname("");
    }
  }

  function editHandler(index) {
    setEditIndex(index);
    setTaskname(tasks[index]);
  }

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-3 text-amber-700">
        TODO APP
      </h1>

      <div className="flex justify-center mt-4 gap-2">
        <input
          className="border px-3 py-2 rounded w-64"
          type="text"
          placeholder="Enter Your Task"
          value={taskName}
          onChange={(e) => setTaskname(e.target.value)}
        />

        <button
          className="bg-amber-600 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          {editIndex !== false ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div className="bg-amber-50 mt-4 p-4 rounded w-full max-w-md mx-auto border-2 border-amber-300">
        <h2 className="text-xl font-semibold text-center">Tasks:</h2>

        <ul className="mt-2 text-center">
          {tasks.map((task, index) => (
            <li key={index} className="border-b py-2 font-bold">
              {task}

              <button
                className="ml-2 border-2 px-2 bg-amber-800 text-amber-50"
                onClick={() => editHandler(index)}
              >
                Edit
              </button>

              <button
                className="ml-2 border-2 px-2 bg-red-700 text-amber-50"
                onClick={() => deleteHandler(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
