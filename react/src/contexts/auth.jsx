import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import { createSession } from "../login/api/api";
import 'regenerator-runtime/runtime'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user")

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, [])

    const login = async (email, password) => {
        //criar session
        const response = await createSession(email, password)

        const loggedUser = response.email    
        const permissao = response.permissao_id    
        if (loggedUser) {
            
            if (permissao == 1) {
                localStorage.setItem("user", JSON.stringify(loggedUser))
                sessionStorage.setItem("user", JSON.stringify(loggedUser))

                setUser(loggedUser)
                navigate('/dashboard')
            } else if (permissao == 2) {
                alert("Usuário Bloqueado!")
            } else {
                alert("Usuário excluído ou não consta na base de dados!")
            }
        } else {
            alert("Usuário ou Senha incorreta!")
        }
    }

    const logout = () => {
        localStorage.removeItem("user")
        sessionStorage.removeItem("user")
        setUser(null)
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>{children}</AuthContext.Provider>
    )
}

