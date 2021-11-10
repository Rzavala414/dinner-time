import { Link } from 'react-router-dom';
import './RecipeCard.css';

export default function RecipeCard(props){
    const { id, dishName, directions, img } = props.recipe;
    
    return(
        <div className="recipe-card">
            <div className="summary"> 
                <Link to={`/recipe/${id}`}>
                    <img className="card-image" src={img} alt={dishName} />
                    <h4 className="card-dish-name">{dishName}</h4>
                </Link>
                <p className="summary-paragraph">{directions}</p>
            </div>
        </div>
    );

}