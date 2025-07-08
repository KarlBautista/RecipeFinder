
import "../css/RecipeCard.css"
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchForRecipes } from "../services/api";
function RecipeCard({ recipe }){
    const navigate = useNavigate();
    
    const viewRecipe =  (recipe) => {
        navigate(`/recipe?q=${recipe.strMeal}`); 
    }

    return(
        <div className="recipe-card-container">
            
            <div className="search-result-img-container">
                <img src={recipe?.strMealThumb} 
                onClick={() => viewRecipe(recipe)} alt={`recipe image ${recipe?.idMeal}`} 
                className="search-result-img"/>
            </div>
            <div className="search-result-recipe-name">
                <p onClick={() => viewRecipe(recipe)}>{recipe?.strMeal}</p>
            </div>

        </div>
    )
}

export default RecipeCard;