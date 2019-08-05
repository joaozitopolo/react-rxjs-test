import React from 'react';
import './App.css';
import InputItem from './components/InputItem';
import ListItems from './components/ListItems';

function App() {
  return (
    <div className="container">
      <h1>React with rxjs test</h1>
      <InputItem/>
      <ListItems/>
    </div>
  );
}

export default App;
