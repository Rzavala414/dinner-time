import recipes from '../../recipes.js'
import RecipeCard from '../../components/RecipeCard/RecipeCard.js';
import './AllRecipes.css';

// Shows all recipes in data base
export default function AllRecipes(){
    
    return(
        <div className="all-recipe-container">
            {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
    );
}