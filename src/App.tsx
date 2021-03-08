import React, { Fragment } from 'react';

const App: React.FC = () => {


  return (
    <Fragment>
      <input type='text' name='note' placeholder='Note' />
      <button>Add Note</button>
    </Fragment>
  );
}

export default App;
