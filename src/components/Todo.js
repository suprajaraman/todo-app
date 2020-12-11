import React, {useState} from 'react'

const Todo = ({ todo, id, setTodos, todos }) => {
      const [edit, setEdit] = useState(false)
      const checkedHandler = () => {
            setTodos(todos.map((todo) => {
                  if (todo.id === id) {
                        return {...todo, checked: !todo.checked}
                  }
                  return todo
      }))
      }
      const deleteHandler = () => {
            setTodos(todos.filter((todo) => (
                  todo.id !== id
            )))
            console.log(todos)
            console.log(id)
      }
      const editHandler = () => {
            setEdit(!edit)
      }
      const onChangeHandler = (e) => {
            setTodos(todos.map((todo) => {
                  if (todo.id === id) {
                        return { ...todo, task: e.target.value }
                  }
                  return todo
            }))
      }
      const onSubmitHandler = (e) => {
            e.preventDefault()
            console.log("submitted")
            setEdit(!edit)
      }
      return (
            edit ? (<form onSubmit = {onSubmitHandler}><input type="text" value={todo} onChange={onChangeHandler}/><button>Save</button></form>) : <>
            <li>{todo}</li>
            <button onClick = {checkedHandler}>CHECK</button>
            <button onClick={deleteHandler}>DELETE</button>
            <button onClick = {editHandler}>Edit</button>      
      </>
      )
}

export default Todo
