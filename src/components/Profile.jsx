
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
function Profile(){
    const { user } = useAuthContext();
 

    return(
        <div className="profile-container">
            <p className="name">Name: {user.name}</p>
            <p>Email: {user.password}</p>

        </div>
    )
}

export default Profile;