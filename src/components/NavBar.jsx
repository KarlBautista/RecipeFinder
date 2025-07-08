import "../css/NavBar.css"
import { Link } from "react-router-dom";


function NavBar(){
    

    return(
        <div className="navbar-container">
            <div className="brand-container">
               <p><Link to="/">RecipeFinder</Link></p>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
               <Link to="favorites">Favorites</Link>
            </div>
        </div>
    )
}

export default NavBar;