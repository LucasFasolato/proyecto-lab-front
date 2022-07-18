import React, {useEffect, useState} from 'react';
import Logo from './../../imgs/LogoAustral.jpg'
import './navbar.css'
import {isLogedIn} from "../../utils/helpers";
import {logout} from "../../utils/httpFunctions";
import {Link, useNavigate} from "react-router-dom";

function Navbar({isLoggedIn, setIsLoggedIn}) {
    const navigate = useNavigate();




    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/");
    }

    return (
        <div className='nav_size'>
            <nav className='nav_content'>
                <section className='nav_img'>
                    <button className='button_logo' onClick={() => navigate("/home")}>
                        <img src={Logo}/>
                    </button>

                </section>
                {!isLoggedIn &&
                <>
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
                </>}
                {isLoggedIn &&
                <>
                    <section className='nav_links'>
                        <ul>
                            <li className='links_text'>
                                <Link to={"/dashboard"}>Dashboard</Link>
                            </li>
                            <li className='links_text'>
                            <Link to={"/mistransferencias"}>Transferencias</Link>
                            </li>
                            <li className='links_text'>
                                Portfolio
                            </li>
                            <li className='links_text'>
                            <Link to={"/perfil"}>Perfil</Link>
                            </li>
                        </ul>
                    </section>
                    <section className='nav_buttons'>
                        <button className='button_iniciar' onClick={handleLogout}>
                            CERRAR SESION
                        </button>
                    </section>
                </>}
            </nav>
        </div>
    )
}

export default Navbar 
