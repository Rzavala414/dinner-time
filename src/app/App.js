import React from 'react';
import recipes from '../recipes.js';
import Navbar from '../components/Navbar/Navbar.js';
import Button from '../components/Button/Button.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={recipes[0].img}  />
      <br/>
      <Button />
    </div>
  );
}

export default App;
