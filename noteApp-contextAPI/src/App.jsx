import React from 'react'
import NoteInput from './components/NoteInput'
import NoteList from './components/NoteList'

const App = () => {
  return (
    <>
      <div className='max-w-[85%] mx-auto'>
        <h2 className='text-center text-green-500 mt-5 text-2xl font-bold'>NoteApplication'26</h2>
        <NoteInput />
        <NoteList />
      </div>
    </>
  )
}

export default App