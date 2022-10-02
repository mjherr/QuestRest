import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { db } from './postgres';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'postgres';

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#0D2C54] to-[#001D3D]`,
    container: `bg-[#FED9C3] max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-[#6A040F] drop shadow lg shadow-[#9D0208] p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button:`border p-4 ml-2 bg:[#FFF1C2] text-[#]`,
    count: `text-center p-2`
  };
  
function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  // Read todo from postgres
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in postgres
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Add Todo'
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
      </div>
    </div>
  );
}

export default Todo;