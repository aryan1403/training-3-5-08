import { useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(0);
  const onbtnclick = () => setcount(count+1);
  return (
    <>
    <p>{count}</p>
    <button id='mybtn' onClick={onbtnclick}>Click Me</button>
    </>
  );
}

export default App;
