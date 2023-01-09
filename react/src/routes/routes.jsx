import React, { useContext } from "react";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import CadUser from "../CadUser/cadUser";
import Login from "../login/login";
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'

import { AuthProvider, AuthContext } from '../contexts/auth'

export default props => 
{
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate  to="/"/>
        }

        return children
    }

    return (
        <Router> 
            <AuthProvider>
                <Routes>
                    <Route  
                        exact path='/dashboard'
                        element={
                            <Private>
                            <div className="wrapper">
                                <Header />
                                <SideBar />
                                <div className='content-wrapper'>
                                    <Dashboard /> 
                                </div>
                                <Footer />
                            </div>
                            </Private>} 
                    />
                    <Route  
                        exact path='/usuarios'
                        element={
                            <Private>
                            <div className="wrapper">
                                <Header />
                                <SideBar />
                                <div className='content-wrapper'>
                                    <CadUser />
                                </div>
                                <Footer />
                            </div>
                            </Private>} 
                    /> 
                    <Route path='/' element={<Login />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
} 