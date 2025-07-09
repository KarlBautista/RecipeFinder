import "../css/NavBar.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function NavBar(){
    const { user, logout } = useAuthContext();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if(user !== null){
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false);
        }
    }, [user])

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const logoutAccount = () => {
        logout();
        navigate("/login")
    }
    return(
        <div className="navbar-container">
            <div className="brand-container">
               <p><Link to="/">RecipeFinder</Link></p>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
               <Link to="favorites">Favorites</Link>
            </div>
            <div className="user-menu-container">
                <div className="user-icon" onClick={toggleUserMenu}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white"/>
                        <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="white"/>
                    </svg>
                </div>
                {showUserMenu && !isUserLoggedIn && (
                    <div className="user-dropdown">
                        <Link to="/login" className="dropdown-item">Login</Link>
                        <Link to="/register" className="dropdown-item">Register</Link>
                    </div>
                )}

                {showUserMenu && isUserLoggedIn && (
                      <div className="user-dropdown">
                        <Link to="/profile" className="dropdown-item">Profile</Link>
                        <p className="dropdown-item" onClick={() => logoutAccount()}>Logout</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default NavBar;