import { useState } from 'react'
import Navbar from './components/Navbar'
const { v4: uuidv4 } = require('uuid');
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// const [count, setCount] = useState(0)
// import './App.css'   

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = ()=>{

  }
  const handleDelete = ()=>{

  }
  const handleAdd = ()=>{
    setTodos([...todos,{id: uuidv4(),todo, isCompleted: false}])
    setTodo("")
    
  }

  const handleChange= (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) =>{
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = todos;
    newTodos[index].isCompleted = !newTodos[index].iscompleted;
    setTodos(newTodos)
    // todos.filter()
  }
    

  return (

    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-400 min-h-[80vh] ">
      {/* <div className=" bg-blue-300 my-5 rounded-lg p-5 "></div> */}
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add-a-Todo my-5</h2>
          <input onChange={handleChange} value={todo} type="text" className= 'w-1/2 rounded-xl border-blue-800' />
          <button onClick={handleAdd} className='bg-green-300 hover:bg-amber-200 p-2 py-1 
          text-sm font-bold text-white rounded-lg mx-6'>Add</button>
        </div>
        <h2 className='text-xl font-extralight '>My ToDos</h2>
        <div className="todos">
          {todos.map(item=>{
            
          return <div key={todo.id} className="todos flex w-1/2 my-3 justify-between">
            <input name={todo.id}onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} 
            name="" id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-green-300 hover:bg-amber-200 p-2 
              py-1 text-sm font-bold text-white rounded-md mx-5 my-1'>Edit</button>
              <button onClick={handleDelete} className='bg-green-300 hover:bg-amber-200 p-2 
              py-1 text-sm font-bold text-white rounded-md mx-4'>Delete</button>
            </div> 
          </div>
          })} 
        </div> 
      

    </div>
      <h1 className="bg-cyan-300">ToDo</h1>
    </>
    
  )
}

export default App
