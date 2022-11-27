import React from 'react';
import './App.css';
import { List } from './components/List/List';

import { Tittle } from './components/Tittle/Tittle';

function App() {
  
  return (
    <div className="App">
      <Tittle />
      
      <List />
    </div>
  );
}

export default App;
