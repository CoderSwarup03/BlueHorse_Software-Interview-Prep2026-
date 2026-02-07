import React, { useState } from 'react'
import { useNote } from '../context/NoteProvider'

const NoteItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editDesc, setEditDesc] = useState(item.desc);
  const { deleteNotes, updateNotes } = useNote();

  const handleUpdate = () => {
    updateNotes(item.id, editTitle, editDesc);
    setIsOpen(false);
  }

  return (
    <>
      <div className='flex justify-between gap-3 mt-5'>
        <div className='w-[70%] flex flex-col gap-3'>
          {isOpen ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                type="text" className='px-3 py-2 rounded-md outline-none border-2 border-green-500 w-full' />
              <textarea
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
                className='px-3 py-2 rounded-md outline-none border-2 border-green-500 w-full' placeholder='Enter description here...'></textarea>
              {/* <button
                onClick={() => handleUpdate()}
                className='px-3 py-2 rounded-md bg-green-500 cursor-pointer'>Update</button> */}
            </>
          ) : (
            <>
              <h3 className='text-xl font-fold'>{item.title}</h3>
              <span className='text-lg font-semibold'>{item.desc}</span>
            </>
          )}
        </div>
        <div className='w-[30%] flex flex-col gap-3'>
          {isOpen ? (
            <button
              onClick={() => handleUpdate()}
              className='px-3 py-2 rounded-md bg-green-500 cursor-pointer'>Done</button>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className='px-3 py-2 bg-green-500 cursor-pointer rounded-md'>Update</button>
          )}

          <button
            onClick={() => deleteNotes(item.id)}
            className='px-3 py-2 bg-green-500 cursor-pointer rounded-md'>Delete</button>
        </div>
      </div>
    </>
  )
}

export default NoteItem