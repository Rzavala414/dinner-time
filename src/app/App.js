import React from 'react';
import recipes from '../recipes.js';
import Navbar from '../components/Navbar.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={recipes[1].img} alt="bahn mi" />
      
    </div>
  );
}

export default App;
