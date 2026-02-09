import React, { useState } from 'react'
import { useTodo } from '../context/TodoProvider'

const TodoInput = () => {
  const [input, setInput] = useState('')
  const { addTodo } = useTodo();

  const handleAdd = () => {
    addTodo(input)
    console.log(input);
    setInput('')
  }
  return (
    <>
      <h4 className='text-3xl font-bold text-green-500 text-center'>TodoApp Practice</h4>
      <div className='flex flex-col md:flex-row items-center gap-3 mt-5'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text" className='w-full md:w-[75%] outline-none border border-gray-300 p-2 rounded-md' />
        <button
          onClick={() => handleAdd()}
          className='w-full md:w-[25%] bg-green-500 text-black cursor-pointer p-2 rounded-md'>Add</button>
      </div>
    </>
  )
}

export default TodoInput