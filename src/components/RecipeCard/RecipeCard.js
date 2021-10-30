import { Link } from 'react-router-dom';
import './RecipeCard.css';

export default function RecipeCard(props){
    const { id, dishName, ingredients, img } = props.recipe;
    
    return(
        <div className="recipe-card">
            <div className="summary"> 
                <Link to={`/recipe/${id}`}>
                    <img className="card-image" src={img} alt={dishName} />
                </Link>
                <h4 className="card-dish-name">{dishName}</h4>
                <p className="summary-paragraph">{ingredients}</p>
            </div>
        </div>
    );

}