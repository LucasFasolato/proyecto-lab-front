import React, {useEffect, useState} from 'react';
import Logo from './../../imgs/LogoAustral.jpg'
import './navbar.css'
import {isLogedIn} from "../../utils/helpers";
import {logout} from "../../utils/httpFunctions";
import {Link, useNavigate} from "react-router-dom";
import MenuBurger from './menu-burger.png';
// import classNames from 'classnames/bind';
import { useAuth0, User } from "@auth0/auth0-react";

const axios = require('axios');

function Navbar({loginWithRedirect, isAuthenticated}) {

    const navigate = useNavigate();
    const [activation, setActivation] = useState(false);
    const handleLogout = () => {
        logout({ returnTo: window.location.origin })
    }

    const { logout } = useAuth0();
    var className = activation ? 'show_content' : 'nav_content';


    return (
        <div className='nav_size'>
            <nav className={className} id='nav_content'>
                <section className='nav_img'>
                    <button className='button_logo' onClick={() => {navigate("/home");setActivation(false)}}>
                        <img src={Logo}/>
                    </button>

                </section>
                {!isAuthenticated &&
                <>
                    <section className='nav_links' onClick={() => {navigate("/home");setActivation(false)}}>
                        <ul>
                            <li className='links_text' onClick={() => {navigate("/home");setActivation(false)}}>
                                Productos
                            </li>
                            <li className='links_text' onClick={() => {navigate("/home");setActivation(false)}}>
                                Servicios
                            </li>
                            <li className='links_text' onClick={() => {navigate("/home");setActivation(false)}}>
                                Contacto
                            </li>
                        </ul>
                    </section>
                    <section className='nav_buttons'>
                        <button className='button_iniciar' onClick={() => {loginWithRedirect();setActivation(false)}}>
                            INICIAR SESIÓN
                        </button>
                        <button className='button_crear' onClick={() => {loginWithRedirect();setActivation(false)}}>
                            CREAR USUARIO
                        </button>
                    </section>
                </>}
                {isAuthenticated &&
                <>
                    <section className='nav_links'>
                        <ul>
                            <li className='links_text' onClick={() => {setActivation(false)}}>
                                <Link to={"/dashboard"}>Dashboard</Link>
                            </li>
                            <li className='links_text' onClick={() => {setActivation(false)}}>
                            <Link to={"/mistransferencias"}>Transferencias</Link>
                            </li>
                            <li className='links_text' onClick={() => {setActivation(false)}}>
                                Portfolio
                            </li>
                            <li className='links_text' onClick={() => {setActivation(false)}}>
                            <Link to={"/perfil"}>Perfil</Link>
                            </li>
                        </ul>
                    </section>
                    <section className='nav_buttons'>
                        <button className='button_cerrar' onClick={handleLogout}>
                            CERRAR SESION
                        </button>
                    </section>
                </>}
            </nav>
            <div className='burger_bttn' onClick={() => activation ? setActivation(false) : setActivation(true)}> 
            <div className='burger_img'>
                <img src={MenuBurger} />
            </div>
            </div>
        </div>
    )
}

export default Navbar 
