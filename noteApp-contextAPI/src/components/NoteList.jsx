import React from 'react'
import NoteItem from './NoteItem'
import { useNote } from '../context/NoteProvider'

const NoteList = () => {
  const { notes } = useNote()
  return (
    <>
      {
        notes.length === 0 ? (
          <h2>Note is empty</h2>
        ) : (
          notes.map((item) => {
            return (
              <NoteItem key={item.id} item={item} />
            )
          })
        )
      }
    </>
  )
}

export default NoteList