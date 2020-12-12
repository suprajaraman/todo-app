import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const FORM = ({todos, setTodos}) => {
      const [newTodo, setNewTodo] = useState('')
      const [inputError, setInputError] = useState(false)

      const onChangeHandler = (e) => {
            setInputError(false)
            setNewTodo(e.target.value) 
      }
      const onSubmitHandler = (e) => {
            e.preventDefault()
            if (newTodo.trim() === '') {
                  setInputError(true)
            }
            else {
                  setTodos([...todos, { task: newTodo, id: uuid(), checked: false }])
                  setNewTodo('')
            }
      }
      return (
            <form onSubmit={onSubmitHandler} className="new-todo-form">
                  <label>Add a new task</label>
                  <input type="text" onChange={onChangeHandler} value={newTodo} className = {`${inputError ? 'error' : ''}`}/>
                  <button><FontAwesomeIcon className="icon icon__add" icon={faPlus} size='2x' /></button>
                  {inputError ? <div class="error--msg">Please enter a task</div> : ''}
            </form>
      )
}

export default FORM
