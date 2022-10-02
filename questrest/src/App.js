import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
// import logo from './logo.svg';
// import './App.css';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#0D2C54] to-[#001D3D]`,
  container: `bg-[#FED9C3] max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-[#6A040F] drop shadow lg shadow-[#9D0208] p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button:`border p-4 ml-2 bg:[#FFF1C2] text-[#]`,
  count: `text-center p-2`
}

function App() {

  const [todos, setTodos] = useState(['Placeholder todo1', 'PLaceholder todo2', 'Placeholder todo3'])

  return (
        <div className={style.bg}>
           <div className={style.container}>
          <h3 className={style.heading}>QuestRest</h3>
          <form className={style.form}>
            <input type="text" placeholder='Add Todo'/>
            <button className={style.button}><AiOutlinePlus size={30} /></button>
          </form>
          <ul>
            {todos.map((todo, index)=> (
              <Todo key={index} todo={todo} />
            ))}
            
          </ul>
          <p className={style.count}>You have 3 todos</p>
           </div>
        </div>
      );
}

export default App;