import React, { useState, ChangeEvent, FormEvent } from 'react'

interface AddTodoFormProps {
    addTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {

    const [newTodo, setNewTodo] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

    }

    return (
        <form>
            <input type='text' value={newTodo} onChange={handleChange} />    
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default AddTodoForm