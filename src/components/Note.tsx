import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

interface NoteProps {
    note: string
}

export const Note:React.FC<NoteProps> = ({ note }) => {

    const [edit, setEdit] = useState(false)

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
        console.log('yo')
    }

    if (edit) {
        return (
            <li>
                <input type='text' value={note} />
                <button onClick={dispatchEditHandler}>Submit Edit</button>
            </li>
        )
    } else {
        return (
            <li>
            {note}
            <button onClick={deleteNote}>Delete Note</button>       
            <button onClick={editNote}>Edit Note</button>     
            </li>
        )
    }


}
