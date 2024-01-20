import React, { useState, useEffect } from "react";
import AppInput from "./components/AppInput";
import { FaCirclePlus } from "react-icons/fa6";
import Items from "./components/Items";

function App() {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (addTask.trim() !== "") {
      setTasks([
        ...tasks,
        { name: addTask, id: Math.floor(Math.random() * 100) },
      ]);
      setAddTask("");
    }
  };

  const handleChange = (e) => {
    setAddTask(e.target.value);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  });

  return (
    <div className="container h-75">
      <h1 className="d-flex justify-content-center mt-3 text-secondary">
        My Todo's
      </h1>
      <form
        className="d-flex justify-content-center mt-3 align-items-center"
        onSubmit={submitHandler}
      >
        <AppInput
          className="w-50 rounded-pill p-2 fs-4 px-4"
          placeholder="Enter the task "
          onChange={handleChange}
          value={addTask}
        />
        <button className="btn p-0 m-2">
          <FaCirclePlus className="fs-3" />
        </button>
      </form>
      <ol className="w-75 text-center container mt-5">
        {tasks.map((task, index) => (
          <Items
            key={index}
            name={task.name}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ol>
    </div>
  );
}

export default App;
