import "../css/NavBar.css"
import { Link, useLocation} from "react-router-dom";



function NavBar(){
    
    const location = useLocation();


    return(
        <div className="navbar-container">
            <div className="brand-container">
               <p><Link to="/">RecipeFinder</Link></p>
            </div>
            <div className="links">
                <Link to="/" 
                className={location.pathname === "/" ? "active-link" : "" }>Home</Link>
               <Link to="/favorites"
               className={location.pathname === "/favorites" ? "active-link" : ""}>Favorites</Link>
            </div>

            </div>
    )
}

export default NavBar;