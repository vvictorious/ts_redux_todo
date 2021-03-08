import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NewNoteInput } from './NewNoteInput'
import { NotesState } from './notesReducer'

const App: React.FC = () => {

  const notes = useSelector<NotesState, NotesState["notes"]>( (state) => state.notes)
  const dispatch = useDispatch()

  const addNote = (note:string) => {
    dispatch({
      type: "ADD_NOTE",
      payload: note
    })
  }

  return (
    <Fragment>      
      <NewNoteInput addNote={addNote} />
      <hr />
      <ul>
          {notes.map(note => (
            <li key={note}>{note}</li>
          ))}
      </ul>
    </Fragment>
  );
}

export default App;
