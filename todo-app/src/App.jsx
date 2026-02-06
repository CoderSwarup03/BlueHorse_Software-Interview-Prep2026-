import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
            className="border p-2 rounded mb-2"
          />
          <button
            className="text-3xl font-semibold rounded-md bg-green-500 text-white px-4 py-2 mb-4"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center mb-2"
            >
              <span
                className={todo.completed ? "line-through text-gray-400" : ""}
              >{todo.text}</span>
              <div className="flex gap-2">
                <button
                className="cursor-pointer bg-green-500 hover:bg-green-600 px-2 py-2 rounded-md text-semibold"
                  onClick={() => toggleTodo(todo.id)}
                >{todo.completed ? "Undo" : "Complete"}</button>
                <button
                  className="cursor-pointer bg-red-500 hover:bg-red-600 px-2 py-2 rounded-md text-semibold"
                  onClick={() => deleteTodo(todo.id)}
                >Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;