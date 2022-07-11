import './App.css';
import './../src/components/ResetsEstilos.css'
import React from 'react';
import {Navigate, Route, Routes, BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/login'
import Register from './pages/Register/register'
import Home from './pages/Home/home'
import Dashboard from "./pages/AuthPages/Dashboard";
import * as PropTypes from "prop-types";
import RequireAuth from "./pages/RequireAuth";
import Navbar from "./components/Navbar/navbar";


function AppWrapper() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}/>
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
