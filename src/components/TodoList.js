import React, { useState } from 'react'
import Todo from './Todo'
import Form from '../components/Form'

const TodoList = () => {
      const [todos, setTodos] = useState([])
      return (
            <div>
                  
                  <Form todos={todos} setTodos={setTodos} />
                  <ul>
                        {todos.map((todo) => (
                             
                              <Todo key={todo.id} todo={todo.task} id={todo.id} checked={todo.checked} setTodos={setTodos} todos={todos}/>
                              
                        ))}
                        </ul>
            </div>
      )
}

export default TodoList
