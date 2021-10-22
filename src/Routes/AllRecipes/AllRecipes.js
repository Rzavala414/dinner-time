import { useState } from 'react';
import recipes from '../../recipes.js'
import SearchBar from '../../components/SearchBar/SearchBar.js'
import RecipeCard from '../../components/RecipeCard/RecipeCard.js';
import './AllRecipes.css';

// Shows all recipes in data base
export default function AllRecipes(){
    const [allRecipes, setAllRecipes] = useState(recipes);

    const searchForRecipe = (e) =>{
        let recipeName = e.target.value;
        if(!recipeName){
            setAllRecipes(recipes);
            return;
        }
        
        // finds a recipe that loosly matches user input
        const newRecipeArray = allRecipes.filter(recipe => recipe.dishName.toLowerCase().includes(recipeName.toLowerCase()));
        console.log(newRecipeArray);
        
        setAllRecipes(newRecipeArray);
        console.log(recipeName)
    }

    return(
        <div>
            <SearchBar searchForRecipe={searchForRecipe} />
            <div className="all-recipe-container"> 
                {allRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
            </div>
        </div>
    );
}