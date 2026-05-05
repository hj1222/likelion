import React, {useState} from 'react';
import './App.scss';
import plusIcon from './img/plus.png';
import deleteIcon from './img/delete.png';

const App=() => {
  const [todos, setTodos]=useState([]);
  const [input, setInput]=useState('');
  const Add = () =>{
    if(!input) return;
    setTodos([...todos, {id: Date.now(), text: input, checked:false}]);
    setInput('');
  };
  const Remove = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const check = (id) =>{
    setTodos(
      todos.map(todo => 
        todo.id === id?{...todo, checked: !todo.checked } : todo
      )
    );
  };
  return(
    <div className='wrap'>
      <h1>TO-DO-LIST</h1>
        <div className='input-box'>
            <input value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder='오늘 할 일을 입력하세요!'/>
            <button onClick={Add}>
              <img src={plusIcon} alt=''/>
            </button>
        </div>
        <br></br>
        <div className='list'>
          {todos.map(todo=>(
            <div key={todo.id} className='todo-item'>
              <div className='content'>
              <input type='checkbox' checked={todo.checked} onChange={() => check(todo.id)}/> 
              <p style={{textDecoration: todo.checked ? 'line-through' : 'none'}}>{todo.text}</p>
              </div>
              <button className='delbtn' onClick={() => Remove(todo.id)}>
                <img src={deleteIcon} alt=''/>
              </button>
            </div>
          ))}
        </div>
    </div>
  );
};
export default App;