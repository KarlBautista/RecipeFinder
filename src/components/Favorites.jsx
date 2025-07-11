
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import RecipeCard from "./RecipeCard";
import "../css/Favorites.css"
function Favorites(){ 
 
    const { favoritesRecipe } = useFavoritesContext()
    
    if(favoritesRecipe.length > 0){
        return(
            <div className="favorites-recipe-container">
            <h1>Your Favorite Recipes</h1>
            <div className="favorites-recipe-grid">
                {favoritesRecipe?.map((recipe) => { 
                    return <RecipeCard recipe={recipe} key={recipe.idMeal}/>
                })}
            </div>
         
        </div>
        )}
    return(
      <div className="favorites-recipe-container">
        <h1>You have no Favorite Recipes</h1>
      </div>
    )
}

export default Favorites;