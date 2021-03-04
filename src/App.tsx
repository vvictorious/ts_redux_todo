import React, { useState } from 'react';
import TodoList from './TodoList'

const initialTodos: Array<Todo> = [
  {
    text: 'Practice ts just a little bit longer',
    complete: false   
  }
]

const App: React.FC = () => {

  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      } 
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
