import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import RandomRecipe from '../Routes/RandomRecipe.js';
import AllRecipes from '../Routes/AllRecipes.js';
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
