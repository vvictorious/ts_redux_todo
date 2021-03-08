import React, { Fragment } from 'react';
import { NewNoteInput } from './NewNoteInput'

const App: React.FC = () => {

  return (
    <Fragment>      
      <NewNoteInput addNote={alert} />
      <hr />
      <ul>
        <li>Some note</li>
      </ul>
    </Fragment>
  );
}

export default App;
