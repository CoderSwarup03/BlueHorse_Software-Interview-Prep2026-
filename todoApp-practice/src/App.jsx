import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <>
      <div className='max-w-[85%] mx-auto'>
        <TodoInput />
        <TodoList />
      </div>
    </>
  )
}

export default App