import './App.css';
import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/login'
import Register from './components/Register/register'
import Menu from './components/Menu/menu'

function AppWrapper() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Login/>} />
        <Route path="/main" element={<Menu/>} />
      </Routes>
    </div>
  );
}

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
