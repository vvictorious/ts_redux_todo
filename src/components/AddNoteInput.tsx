import React, { useState, ChangeEvent } from 'react'

interface AddNoteInputProps {
    addNote: (note:string) => void
}

export const AddNoteInput:React.FC<AddNoteInputProps> = ({ addNote }) => {

    const [note, setNote] = useState('')

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }

    const handleBtnClick =  () => {
        addNote(note)
        setNote('')
    }

    return (
        <div>
            <input onChange={handleChange} type='text' value={note} placeholder='note' />
            <button onClick={handleBtnClick}>Add Note</button>
        </div>
    )
}
