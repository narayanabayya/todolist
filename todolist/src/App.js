
import './App.css';
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";

function App() {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    const newtodo = [...todo, data];
    setTodo(newtodo);
    setData("");
  }

  const handleDelete = (indexValue) => {
    const finaltodo = todo.filter((key, index) => indexValue !== index);
    setTodo(finaltodo)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>To Do List</h2>
        <input type='text' className='textBox'
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type='submit' className='addbtn'>Add</button>
      </form>
      <div className='text-center'>
        <h2>{todo.map((key, index) => <div className='text'>
          {index + 1}. {key} < button onClick={() => handleDelete(index)} className='dltbtn' ><FaTrash /></button>
          </div>)}</h2>
      </div >
    </div >
  );
}

export default App;
