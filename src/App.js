import './App.css';

function App() {
  return (
    <div className="App bg-[#eeecf4] h-screen flex place-content-center">
      <div className="flex h-fit">
      <header className="md:min-w-[650px] flex flex-col m-4 bg-white rounded-lg px-4 py-1 place-content-between">
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
            <a href="#" className="button cancelTodoButton p-2 px-4 rounded-lg border border-1 border-slate-400 text-slate-400">Cancel</a>
            <a href="#" className="addTodoButton bg-pink-500 text-white p-2 px-4 rounded-lg">Add Task</a>
          </section>
        </div>

      </header>
      

      
      </div>
    </div>
  );
}

export default App;
