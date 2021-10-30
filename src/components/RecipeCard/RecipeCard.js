import './RecipeCard.css';


export default function RecipeCard(props){
    const { id, dishName, ingredients, img } = props.recipe;
    
    // directs user to a single recipe
    // production URL;
    // const imageURL = `/recipe?id=${id}`;

    // build URL
    const imageURL = `https://deploy-preview-13--flamboyant-lewin-942503.netlify.app/recipe?id=${id}`;
    
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