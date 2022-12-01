import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {isLogedIn} from "../../utils/helpers";
import {logout} from "../../utils/httpFunctions";
import './dashboard_menu.css'

function Dashboard_menu({isLoggedIn, setIsLoggedIn}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/");
    }

  return (
    <div className='dashboard_menu-size'>
        <section className='dashboard_menu'>
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={() => navigate("/home")}>
                    <h2 className='dashboard_menu-h2'>Inicio</h2>
                </a>
            </div>
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={() => navigate("/perfil")}>
                    <h2 className='dashboard_menu-h2'>Tu perfil</h2>
                </a>
            </div>
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={() => navigate("/mistransferencias")}>
                    <h2 className='dashboard_menu-h2'>Transferencias</h2>
                </a>
            </div>
            {/* <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={() => navigate("/midinero")}>
                    <h2 className='dashboard_menu-h2'>Tu dinero</h2>
                </a>
            </div> */}
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={() => navigate("/miactividad")}>
                    <h2 className='dashboard_menu-h2'>Actividad</h2>
                </a>
            </div>
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={() => navigate("/perfil/transferirdinero")}>
                    <h2 className='dashboard_menu-h2'>Enviar dinero</h2>
                </a>
            </div>
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={handleLogout}>
                    <h2 className='dashboard_menu-h2'>Cerrar sesión</h2>
                </a>
            </div>
        </section>
    </div>
  )
}

export default Dashboard_menu
