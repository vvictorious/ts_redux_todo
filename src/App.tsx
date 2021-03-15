import React, { Fragment} from 'react'
import { AddNoteInput } from './components/NoteInput'
import { Note } from './components/Note'
import { useSelector } from 'react-redux'
import { NotesState } from './redux/notesReducer'

const App = () => {

  const notes = useSelector<NotesState, NotesState['notes']>(state => state.notes)
  console.log(notes)


  return (
    <Fragment>
      <h1>Todo List</h1>
      <AddNoteInput />
      <ul>
        {
          notes.map(note => (
            <Note key={note} note={note} />
          ))
        }
      </ul>
    </Fragment>
  )
}

export default App