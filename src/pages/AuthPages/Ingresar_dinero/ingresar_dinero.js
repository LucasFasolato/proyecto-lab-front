import React, {useEffect, useState} from 'react'
import './ingresar_dinero.css'
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import {Link, useNavigate} from "react-router-dom";
import {httpGet} from "../../../utils/httpFunctions";

function Ingresar_dinero() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(false);

    
    useEffect(() => {
        setCargandoUser(true)
        httpGet("auth/users/me").then(res => {
            setCargandoUser(false);
            setUser(res)
            console.log(res)
        })
    }, [])
    
  return (

            <div className='cvu_alias_column-2'>
                <section className='cvu_alias_column-2-content'>
                    <section className='cvu_alias_column-2-cvu'>
                        <div className='cvu_alias_column-2-cvu-info'>
                            <div className='cvu_alias_column-2-cvu-title'>
                                <h2 className='cvu_alias_column-2-cvu-h2'>CVU</h2>
                            </div>
                            <div className='cvu_alias_column-2-cvu-number'>
                                <h3 className='cvu_alias_column-2-cvu-h3'>{cargandoUser ? <>Cargando</> : <>{user.cbu}</>}</h3>
                            </div>
                        </div>
                        <div className='cvu_alias_column-2-cvu-arrow'>
                            <button className='cvu_alias_column-2-cvu-arrow-size'>COPIAR</button>
                        </div>
                    </section>

                    <section className='cvu_alias_column-2-alias'>
                        <div className='cvu_alias_column-2-alias-content'>
                           <div className='cvu_alias_column-2-alias-info'>
                                <div className='cvu_alias_column-2-alias-title'>
                                    <h2 className='cvu_alias_column-2-alias-h2'>Alias</h2>
                                </div>
                                <div className='cvu_alias_column-2-alias-name'>
                                    <h3 className='cvu_alias_column-2-alias-h3'>{cargandoUser ? <>Cargando</> : <>{user.username}</>}</h3>
                                </div>
                            </div>
                            <div className='cvu_alias_column-2-alias-arrow'>
                                <button className='cvu_alias_column-2-alias-arrow-size'>COPIAR</button>
                            </div> 
                        </div>
                        <div className='cvu_alias_column-2-alias-modificar'>
                            <button className='cvu_alias_column-2-alias-modificar-bttn'>Modificar mi alias</button>
                            <div className='perfil_column-2-alias-modificar-arrow'>
                                <button className='perfil_column-2-alias-modificar-arrow-size'>&gt;</button>
                            </div>
                        </div>
                    </section>
                    <div className='cvu_alias_column-2-bttn-volver'>
                            <button className='cvu_alias_column-2-bttn-volver-bttn' onClick={() => navigate("/dashboard")}>VOLVER A MI PERFIL</button>
                        </div>
                </section>
            </div>

  )
}

export default Ingresar_dinero
