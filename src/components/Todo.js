import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
const Todo = ({ todo, id, setTodos, todos, checked }) => {
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
            setEdit(!edit)
      }
      return (
            edit ? (<form onSubmit={onSubmitHandler} className="todo todo__edit"><input type="text" value={todo} onChange={onChangeHandler} /><button className="save-btn">SAVE</button></form>) : <div className= {`todo ${checked ? 'checked' : ''}`} >
            
                  <li>{todo} {todo.checked}</li>
                  <span>
                  <button onClick = {checkedHandler}><FontAwesomeIcon className = "icon icon__check" icon={faCheck} size='2x' /></button>
                  <button onClick={deleteHandler}><FontAwesomeIcon className = "icon icon__trash" icon={faTrash} size='2x'/></button>
                        <button onClick={editHandler}><FontAwesomeIcon className = "icon icon__edit" icon={faEdit} size='2x'/></button> </span>            
      </div>
      )
}

export default Todo
