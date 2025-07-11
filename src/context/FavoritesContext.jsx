import { useContext, createContext, useState, useEffect } from "react";

const FavroitesContext  = createContext();

export const useFavoritesContext = () => useContext(FavroitesContext);


export const FavoritesProvier = ({ children }) => {

    const [favoritesRecipe, setFavoritesRecipe] = useState([]);
    

    useEffect(() => {
        try{
            const storedFavorites = localStorage.getItem("favoritesRecipe");
            if(storedFavorites) JSON.parse(storedFavorites);
          
        } catch(err){
            console.error(err);
        }
   }, []) 

   
    useEffect(() => {
        try{
            localStorage.setItem("favoritesRecipe", JSON.stringify(favoritesRecipe))
        } catch(err){
            console.error(err);
        }
    }, [favoritesRecipe]);

    const addToFavoritesRecipe = (recipe) => {
        setFavoritesRecipe(f => [...f, recipe]);
        alert(`${recipe.strMeal} is added to your favorites.`)
    }

    const isFavoriteRecipe = (favoriteId) => {
        return favoritesRecipe.some(f => f.idMeal === favoriteId)
    }

    const removeFromFavoritesRecipe = (favoriteId) => {
        setFavoritesRecipe(f => f.filter(f => f.idMeal !== favoriteId))
    }


    const value = {
        addToFavoritesRecipe,
        favoritesRecipe,
        isFavoriteRecipe,
        removeFromFavoritesRecipe
    }

    

    return(
        <FavroitesContext.Provider value={value}>
            {children}
        </FavroitesContext.Provider>
    )


}
