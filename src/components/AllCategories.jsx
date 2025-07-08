
import { useEffect, useState } from "react";
import { getAllCategories } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../css/AllCategories.css"
function AllCategories(){
    const [catergories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await getAllCategories();
                console.log(response);
                setCategories(response);
            }
             catch(err){
            console.error(err)
         }
        }

        fetchData();

    }, []);
    
    const filterByCategory = async(category) => {
        try{
           navigate(`/category?q=${category}`)
        } catch(err){
            console.error(err);
        }
    }

    return(
        <div className="all-category-container">
            <div className="category-title">
                <p>All Categories</p>
            </div>

            <div className="category-grid">
                 {catergories.categories?.map((category) => {
                return <div className="category-box">
                        <img src={category.strCategoryThumb} 
                        onClick={() => filterByCategory(category.strCategory.trim().toLowerCase())} alt="" />
                        <p>{category.strCategory}</p>
                     </div>
            })}
            </div>
           

        </div>
    )
}

export default AllCategories;