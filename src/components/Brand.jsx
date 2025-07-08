import "../css/Brand.css"
import BicolExpress from "../assets/bicol-express.png"

function Brand(){
    return(
        <div className="brand-title-container">
            <div className="brand-title-up">
                 <div className="brand-title-img1">
                <img src={BicolExpress} alt="" />
            </div>
            <p className="brand-title">RecipeFinder</p>
              <div className="brand-title-img1">
                <img src={BicolExpress} alt="" />
            </div>
           
            </div>

             <div className="brand-title-down">
              <p>
                Welcome to Recipe Finder — your free and easy-to-use tool for discovering delicious meals</p>
               <p>Search recipes by name, ingredient, or even just the first letter</p>
                <p>  Whether you're a beginner or a home chef, Recipe Finder helps you cook with confidence.</p>
    

            </div>
           

        </div>
    )
}

export default Brand;