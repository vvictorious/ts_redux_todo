import React, { Fragment } from 'react';
import { AddNoteInput } from './components/AddNoteInput'
import { useSelector, useDispatch } from 'react-redux'
import { notesState } from './redux/notesReducer'

const App: React.FC = () => {

  const notes = useSelector<notesState, notesState['notes']>(state => state.notes)
  const dispatch = useDispatch()

  const addNote = (note:string) => {
    dispatch({
      type: 'ADD_NOTE',
      payload: note
    })
  }

  return (
    <Fragment>
      <AddNoteInput addNote={addNote} />
      <hr />
      <ul>
        {
          notes.map(note => (
            <li key={note}>
              {note}
            </li>
          ))
        }
      </ul>
    </Fragment>
  );
}

export default App;
