
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { filterByCategory } from "../services/api";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";
import "../css/RecipeByCategory.css"
function RecipeByCategory(){
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
            const response = await filterByCategory(query);
             console.log(response);
             setRecipes(response);
             setLoading(false);
            } catch(err){
                console.error(err);
            }
          
        }

        fetchData();

    },[query]);

    if(loading){
        return <Loading />
    }



    return(
        <div className="recipe-by-category-container">
            <div className="recipe-by-category-title">
                <p>{`${query.charAt(0).toUpperCase() + query.slice(1).toLowerCase()} Recipes`}</p>
            </div>
            <div className="recipe-by-category-grid">
                {recipes?.meals?.map((recipe) => {
                    return <RecipeCard recipe={recipe} key={recipe.idMeal}/>
                })}
            </div>
        </div>
    )
}

export default RecipeByCategory;