import { useState } from 'react';
import recipes from '../../recipes.js'
import SearchBar from '../../components/SearchBar/SearchBar.js'
import RecipeCard from '../../components/RecipeCard/RecipeCard.js';
import './AllRecipes.css';

// Shows all recipes in data base
export default function AllRecipes(){
    const [allRecipes, setAllRecipes] = useState(recipes);
    

    const searchForRecipe = (e) =>{
        const userInput = e.target.value;
        if(!userInput){
            setAllRecipes(recipes);
            return;
        }
        console.log(userInput)
        
        // finds a recipe that loosely matches user input
        const newRecipeArray = allRecipes.filter(recipe => recipe.dishName.toLowerCase().includes(userInput.toLowerCase()));
        setAllRecipes(newRecipeArray);
        
        console.log(newRecipeArray);
        
    }

    return(
        <div>
            <SearchBar searchForRecipe={searchForRecipe} />
            <div className="all-recipe-container"> 
                {allRecipes.length ? true : <h2 className="error-msg">Sorry, No Recipes Could Be Found</h2>}
                {allRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
            </div>
        </div>
    );
}