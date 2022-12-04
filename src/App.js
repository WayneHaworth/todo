import './App.css';
import { useState, useEffect } from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";


import {db} from './firebase'
import {query, collection, onSnapshot, QuerySnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  //create todo
  //read todo from firebase

  useEffect(() => {
    const q = query(collection(db,'todos'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArray = []
      QuerySnapshot.forEach((doc) => {
        console.log(doc.data().text)
        todosArray.push({...doc.data(), id: doc.id})
      })
      setTodos(todosArray)
    })
    return () => unsubscribe()
  }, [])

  const handleTodoChange = (e) => { setNewTodo(e.target.value);}
  const handleTodoDescriptionChange = (e) => { setNewTodoDescription(e.target.value); }

  const addTodo = async (e) => {
    e.preventDefault();
    if (newTodo === '') {
      alert("please enter a valid todo")
      return 
    }
    await addDoc(collection(db, 'todos'), {
      text: newTodo, completed: false, description: newTodoDescription, date: new Date()
    })

    setNewTodo("");
    setNewTodoDescription("");
  }

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div className="App bg-[#F0F0F0] h-screen flex place-content-center pt-10">
      <div className="flex h-fit flex-col">

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

      {todos.length > 0 && (
        <section className="shadow m-4 bg-white rounded-lg px-4 py-3">
        {todos
          .sort((a, b) => a.date.seconds - b.date.seconds)
          .map((todo, index) => (          
            <div key={index} className="group border-b-2 last:border-none border-slate-100 flex text-left p-4">
              <div className="flex h-5 place-items-end">
                <input onChange={() => toggleComplete(todo)} id="helper-radio" by="helper-radio-text" type="checkbox" checked={todo.completed? 'checked' : ''} className="focus:outline-none accent-blue-300 w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div className="ml-4 text-md">
                <label onClick={() => toggleComplete(todo)} className="text-md font-semibold text-slate-800 dark:text-gray-300"><span className={todo.completed? 'line-through text-gray-200' : ''}>{todo.text}</span></label>
                <p id="helper-radio-text" className="text-md font-normal text-gray-500 dark:text-gray-300">{todo.description}</p>
              </div>
              <div className="flex ml-auto hidden self-center group-hover:block">
                <a
                className="w-[23px] h-[23px] grid bg-slate-300 text-white rounded-full place-items-center hover:bg-red-500 hover:scale-125 transition-all duration-100"
                onClick={() => deleteTodo(todo.id)}
                href="#">
                <RiDeleteBin2Fill size={14} value={{color: 'red'}}/>
                </a>
              </div>
            </div>
          ))}
        </section>
        )
      }

    </div>
    </div>
  );
}

export default App;
