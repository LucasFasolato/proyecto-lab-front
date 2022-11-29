import React, {useEffect, useState} from 'react'
import './invertir_dinero.css'
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import {Link, useNavigate} from "react-router-dom";
import {httpGet} from "../../../utils/httpFunctions";
import {BeatLoader} from "react-spinners";
import TableCripto from './TableCripto';

function Invertir_dinero({token}) {
    
    let [color, setColor] = useState("#3b6ce1");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(false);

    
    useEffect(() => {
        setCargandoUser(true)
        httpGet("auth/users/me", token).then(res => {
            setCargandoUser(false);
            setUser(res)
            console.log(res)
        })
    }, [])
    
  return (
            <div className='container_inv_dinero'>
                <div className='container_left'>
                    <div className='container_dinero_disp'>
                        <div className='cont_din_disp'>
                            <div className='mid_container'>
                                <div className='text_dindisp'>
                                    <h2>Dinero disponible</h2>
                                </div>
                                <div>
                                    <h1 className='text_fondouser'>{cargandoUser ?
                                        <div className="dashboard-fondo-loading">
                                            <BeatLoader
                                                color={color} 
                                                size={10}/>
                                        </div>
                                        :
                                        <>$ {user.fondo}</>}
                                    </h1>
                                </div>
                            </div>
                            <div className='mid_container'>
                                <div className='text_dindisp'>
                                    <h2>Dinero invertido</h2>
                                </div>
                                <div>
                                    <h1 className='text_fondouser'>{cargandoUser ?
                                        <div className="dashboard-fondo-loading">
                                            <BeatLoader
                                                color={color} 
                                                size={10}/>
                                        </div>
                                        :
                                        <>$ -</>}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='container_buttons'>
                            <button onClick={() => navigate("/perfil")} className='buttonleftcolum'>Ver mi portfolio</button>
                        </div>
                        <div className='container_buttons'>
                            <button onClick={() => navigate("/perfil/cvu")} className='buttonleftcolum'>Ingresar dinero</button>
                        </div>
                    </div>
                    <div className='container_buttonback'>
                        <button className='buttonback' onClick={() => navigate("/dashboard")}>VOLVER ATRAS</button>
                    </div>
                </div>
                <div className='container_right'>
                    <TableCripto />
                </div>
            </div>

  )
}

export default Invertir_dinero
