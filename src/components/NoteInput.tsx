import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

// interface NotesProps {
//     addNote: (note:string) => void
// }

export const AddNoteInput:React.FC = () => {

    const [note, setNote] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }

    const addNoteBtnClick = () => {
        dispatch({
            type: "ADD_NOTE",
            payload: note
        })
        setNote('')
    }

    return (
        <div>
            <input type='text' value={note} onChange={handleChange} />
            <button onClick={addNoteBtnClick}>Add Note</button>
        </div>
    )
}
