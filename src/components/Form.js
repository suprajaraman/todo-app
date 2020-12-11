import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

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
            <form onSubmit={onSubmitHandler}>
                  <input type="text" onChange={onChangeHandler} value={newTodo}/>
                  <button>check</button>
            </form>
      )
}

export default FORM
