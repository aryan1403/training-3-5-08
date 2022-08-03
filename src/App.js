import { useState, useRef } from 'react';
import './App.css';
import Ttodo from "./todo";

function App() {
  const inputRef = useRef();
  const [todo, setTodo] = useState([
    {
      title: "Go to Shop",
      tid: (Math.random() * 50)
    },
    { 
      title: "Go to Shop",
      tid: (Math.random() * 50)
    },
    {
      title: "Go to Shop",
      tid: (Math.random() * 50)
    }
  ]);
  const onbtnclick = () => {
    console.log(inputRef.current.value);
  }
  const deleteTodo = () => {
    console.log(todo)
    setTodo(todo.slice(1,todo.length));
    // setTodo(todo.filter(e => e.id !== todo[0].tid));  
  } 
  const addTodo = () => {
    const title = inputRef.current.value;
    // Aaryan, Arush
    setTodo([...todo, {
      title: title,
      tid: Math.random() * 50
    }]);
    inputRef.current.value = '';
  }
  return (
    <>
      <input ref={inputRef}></input>
      <ul>
        {
          todo.map((e) => {
            return <Ttodo title={e.title} id={e.tid} delete={deleteTodo}></Ttodo>
          })
        }
      </ul>
      <button id='mybtn' onClick={addTodo}>Click Me</button>
    </>
  );
}

export default App;
