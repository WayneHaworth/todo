import './App.css';
import { useState } from 'react';

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

  return (
    <div className="App bg-[#eeecf4] h-screen flex place-content-center pt-10">
      <div className="flex h-fit flex-col">
      <header className="md:min-w-[650px] flex flex-col m-4 bg-white rounded-lg px-4 py-3 place-content-between">
        <section className="h-30 flex flex-col gap-4 mb-4 pt-3">
          <input type="text" className="h-[30px] p-2 outline-none focus-outline-none" placeholder="Task name here" />
          <textarea className="h-[70px] p-2 resize-none outline-none focus-outline-none" placeholder="Description" />
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
            <a href="#" className="button cancelTodoButton p-2 px-4 rounded-lg border border-1 border-slate-400 text-slate-500">Cancel</a>
            <a href="#" className="addTodoButton bg-blue-500 text-white p-2 px-4 rounded-lg">Add Task</a>
          </section>
        </div>
      </header>
      <section className="m-4 bg-white rounded-lg px-4 py-3 ">
        {todos.map((todo, index) => (
          
        <div class="border-b-2 last:border-none border-slate-100 flex text-left p-4">
          <div class="flex h-5 place-items-end">
            <input id="helper-radio" aria-described by="helper-radio-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div class="ml-4 text-md">
            <label for="helper-radio" class="font-medium text-gray-900 dark:text-gray-300">{todo.text}</label>
            <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">{todo.description}</p>
          </div>
        </div>
        ))}

    </section>

          
     

      
      </div>
    </div>
  );
}

export default App;
