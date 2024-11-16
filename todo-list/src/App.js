import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
function App() {
  const [todo, updateTodo] = useState([]);

  function deleteTodo(idx){
    let newTodo = todo.filter((ele,index)=>{
      return index !== idx
    })
    updateTodo(newTodo)
  }
  return (
    <>
      <div className="container">
        <h1 className='text-center mt-3 text-dark'>Todo List Application</h1>
        <div className='input-list'>
          <input className="form-control h-2" type="text" placeholder='Enter your Task' id="task" />
          <button className="btn btn-primary" type='submit' onClick={() => {
            let task = document.getElementById("task");
            if (task.value === "") {
              alert("Please Enter Task Name")
            }
            else {
              let nextId = 1;
              updateTodo([...todo,{id: nextId++, name:task.value}])
            }
            setTimeout(() => {
              task.value = ""
            }, 500)
          }
          }>Add Task</button>
        </div>
        <div className='task-list'>
          <ul className='list-group'>
            {
              todo.map((ele,idx) => {
                return <li key={todo[idx].id} className='list-group-item'>{ele.name} <button className="btn btn-light" onClick={()=>deleteTodo(idx)}>❌</button></li>

              })
            }
          </ul>
        </div>
      </div>
    </>

  )
}
export default App;