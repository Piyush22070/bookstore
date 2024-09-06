import React, { useContext,createContext,useState } from 'react'
export const AuthContext=createContext()
export default function  AuthProvider({children}) {

    const initialAuthuser=localStorage.getItem("Users")
    const [authuser, setAuthuser] =useState(initialAuthuser ? JSON.parse(initialAuthuser):undefined)

    return (
        <AuthContext.Provider value={[authuser,setAuthuser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext);

