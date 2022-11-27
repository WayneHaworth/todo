import './App.css';
import { useState } from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
      description: "Learn about React Hooks and Context API"
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
      description: "Meet friend for lunch at 12:30pm"
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
      description: "Build really cool todo app using React"
    }
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const handleTodoChange = (e) => { setNewTodo(e.target.value);}
  const handleTodoDescriptionChange = (e) => { setNewTodoDescription(e.target.value); }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: newTodo, isCompleted: false, description: newTodoDescription }]);
    setNewTodo("");
    setNewTodoDescription("");
    }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  /*
sunset: bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100
space: bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r
hyper: bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500


*/

  return (
    <div className="App bg-[#F0F0F0] h-screen flex place-content-center pt-10">
      <div className="flex h-fit flex-col">
      
      <section className="shadow m-4 bg-white rounded-lg px-4 py-3 ">
        {todos.map((todo, index) => (          
          <div key={index} className="group border-b-2 last:border-none border-slate-100 flex text-left p-4">
            <div className="flex h-5 place-items-end">
              <input id="helper-radio" by="helper-radio-text" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div className="ml-4 text-md">
              <label className="text-md font-bold text-slate-700 dark:text-gray-300">{todo.text}</label>
              <p id="helper-radio-text" className="text-md font-normal text-gray-500 dark:text-gray-300">{todo.description}</p>
            </div>
            <div className="flex ml-auto hidden self-center group-hover:block">
              <a
                className="w-[30px] h-[30px] grid bg-slate-300 text-white rounded-full place-items-center hover:bg-red-500 hover:scale-125 transition-all duration-100"
                onClick={deleteTodo}
                href="#">
                <RiDeleteBin2Fill value={{color: 'red'}}/>
              </a>
            </div>
          </div>
        ))}
      </section>  

      <header className="shadow md:min-w-[650px] flex flex-col m-4 bg-white rounded-lg px-4 py-3 place-content-between">
        <section className="h-30 flex flex-col gap-4 mb-4 pt-3">
          <input 
            type="text" 
            className="h-[30px] p-2 outline-none focus-outline-none"
            placeholder="Task name here"
            value={newTodo}
            onChange={handleTodoChange}
            />
          <input
            className="h-[70px] p-2 resize-none outline-none focus-outline-none"
            placeholder="Description"
            value={newTodoDescription}
            onChange={handleTodoDescriptionChange}
          />
        </section>

        <div className="bottomRow flex place-content-between gap-4">
          <section className="tagsList flex flex-row self-end">
            <ul className="flex gap-3 p-2 items-center">
              <li className="p-2 px-4 rounded-lg bg-slate-100 text-slate-400 text-xs">1x1</li>
              <li className="p-2 px-4 rounded-lg bg-slate-100 text-slate-400 text-xs">PRW</li>
              <li className="p-2 px-4 rounded-lg bg-slate-100 text-slate-400 text-xs">Learn</li>
            </ul>
          </section>
          <section className="buttons flex flex-row gap-4 p-2 items-center">            
            <a href="#" className="button cancelTodoButton p-1.5 px-4 rounded border border-1 border-slate-400 text-slate-500">Cancel</a>
            <a 
              href="#" 
              className="addTodoButton bg-indigo-500 text-white p-1.5 px-4 rounded"
              onClick={addTodo}
              >Add Task
            </a>
          </section>
        </div>
      </header>

    </div>
    </div>
  );
}

export default App;
