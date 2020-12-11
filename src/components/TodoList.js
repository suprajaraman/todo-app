import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import Form from '../components/Form'

const TodoList = () => {
      const data = JSON.parse(localStorage.getItem('todos')) || []
      const [todos, setTodos] = useState(data)

      useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])
      
      return (
            <main>
                  <Form todos={todos} setTodos={setTodos} />
                  <ul>
                        {todos.map((todo) => (
                             
                              <Todo key={todo.id} todo={todo.task} id={todo.id} checked={todo.checked} setTodos={setTodos} todos={todos}/>
                              
                        ))}
                        </ul>
            </main>
      )
}

export default TodoList
