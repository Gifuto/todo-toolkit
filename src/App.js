import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { removeLastTodo, addTodo } from './store/toolkitSlice';

function App() {
  const todos = useSelector(state => state.toolkit.todos)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    if (e.code === 'Enter' && value.trim()) {
      dispatch(addTodo(value))
      setValue('')
    } 
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <input 
        type='text' 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        onKeyDown={handleSubmit}
      />
      
      <button onClick={() => dispatch(addTodo(value))}>add Todo</button>
      <button onClick={() => dispatch(removeLastTodo())}>remove Todo</button>
      <div>
        {todos.map(todo => 
          <div key={todo}>{todo}</div>
        )}
      </div>
    </div>
  );
}

export default App;
