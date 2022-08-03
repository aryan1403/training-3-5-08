import { useState, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef();
  const btnRef = useRef();
  const [todo, setTodo] = useState([
    {
      title: "Go to Shop",
      tid: (Math.random() * 100)
    },
    {
      title: "Go to Shop1",
      tid: (Math.random() * 100)
    },
    {
      title: "Go to Shop2",
      tid: (Math.random() * 100)
    }
  ]);
  const deleteTodo = (event) => {
    let did = event.target.value;
    let todo2 = [];
    for(let i =0;i < todo.length; i++) {
      if(todo[i].tid+"" !== did) {
        todo2.push(todo[i]);
      }
    }
    setTodo(todo2);
    // setTodo(todo.slice(1,todo.length));
    // setTodo(todo.filter(e => e.id !== todo[0].tid));  
  }
  const addTodo = () => {
    const title = inputRef.current.value;
    // Aaryan, Arush
    setTodo([...todo, {
      title: title,
      tid: Math.random() * 100
    }]);
    inputRef.current.value = '';
  }
  return (
    <>
      <input ref={inputRef}></input>
      <ul>
        {
          todo.map((e) => {
            return (
              <>
                <li key={e.tid}>{e.title}</li>
                <button value={e.tid} onClick={deleteTodo}>X</button>
              </>
            );
          })
        }
      </ul>
      <button id='mybtn' onClick={addTodo}>Click Me</button>
    </>
  );
}

export default App;
