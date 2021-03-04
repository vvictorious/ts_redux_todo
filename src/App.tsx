import React, { useState } from 'react';
import TodoListItem from './TodoListItem'

const initialTodos: Array<Todo> = [
  {
    text: 'Practice ts just a little bit longer',
    complete: false   
  }
]

const App: React.FC = () => {

  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = (selectedTodo:Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  return (
    <div>
      <TodoListItem todo={initialTodos[0]} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
