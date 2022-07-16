import './App.css';
import './../src/components/ResetsEstilos.css'
import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes, BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/login'
import Register from './pages/Register/register'
import Home from './pages/Home/home'
import Dashboard from "./pages/AuthPages/Dashboard/Dashboard";
import Perfil from "./pages/AuthPages/Perfil/perfil"
import * as PropTypes from "prop-types";
import RequireAuth from "./pages/RequireAuth";
import Navbar from "./components/Navbar/navbar";
import Cvu_Alias from './pages/AuthPages/Cvu_Alias/cvu_alias';
import Transferir_dinero from './pages/AuthPages/Transferir_dinero/transferir_dinero';
import Ingresar_dinero from './pages/AuthPages/Ingresar_dinero/ingresar_dinero';


function AppWrapper() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}/>
                <Route path="/perfil" element={<RequireAuth><Perfil/></RequireAuth>}/>
                <Route path="/perfil/cvu" element={<RequireAuth> <Cvu_Alias/> </RequireAuth>}/>
                <Route path="/perfil/transferirdinero" element={<RequireAuth> <Transferir_dinero/> </RequireAuth>}/>
                <Route path="/perfil/ingresardinero" element={<RequireAuth> <Ingresar_dinero/> </RequireAuth>}/>
            </Routes>
        </div>
    );
}

const App = () => (
    <Router>
        <AppWrapper/>
    </Router>
);

export default App;
