import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        try{
            const storedUser = localStorage.getItem("user");
            if(storedUser){
                setUser(JSON.parse(storedUser))
            }
        } catch(err){
            console.error(err)
        }
    }, []);
    
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }
    const value = {
        user,
        login,
        logout
    }

    return (
       <AuthContext.Provider value={value}>
        {children}
       </AuthContext.Provider>
    )
}