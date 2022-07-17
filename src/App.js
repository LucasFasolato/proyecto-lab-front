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
import MiActividad from './pages/AuthPages/MiActividad/miActividad';
import MiDinero from './pages/AuthPages/MiDinero/miDinero';
import DatosUser from './pages/AuthPages/Perfil/DatosUser/datosUser';
import PerfilLayout from "./components/PerfilLayout/PerfilLayout";
import {ToastContainer} from "react-toastify";
import Changepassword from './pages/AuthPages/Perfil/ChangePassword/changePassword';


function AppWrapper() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [isLoggedIn])

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>

                <Route element={<><RequireAuth/><PerfilLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/></> }>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/perfil" element={<Perfil/>}/>
                    <Route path="/perfil/cvu" element={ <Cvu_Alias /> }/>
                    <Route path="/perfil/datos" element={ <DatosUser/> }/>
                    <Route path="/perfil/changepassword" element={ <Changepassword/> }/>
                    <Route path="/perfil/transferirdinero" element={ <Transferir_dinero/> }/>
                    <Route path="/perfil/ingresardinero" element={ <Ingresar_dinero/> }/>
                    <Route path="/miactividad" element={ <MiActividad/> }/>
                    <Route path="/midinero" element={ <MiDinero/> }/>
                </Route>

                <Route path="*" element={<h1>PÁGINA NO ENCONTRADA</h1>} />
            </Routes>
        </div>
    );
}

const App = () => (
    <Router>
        <ToastContainer />
        <AppWrapper/>
    </Router>
);

export default App;
