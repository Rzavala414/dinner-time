import './RecipeCard.css';


export default function RecipeCard(props){
    const { id, dishName, ingredients, img } = props.recipe;
    
    // direct user to single recipe
    const imageURL = `/recipe?id=${id}`;
    
    return(
        <div className="recipe-card">
            <div className="summary"> 
                <a href={imageURL}>
                    <img className="card-image" src={img} alt={dishName} />
                </a>
                <h4 className="card-dish-name">{dishName}</h4>
                <p className="summary-paragraph">{ingredients}</p>
            </div>
        </div>
    );

}