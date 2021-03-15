import React from 'react'
import { useDispatch } from 'react-redux'

interface NoteProps {
    note: string
}

export const Note:React.FC<NoteProps> = ({ note }) => {

    const dispatch = useDispatch()    

    const deleteNote = () => {
        dispatch({
            type: "DELETE_NOTE",
            payload: note
        })
    }

    return (
        <li>
            {note}
            <button onClick={deleteNote}>Delete Note</button>            
        </li>
    )
}
