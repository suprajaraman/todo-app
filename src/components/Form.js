import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const FORM = ({todos, setTodos}) => {
      const [newTodo, setNewTodo] = useState('')
      const onChangeHandler = (e) => {
            setNewTodo(e.target.value) 
      }
      const onSubmitHandler = (e) => {
            e.preventDefault()
            console.log(newTodo)
            setTodos([...todos, { task: newTodo, id: uuid(), checked: false }])
            setNewTodo('')
      }
      return (
            <form onSubmit={onSubmitHandler} className="new-todo-form">
                  <label>Add a new task</label>
                  <input type="text" onChange={onChangeHandler} value={newTodo}/>
                  <button><FontAwesomeIcon className="icon icon__add" icon={faPlus} size='2x'/></button>
            </form>
      )
}

export default FORM
