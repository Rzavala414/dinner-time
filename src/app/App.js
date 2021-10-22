import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RandomRecipe from '../Routes/RandomRecipe/RandomRecipe.js';
import AllRecipes from '../Routes/AllRecipes/AllRecipes.js';
import Navbar from '../components/Navbar/Navbar.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/'>
         <RandomRecipe />
        </Route>
        <Route  path='/allrecipes'>
          <AllRecipes />
        </Route>
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
