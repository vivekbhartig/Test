import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = JSON.parse(localStorage.getItem("todos"));
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLs();
  };
  const handleAdd = () => {
    if (todo.length >=3) {
      // console.log ("equal to three")
      setTodos([ ...todos, { id: uuidv4(), todo: todo, isCompleted: false }]);
      setTodo("");
       saveToLs();
    } else {
      // console.log ("Not equal to three" )
       alert  (" word must be greater than three!" )
       
    }
  
    // console.log ("Todo" , todo)
    // console.log ("Todos" , todos)
  };

  const handleChange = (e) => {
    // console.log ("handlechange " , e)
    // console.log ("change HANDLE" , e.target)
    setTodo(e.target.value);
    
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].iscompleted;
    setTodos(newTodos);
    saveToLs();
  };

  [];
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-400 min-h-[80vh] w-1/2 ">
        <h1 className="font-bold text-center text-xl">
          iTask - Manage your todos at one place
        </h1>
        {/* <div className=" bg-blue-300 my-5 rounded-lg p-5 "></div> */}
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold my-4">Add-a-Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2 rounded-xl border-blue-800"
          />
          <button
            onClick={handleAdd}
    
            className="bg-green-300 hover:bg-amber-200 p-2 py-1 
          text-sm font-bold text-white rounded-lg mx-6"
          >
            Save
          </button>
        </div>
        <input
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />{" "}
        Show Finished
        <h2 className="text-lg font-extralight ">My ToDos</h2>
        <div className="todos">
          {!todos.length ? (
            <div className="m-5 font-mono underline hover:decoration-dashed">
              {" "}
              No Todos to display!
            </div>
          ):""}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className={"todos flex w-1/2 my-3 justify-between"}
                >
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={todo.isCompleted}
                    id=""
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>

                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="bg-green-300 hover:bg-amber-200 p-2 
              py-1 text-sm font-bold text-white rounded-md mx-5 my-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-green-300 hover:bg-amber-200 p-2 
              py-1 text-sm font-bold text-white rounded-md mx-4"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
      {/* <h1 className="bg-cyan-300 rounded-full mx-96 hover:bg-yellow-200 text-center font-extralight">All V*B Todos</h1> */}
    </>
  );
}

export default App;
