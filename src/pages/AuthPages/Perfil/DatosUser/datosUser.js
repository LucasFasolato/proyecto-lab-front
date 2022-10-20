import React, {useEffect, useState} from 'react'
import './datosUser.css'
import {Link, useNavigate} from "react-router-dom";
import {httpGet} from "../../../../utils/httpFunctions";
import {formatDate, makeAvatarUrl} from "../../../../utils/helpers";
import {BeatLoader} from "react-spinners";
import placeholder from "./../placeholder.jpg";
import { SSRProvider } from 'react-bootstrap';


function DatosUSer({isLoggedIn, setIsLoggedIn}) {
    let [color, setColor] = useState("#3b6ce1");
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(true);

    useEffect(() => {
        setCargandoUser(true)
        httpGet("auth/users/me").then(res => {
            setCargandoUser(false);
            setUser(res)
            console.log(res)
        })
    }, [])

    return (

        <div className='datosuser_column-2'>
            <section className='datosuser_column-2-content'>
                <section className='datosuser_column-2-user'>
                    <div className='datosuser_column-2-user-img'>
                        <img src={!cargandoUser ? makeAvatarUrl(user.mail) : placeholder} className='datosuser_column-2-user-img-size'/>
                    </div>
                    <div className='datosuser_column-2-user-data'>
                        <h3 className='datosuser_column-2-user-h3'>{cargandoUser ? <></> : <><span className='datosuser_column-2-user-span'>USERNAME</span>: {user.username}</>}</h3>
                        {cargandoUser && <div className="dashboard-fondo-loading">
                            <BeatLoader
                                color={color} loading={cargandoUser}
                                size={10}/>
                        </div>}
                    </div>
                    <div className='datosuser_column-2-user-data'>
                        <h3 className='datosuser_column-2-user-h3'>{cargandoUser ? <></> : <><span className='datosuser_column-2-user-span'>CBU</span>: {user.cbu}</>}</h3>
                        {cargandoUser && <div className="dashboard-fondo-loading">
                            <BeatLoader
                                color={color} loading={cargandoUser}
                                size={10}/>
                        </div>}
                    </div>
                    <div className='datosuser_column-2-user-data'>
                        <h3 className='datosuser_column-2-user-h3'>{cargandoUser ? <></> : <><span className='datosuser_column-2-user-span'>MAIL</span>: {user.mail}</>}</h3>
                        {cargandoUser && <div className="dashboard-fondo-loading">
                            <BeatLoader
                                color={color} loading={cargandoUser}
                                size={10}/>
                        </div>}
                    </div>
                    <div className='datosuser_column-2-user-data'>
                        <h3 className='datosuser_column-2-user-h3'>{cargandoUser ? <></> : <><span className='datosuser_column-2-user-span'>FONDOS</span>: ${user.fondo}</>}</h3>
                        {cargandoUser && <div className="dashboard-fondo-loading">
                            <BeatLoader
                                color={color} loading={cargandoUser}
                                size={10}/>
                        </div>}
                    </div>
                    <div className='datosuser_column-2-user-data'>
                        <h3 className='datosuser_column-2-user-h3'>{cargandoUser ? <></> : <>Usuario creado el día {formatDate(user.createdAt)}</>}</h3>
                        {cargandoUser && <div className="dashboard-fondo-loading">
                            <BeatLoader
                                color={color} loading={cargandoUser}
                                size={10}/>
                        </div>}
                    </div>
                    <div className='datosuser_column-2-user-changepassword'>
                        <button className='datosuser_column-2-user-changepassword-bttn' onClick={() => navigate("/perfil/changepassword")}>
                            Modificar contraseña
                        </button>
                    </div>
                </section>
            </section>
        </div>

    )
}

export default DatosUSer
