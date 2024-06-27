import { useState } from 'react'
import Navbar from './components/Navbar'
// import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = ()=>{
    let t = todos.filter(i=>i.id === id) 
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) 
    // saveToLS()   
}
  }
  const handleDelete = (e, id)=>{
    let index = todos.findIndex(item=>{
    return item.id ==id;
  })
  let newTodos = todos.filter(item=>{
    return item.id!==id
  });
  setTodos(newTodos)
  }
  const handleAdd = ()=>{
    setTodos([...todos,{id: time.now ,todo, isCompleted: false}])
    setTodo("")
    
  }

  const handleChange= (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].iscompleted;
    setTodos(newTodos)
    
  }


  return (
    <>
    <Navbar/>
     <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-400 min-h-[80vh] ">
     <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>
      {/* <div className=" bg-blue-300 my-5 rounded-lg p-5 "></div> */}
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add-a-Todo my-5</h2>
          <input onChange={handleChange} value={todo} type="text" className= 'w-1/2 rounded-xl border-blue-800' />
          <button onClick={handleAdd} className='bg-green-300 hover:bg-amber-200 p-2 py-1 
          text-sm font-bold text-white rounded-lg mx-6'>Add</button>
        </div>
        <h2 className='text-xl font-extralight '>My ToDos</h2>
        <div className="todos">
          {todos.length ===0 && <div className='m-5'> No Todos to display!</div> }
          {todos.map(item=>{
            
          return <div key={item.id} className="todos flex w-1/2 my-3 justify-between">
            <input name={item.id}onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} 
             id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={(e)handleEdit(e, item.id)} className='bg-green-300 hover:bg-amber-200 p-2 
              py-1 text-sm font-bold text-white rounded-md mx-5 my-1'>Edit</button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-green-300 hover:bg-amber-200 p-2 
              py-1 text-sm font-bold text-white rounded-md mx-4'>Delete</button>
            </div> 
          </div>
          })} 
        </div> 
      

    </div>
                {/* <h1 className="bg-cyan-300">ToDo</h1> */}
    </>
    
   )
}

export default App
