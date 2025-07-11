
import "../css/RecipeCard.css"
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchForRecipes } from "../services/api";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useEffect } from "react";
function RecipeCard({ recipe }){

    const navigate = useNavigate();
    const { addToFavoritesRecipe, favoritesRecipe, isFavoriteRecipe, removeFromFavoritesRecipe } = useFavoritesContext();
    const favorite = isFavoriteRecipe(recipe.idMeal);

    const viewRecipe =  (recipe) => {
        navigate(`/recipe?q=${recipe.strMeal}`); 
    }

    const addToFavorites = (recipe) => {
        try{
            if(favorite){
                removeFromFavoritesRecipe(recipe.idMeal);
            } else{
            addToFavoritesRecipe(recipe);

            }
            
        } catch(err){
            console.error(err)
        }
    }

    return(
        <div className="recipe-card-container">
            
            <div className="search-result-img-container">
                <img src={recipe?.strMealThumb} 
                onClick={() => viewRecipe(recipe)} alt={`recipe image ${recipe?.idMeal}`} 
                className="search-result-img"/>
                <div className={favorite ? "red-heart-icon" : "heart-icon"} onClick={() => addToFavorites(recipe)}>♥</div>
            </div>
            <div className="search-result-recipe-name">
                <p onClick={() => viewRecipe(recipe)}>{recipe?.strMeal}</p>
            </div>


        </div>
    )
}

export default RecipeCard;