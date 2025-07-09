import { useSearchParams } from "react-router-dom";
const DISH_BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const RANDOM_RECIPE_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
const FIRST_LETTER_RICIPE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f="
const ALL_CATEGORIES_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
const FILTER_BY_CATEGORY_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const ALL_AREAS = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
const FILTER_BY_AREA_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?a="
export const searchForRecipes = async (query) => {
    
    try{
        const response = await fetch(DISH_BASE_URL + query);
        if(!response.ok){
            throw new Error("searching dish failed");
        }
        const data = await response.json();
        return data;
    } catch(err){
        console.error(err);
    }
}


export const searchRandomRecipe = async () => {
    try{
        const response = await fetch(RANDOM_RECIPE_URL);
        if(!response.ok){
            throw new Error("Failed to search random recipe");
        }
        const data = await response.json();
        return data;
    } catch (err){
        console.error(err)
    }
}

export const searchFirstLetterRecipes = async (letter) => {
    try{
        const response = await fetch(FIRST_LETTER_RICIPE_URL + letter);
        if(!response.ok){
            throw new Error("Failed to search first letter recipe");
        }
        const data = await response.json();
        return data;
    } catch (err){
        console.error(err);
    }
}

export const getAllCategories = async () => {
    try{
        const response = await fetch(ALL_CATEGORIES_URL);
       if(!response.ok){
        throw new Error("Failed to get all Categories");
       }

       const data = await response.json();
       return data;
    } catch (err){
        console.error(err)
    }
}

export const filterByCategory = async (category) => {
    try{
        const response = await fetch(FILTER_BY_CATEGORY_URL + category);
        if(!response.ok){
            throw new Error("Failed to filter by category");
        }
        const data = await response.json();
        return data
    } catch (err){
        console.error(err);
    }
}
export const getAllAreas = async () => {
    try{
        const response = await fetch(ALL_AREAS);
        if(!response.ok){
            throw new Error("Failed to get all area");
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err)
    }
}

export const filterByArea = async (area) => {
    try{
        const response = await fetch(FILTER_BY_AREA_URL + area);
        if(!response.ok){
            throw new Error("Failed to get data");
        }
        const data = await response.json();
        return data
    } catch (err) {
        console.error(err)
    }
}










