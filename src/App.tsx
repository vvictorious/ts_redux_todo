import React, { Fragment } from 'react';
import { AddNoteInput } from './components/AddNoteInput'

const App: React.FC = () => {


  return (
    <Fragment>
      <AddNoteInput addNote={alert} />
      <hr />
      <ul>
        <li>
          note
        </li>
      </ul>
    </Fragment>
  );
}

export default App;
