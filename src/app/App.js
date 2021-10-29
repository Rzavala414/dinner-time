import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RandomRecipe from '../Routes/RandomRecipe/RandomRecipe.js';
import AllRecipes from '../Routes/AllRecipes/AllRecipes.js';
import Recipe from '../Routes/Recipe/Recipe.js';
import Navbar from '../components/Navbar/Navbar.js';
import recipes from '../recipes.js';
import './App.css';


function App() {
  const [recipe, setRecipe] = useState(recipes)
    
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' >
            <RandomRecipe recipe={recipe} setRecipe={setRecipe}/>
          </Route>
          <Route exact path='/allrecipes' >
            <AllRecipes recipe={recipe} setRecipe={setRecipe} />
          </Route>
          <Route exact path='/recipe' >
            <Recipe recipe={recipe} setRecipe={setRecipe}/>
          </Route>
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
