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

function Navbar() {

    const navigate = useNavigate();
    const [activation, setActivation] = useState(false);


    const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
    var className = activation ? 'show_content' : 'nav_content';

    const handleLogout = () => {
        localStorage.removeItem("ba_token")
        logout({ returnTo: window.location.origin })
    }
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
                            <a href='#s4'>
                                <li className='links_text' onClick={() => {navigate("/home");setActivation(false)}}>
                                    Quienes somos
                                </li>
                            </a>
                            <a href='#s3'>
                                <li className='links_text' onClick={() => {setActivation(false)}}>
                                Servicios
                                </li>
                            </a>
                            <a href='https://linktr.ee/lucasfasolato' target='_blank'>
                                <li className='links_text' onClick={() => {setActivation(false)}}>
                                    Contacto
                                </li>
                            </a>
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
                            <Link to={"/perfil/portfolio"}>Portfolio</Link>
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
