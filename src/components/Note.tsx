import React, { useState,ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

interface NoteProps {
    note: string
}

export const Note:React.FC<NoteProps> = ({ note }) => {

    const [edit, setEdit] = useState(false)
    const [newNote, setNewNote] = useState(note)

    const dispatch = useDispatch()    

    const deleteNote = () => {
        dispatch({
            type: "DELETE_NOTE",
            payload: note
        })
    }

    const editNote = () => {
        setEdit(true)
    }

    const dispatchEditHandler = () => {
        dispatch({
            type: "EDIT_NOTE",
            payload: newNote
        })
        setEdit(false)
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewNote(e.target.value)
    }

    if (edit) {
        return (
            <li>
                <input type='text' value={newNote} onChange={handleChange} />
                <button onClick={dispatchEditHandler}>Submit Edit</button>
            </li>
        )
    } else {
        return (
            <li>
                {newNote}
                <button onClick={deleteNote}>Delete Note</button>       
                <button onClick={editNote}>Edit Note</button>     
            </li>
        )
    }


}
