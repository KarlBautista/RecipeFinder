import "../css/NavBar.css"
import { Link, useLocation} from "react-router-dom";
import Menu from "../assets/menu.png"
import { useEffect, useState } from "react";



function NavBar(){
    
    const location = useLocation();
    
    const [width, setWidth] = useState(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const burgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <div className="navbar-container">
            <div className="brand-container">
               <p><Link to="/">RecipeFinder</Link></p>
            </div>
            {isMenuOpen && (
                <div className="burger-menu-links">
                  <Link to="/" className={location.pathname === "/" ? "active-burger-link" : ""}>Home</Link>
                  <Link to="/favorites" className={location.pathname === "/favorites" ? "active-burger-link" : ""}>Favorites</Link>
                </div>
            )}
            {
                width < 670 ? (
                    <div className="burger-menu">
                        <img src={Menu} alt="" onClick={() => burgerMenu()}/>
                    </div>
                ) : 
                (
                    <div className="links">
                    <Link to="/" 
                    className={location.pathname === "/" ? "active-link" : "" }>Home</Link>
                   <Link to="/favorites"
                   className={location.pathname === "/favorites" ? "active-link" : ""}>Favorites</Link>
            </div>
                )
            }
         

            </div>
    )
}

export default NavBar;