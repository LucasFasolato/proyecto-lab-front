import React from 'react';
import Logo from './../../components/LogoAustral.jpg'
import {useNavigate } from "react-router-dom";
import './navbar.css'
function Navbar() {
  const navigate = useNavigate();
  return (
  <div className='nav_size'>
      <nav className='nav_content'>
        <section className='nav_img'>
          <button className='button_logo' onClick={() => navigate("/home")}>
            <img src={Logo}/> 
          </button>
          
        </section>
        <section className='nav_links'>
          <ul>
            <li className='links_text'>
              Productos
            </li>
            <li className='links_text'>
              Servicios
            </li>
            <li className='links_text'>
              Contacto
            </li>
          </ul>
        </section>
        <section className='nav_buttons'>
          <button className='button_iniciar' onClick={() => navigate("/login")}>
            INICIAR SESIÓN
          </button>
          <button className='button_crear' onClick={() => navigate("/register")}>
            CREAR USUARIO
          </button>
        </section>
      </nav>
  </div>
  )
}

export default Navbar 
