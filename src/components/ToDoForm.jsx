import React from 'react'
import { useState } from 'react'

function ToDoForm({addToDo}) {

  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value || !category) return;

    //AdicionarTodo
    addToDo(value,category)


    //Limpar Campos
    setValue("")
    setCategory("")
  }


  return (
    <div className='todo-form'> 
      <h2>Criar tarefa:</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o Título' 
        value={value}
        onChange={(e) => setValue(e.target.value)} />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Outros">Outros</option>
        </select>

        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )
}

export default ToDoForm
