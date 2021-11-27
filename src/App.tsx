import React from 'react';
import './App.css';
import Books from './components/Books';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App" style={{marginTop:30}}>
      <Counter/>
      <Books/>
    </div>
  );
}

export default App;
