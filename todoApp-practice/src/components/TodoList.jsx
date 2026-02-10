import React from 'react'
import { useTodo } from '../context/TodoProvider'
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <>
      {
        todos.length === 0 ? (
          <h3>Todo is empty</h3>
        ) : (
          todos.map((item) => {
            return (
              <TodoItem key={item.id} item={item} />
            )
          })
        )
      }

    </>
  )
}

export default TodoList