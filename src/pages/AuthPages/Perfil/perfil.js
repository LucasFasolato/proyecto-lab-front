import React, {useEffect, useState} from 'react'
import './perfil.css'
import {Link, useNavigate} from "react-router-dom";
import {httpGet} from "../../../utils/httpFunctions";
import {formatDate, makeAvatarUrl} from "../../../utils/helpers";
import {BeatLoader} from "react-spinners";
import placeholder from "./placeholder.jpg";
import userimg from "./../../../imgs/user-circle.png";
import security from "./../../../imgs/security.png";
import card from "./../../../imgs/card.png";
import resena from "./../../../imgs/star.png";


function Perfil({isLoggedIn, setIsLoggedIn}) {
    let [color, setColor] = useState("#3b6ce1");
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(true);

    useEffect(() => {
        setCargandoUser(true)
        httpGet("auth/users/me").then(res => {
            setCargandoUser(false);
            setUser(res)
        })
    }, [])

    return (

        <div className='perfil_column-2'>
            <section className='perfil_column-2-content'>
                <section className='perfil_column-2-user'>
                    <div className='perfil_column-2-user-img'>
                        <img src={!cargandoUser ? makeAvatarUrl(user.mail) : placeholder} className='perfil_column-2-user-img-size'/>
                    </div>
                    <div className='perfil_column-2-user-info'>
                        <div className='perfil_column-2-user-name'>
                            <h2 className='perfil_column-2-user-h2'>{cargandoUser ? <></> : <>{user.username}</>}</h2>
                            {cargandoUser && <div className="dashboard-fondo-loading">
                                <BeatLoader
                                    color={color} loading={cargandoUser}
                                    size={10}/>
                            </div>}
                        </div>
                        <div className='perfil_column-2-user-register'>
                            <h3 className='perfil_column-2-user-h3'>{cargandoUser ? <></> : <>Usuario creado el
                                día {formatDate(user.createdAt)}</>}</h3>
                        </div>
                    </div>
                    <div className='perfil_column-2-user-changepassword'>
                        <button className='perfil_column-2-user-changepassword-bttn' onClick={() => navigate("/perfil/changepassword")}>
                            Modificar contraseña
                        </button>
                    </div>
                </section>

                <section className='perfil_column-2-menu'>
                    <div className='perfil_column-2-menu-bttn'>
                        <button className='perfil_column-2-menu-bttn-size' onClick={() => navigate("/perfil/cvu")}>
                            CVU y Alias
                        </button>
                    </div>
                    <div className='perfil_column-2-menu-li'>
                        <div className='perfil_column-2-menu-li-img'>
                            <img className='perfil_column-2-menu-li-img-size' src={userimg}/>
                        </div>
                        <div className='perfil_column-2-menu-li-info' onClick={() => navigate("/perfil/datos")}>
                            <div className='perfil_column-2-li-title'>
                                <h2 className='perfil_column-2-li-h2'>Tus datos</h2>
                            </div>
                            <div className='perfil_column-2-li-desc'>
                                <h3 className='perfil_column-2-li-h3'>Gestioná tus datos personales.</h3>
                            </div>
                        </div>
                        <div className='perfil_column-2-menu-li-arrow'>
                            <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                        </div>
                    </div>
                    <hr/>
                    <div className='perfil_column-2-menu-li'>
                        <div className='perfil_column-2-menu-li-img'>
                            <img className='perfil_column-2-menu-li-img-size' src={security}/>
                        </div>
                        <div className='perfil_column-2-menu-li-info'>
                            <div className='perfil_column-2-li-title'>
                                <h2 className='perfil_column-2-li-h2'>Seguridad</h2>
                            </div>
                            <div className='perfil_column-2-li-desc'>
                                <h3 className='perfil_column-2-li-h3'>Configurá la seguridad de tu cuenta.</h3>
                            </div>
                        </div>
                        <div className='perfil_column-2-menu-li-arrow'>
                            <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                        </div>
                    </div>
                    <hr/>
                    <div className='perfil_column-2-menu-li'>
                        <div className='perfil_column-2-menu-li-img'>
                            <img className='perfil_column-2-menu-li-img-size' src={card}/>
                        </div>
                        <div className='perfil_column-2-menu-li-info'>
                            <div className='perfil_column-2-li-title'>
                                <h2 className='perfil_column-2-li-h2'>Tus tarjetas</h2>
                            </div>
                            <div className='perfil_column-2-li-desc'>
                                <h3 className='perfil_column-2-li-h3'>Gestioná tus tarjetas.</h3>
                            </div>
                        </div>
                        <div className='perfil_column-2-menu-li-arrow'>
                            <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                        </div>
                    </div>
                    <hr/>
                    {/* <div className='perfil_column-2-menu-li'>
                        <div className='perfil_column-2-menu-li-img'>
                            <div className='perfil_column-2-menu-li-img-size'/>
                        </div>
                        <div className='perfil_column-2-menu-li-info'>
                            <div className='perfil_column-2-li-title'>
                                <h2 className='perfil_column-2-li-h2'>Privacidad</h2>
                            </div>
                            <div className='perfil_column-2-li-desc'>
                                <h3 className='perfil_column-2-li-h3'>Gestioná el uso de tu información personal.</h3>
                            </div>
                        </div>
                        <div className='perfil_column-2-menu-li-arrow'>
                            <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                        </div>
                    </div>
                    <hr/> */}
                    <div className='perfil_column-2-menu-li'>
                        <div className='perfil_column-2-menu-li-img'>
                            <img className='perfil_column-2-menu-li-img-size' src={resena}/>
                        </div>
                        <div className='perfil_column-2-menu-li-info' onClick={() => navigate("/perfil/comentario")}>
                            <div className='perfil_column-2-li-title'>
                                <h2 className='perfil_column-2-li-h2'>Reseña</h2>
                            </div>
                            <div className='perfil_column-2-li-desc'>
                                <h3 className='perfil_column-2-li-h3'>Deja tu valoración y opinión sobre la página.</h3>
                            </div>
                        </div>
                        <div className='perfil_column-2-menu-li-arrow'>
                            <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    )
}

export default Perfil
