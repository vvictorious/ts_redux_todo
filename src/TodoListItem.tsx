import React from 'react'

interface TodoListItemProps {
    todo: Todo;
} 

const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
    return (
        <li>
            <label style={{textDecoration: todo.complete ? "line-through" : "none"}}>
                <input type='checkbox' checked={todo.complete} /> 
                {todo.text}
            </label>    
        </li>
    )
}

export default TodoListItem