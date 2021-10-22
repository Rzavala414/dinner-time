import './RecipeCard.css';

export default function RecipeCard(props){
    const { dishName, ingredients, img } = props.recipe;

    return(
        <div className="recipe-card">
            <div className="summary"> 
                <a href='/'>
                    <img className="card-image" src={img} alt={dishName} />
                </a>
                <h4 className="card-dish-name">{dishName}</h4>
                <p className="summary-paragraph">{ingredients}</p>
            </div>
        </div>
    );

}