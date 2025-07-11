import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchForRecipes } from "../services/api";
import Loading from "./Loading"
import InputForm from "./InputForm";
import ListLetters from "./ListLetters";
import Flags from "./Flags";
import { useFavoritesContext } from "../context/FavoritesContext";

import "../css/Recipe.css"


function Recipe(){
    const [recipe, setRecipe] = useState([]);
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const query = searchParams.get("q");
    const { isFavoriteRecipe, addToFavoritesRecipe, removeFromFavoritesRecipe } = useFavoritesContext();
    const favorite = isFavoriteRecipe(recipe?.meals?.[0].idMeal);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await searchForRecipes(query);
                console.log("Recipe to" + response);
                setRecipe(response);
                setLoading(false);
            } catch(err){
                console.error(err)
            }
        }
        fetchData();
    }, [query])


    const getAllIngredientsWithImages = () => {
        const meal = recipe?.meals?.[0];
        if(!meal) return null;

        const ingredients = [];

        for(let i = 1; i <= 20; i++){
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            
            if(ingredient && ingredient.trim() !== ""){
                ingredients.push({
                    name: ingredient,
                    measure: measure,
                    image: `https://www.themealdb.com/images/ingredients/${ingredient}.png`
                });
            }
        }
        
        return ingredients;
    }

    const getInstructions = () => {
        const sentences = recipe?.meals?.[0].strInstructions.split(".").map((sentence) => sentence.trim()).filter(Boolean)
        .map((sentece) => sentece + ".");
        return sentences;
    }

    if(loading){
        return <Loading />
    }

 
    return(
        <div className="recipe-container">
            <InputForm />
            <div className="recipe-title-container">
                <p className="recipe-title">{recipe?.meals?.[0].strMeal}</p>
             
            </div>
          
             
            <div className="img-ingredients-container">
                
               
                    <div className="recipe-img-container">
                        {recipe?.meals?.length > 0 && <img src={recipe.meals[0].strMealThumb} alt={`image for recipe ${recipe.meals[0].idMeal}`} />}
                        {favorite ? <p className="my-favorite" onClick={() => removeFromFavoritesRecipe(recipe?.meals?.[0].idMeal)}>♥</p> :
                         <p className="add-to-favorites" onClick={() => addToFavoritesRecipe(recipe?.meals?.[0])}>♥</p>}
                    </div>
            <div className="recipe-ingredients-instructions-container">
                 <p className="ingredients-title">Ingredients</p>
                <div className="recipe-ingredients-container">
                       
                    {recipe?.meals?.[0] && getAllIngredientsWithImages().map((item, index) => {
                        return (
                            <div key={index} className="ingredient-item">
                            
                                <img 
                                    src={item.image}
                                    alt={item.name}
                                    className="ingredient-image"
                                />
                                <div className="ingredient-text">   
                                    <span className="ingredient-measure">{item.measure}</span>
                                    <span className="ingredient-name">{item.name}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
               
            </div>
            </div>
        

             <div className="recipe-instructions-container">
                <p className="instruction-title">Instructions</p>
                <ol>
                    {recipe?.meals?.[0] && getInstructions().map((sentence, index) => {
                        return <li>{sentence}</li>
                    })}
                </ol>
         
                    
             </div>
       
                     <ListLetters />
                    <Flags />

        </div>
    )
}

export default Recipe;