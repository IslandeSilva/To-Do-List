import { useState } from 'react'
import ToDo from './components/ToDo';
import './App.css'
import ToDoForm from './components/ToDoForm';
import Search from './components/Search'

function App() {
  
  const [todos, setTodos] = useState([
    {
    id: 1,
    text: "Criar funcionalidade no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Ir para a academia",
    category: "Pessoal",
    isCompleted: false,
  },

]);

const addToDo = (text, category) => {
  const newToDos = [...todos, {
    id: Math.floor(Math.random() * 10000),
    text,
    category,
    isCompleted: false,
  }]

  setTodos(newToDos)
}

const removeToDo = (id) => {
  const newToDos = [...todos]
  const filteredToDos = newToDos.filter(todo => 
    todo.id !== id ? todo : null
  )
  setTodos(filteredToDos);
}

const completeToDo = (id) => {
  const newToDos = [...todos]
  newToDos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
  setTodos(newToDos)
}

const [search, setSearch] = useState("");


  return (

    <>
      <div className='app'>
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <div className="todo-list">
      {todos.filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .map((todo) => (
      <ToDo
        key={todo.id} 
        todo={todo} 
        removeToDo={removeToDo} 
        completeToDo={completeToDo}/>
      ))}
    </div>
        <ToDoForm addToDo={addToDo} />
  </div>
    </>
  );
}

export default App
