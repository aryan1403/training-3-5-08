import { useState, useRef } from 'react';
import './App.css';
import NavBar from './navBar';

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
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].tid + "" !== did) {
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
      <NavBar/>
      <input ref={inputRef}></input>
      {
        todo.map((e) => {
          return (
            <>
              <div id='mycard' className="card">
                <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHKy_x21musGQ/company-logo_200_200/0/1618935522044?e=2147483647&v=beta&t=tJ9tJCcyplBBFlIHpx_XJCLeHYXlF1u7UzkXq84EtuA" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">Do this Todo</p>
                  <button value={e.tid} onClick={deleteTodo} type="button" class="btn btn-danger">Delete</button>
                </div>
              </div>
            </>
          );
        })
      }
      <button className='btn btn-success' id='mybtn' onClick={addTodo}>Click Me</button>
    </>
  );
}

export default App;
