import React, { createContext, useContext, useEffect, useState } from 'react'

const noteContext = createContext();
export const useNote = () => useContext(noteContext);

const NoteProvider = ({ children }) => {
    // const [notes, setNotes] = useState([]);
    
    const [notes, setNotes] = useState(() => {
        const storeNotes = localStorage.getItem('notes');
        return storeNotes ? JSON.parse(storeNotes) : [];
    })

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])


    const addNote = (title, desc) => {
        const newNote = { id: Date.now(), title, desc };
        setNotes([...notes, newNote]);
    }

    const deleteNotes = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    }

    const updateNotes = (id, title, desc) => {
        setNotes(notes.map((notes) => notes.id === id ? { ...notes, title, desc } : notes))
    }

    return (
        <>
            <noteContext.Provider value={{ addNote, notes, deleteNotes, updateNotes }}>
                {children}
            </noteContext.Provider>
        </>
    )
}


export default NoteProvider