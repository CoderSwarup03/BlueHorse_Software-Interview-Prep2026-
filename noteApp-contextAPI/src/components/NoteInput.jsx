import React, { useState } from 'react'
import { useNote } from '../context/NoteProvider'

const NoteInput = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const { addNote, notes } = useNote();
    const handleAddNote = () => {
        const existNotes = notes.find((text) => text.title.toLowerCase() === title.toLowerCase() && text.desc.toLowerCase() === desc.toLowerCase());
        if (existNotes) {
            return alert('Note already exist');
        }

        addNote(title, desc);
        console.log(title, desc)
        setTitle('');
        setDesc('');
    }
    return (
        <>
            <div className='flex flex-col gap-3'>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" className='px-3 py-2 rounded-md outline-none border-2 border-green-500 w-full' placeholder='Enter title here' />
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className='px-3 py-2 rounded-md outline-none border-2 border-green-500 w-full' placeholder='Enter description here...'></textarea>
                <button
                    onClick={() => handleAddNote()}
                    className='px-3 py-2 rounded-md bg-green-500 cursor-pointer'>Add</button>
            </div>
        </>
    )
}

export default NoteInput