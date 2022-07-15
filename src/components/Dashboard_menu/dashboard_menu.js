import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import './dashboard_menu.css'

function Dashboard_menu() {
    const navigate = useNavigate();
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
                <a className='dashboard_menu-a' onClick={() => navigate("/contact")}>
                    <h2 className='dashboard_menu-h2'>Ayuda</h2>
                </a>
            </div>
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={() => navigate("/perfil/saldo")}>
                    <h2 className='dashboard_menu-h2'>Tu dinero</h2>
                </a>
            </div>
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={() => navigate("/perfil/actividad")}>
                    <h2 className='dashboard_menu-h2'>Actividad</h2>
                </a>
            </div>
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a'>
                    <h2 className='dashboard_menu-h2'>Enviar dinero</h2>
                </a>
            </div>
            <div className='dashboard_menu-link'>
                <a className='dashboard_menu-a' onClick={() => navigate("/home")}>
                    <h2 className='dashboard_menu-h2'>Salir</h2>
                </a>
            </div>
        </section>
    </div>
  )
}

export default Dashboard_menu