import React from 'react';
import TodoListItem from './TodoListItem'

const todos: Array<Todo> = [
  {
    text: 'Practice ts just a little bit longer',
    complete: true   
  }
]

const App: React.FC = () => {

  return (
    <div>
      <TodoListItem todo={todos[0]} />
    </div>
  );
}

export default App;
