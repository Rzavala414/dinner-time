import React from 'react';
import recipes from '../recipes.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={recipes['bahn mi'].image} alt="bahn mi" />
      <ol>
        <li>{recipes['bahn mi'].ingredients}</li>
      </ol>
      <p>{recipes['bahn mi'].directions}</p>
      
    </div>
  );
}

export default App;
