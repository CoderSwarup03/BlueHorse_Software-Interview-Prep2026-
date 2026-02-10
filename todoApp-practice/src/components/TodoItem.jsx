import React, { useState } from 'react'
import { useTodo } from '../context/TodoProvider'
const TodoItem = ({ item }) => {
  const [editText, setEditText] = useState(item.title)
  const [isEdit, setIsEdit] = useState(false)
  const { deleteTodo, completedTodo, updateTodo } = useTodo();


  const handleEdit = () => {
    updateTodo(item.id, editText)
    setIsEdit(false)
  }

  return (
    <>
      <div className='flex justify-between items-center gap-3 mt-5'>
        <div className='w-full md:w-[70%] p-2'>
          {
            isEdit ? (
              <input type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className='px-2 py-2 outline-none border-2 border-green-500 rounded-md w-full'
              />
            ) : (
              <h4 className={`text-xl font-bold ${item.completed ? 'line-through' : ''}`}>{item.title}</h4>
            )
          }
        </div>
        <div className='flex items-center gap-3 border-2 border-green-500 text-xl font-bold'>
          {isEdit ? (
            <button
              onClick={() => handleEdit()}
              className='bg-green-500 text-black cursor-pointer p-2 rounded-md'>
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className='bg-green-500 text-black cursor-pointer p-2 rounded-md '
            >Edit</button>
          )}

          <button
            onClick={() => deleteTodo(item.id)}
            className='bg-red-500 text-black cursor-pointer p-2 rounded-md'>Delete</button>
          <button
            onClick={() => completedTodo(item.id)}
            className='bg-green-500 text-black cursor-pointer p-2 rounded-md'>Completed</button>
        </div>
      </div>
    </>
  )
}

export default TodoItem