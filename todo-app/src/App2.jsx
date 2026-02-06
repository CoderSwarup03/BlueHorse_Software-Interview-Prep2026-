import React, { useState } from 'react'

const App2 = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    console.log("clicked")
    if (task.trim() === '') {
      // alert("Enter Your Task");
      return;
    }
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("")
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] lg:w-[40%] h-[50%] border-2 border-[#222] rounded-md '>
      <h2 className='text-center text-4xl font-bold text-blue-600'>Todo App</h2>
      <div className='flex flex-row justify-center items-center gap-1 mt-2'>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='w-[70%] border-2 border-[#222] px-2 py-2 rounded-md' />
        <button
          onClick={addTodo}
          className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-2 rounded-md'>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className='flex flex-row justify-between gap-2 bg-gray-200 rounded-md w-[95%]'>
            <span>{todo.text}</span>
            <div className='flex gap-2'>
              <button
                onClick={() => toggleTodo(todo.id)}
              >{todo.completed ? "Undo" : "Completed"}</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default App2