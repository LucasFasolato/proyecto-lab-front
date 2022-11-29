import React, {useEffect, useState} from 'react'
import './cvu_alias.css'
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import {Link, useNavigate} from "react-router-dom";
import {httpGet} from "../../../utils/httpFunctions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cvu_Alias({token}) {
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

    function copiarAlPortapapeles(id_elemento) {
        var aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        if (id_elemento == 'cvu_user') {
            toast.success("CVU copiado correctamente", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 800,
            });
        } else {
            toast.success("Alias copiado correctamente", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 800,
            });
        }
        
    }
    
  return (

            <div className='cvu_alias_column-2'>
                <section className='cvu_alias_column-2-content'>
                    <section className='cvu_alias_column-2-cvu'>
                        <div className='cvu_alias_column-2-cvu-info'>
                            <div className='cvu_alias_column-2-cvu-title'>
                                <h2 className='cvu_alias_column-2-cvu-h2'>CVU</h2>
                            </div>
                            <div className='cvu_alias_column-2-cvu-number'>
                                <h3 className='cvu_alias_column-2-cvu-h3' id='cvu_user'>{cargandoUser ? <>Cargando</> : <>{user.cbu}</>}</h3>
                            </div>
                        </div>
                        <div className='cvu_alias_column-2-cvu-arrow'>
                            <button className='cvu_alias_column-2-cvu-arrow-size' onClick={() => copiarAlPortapapeles("cvu_user")}>COPIAR</button>
                        </div>
                    </section>

                    <section className='cvu_alias_column-2-alias'>
                        <div className='cvu_alias_column-2-alias-content'>
                           <div className='cvu_alias_column-2-alias-info'>
                                <div className='cvu_alias_column-2-alias-title'>
                                    <h2 className='cvu_alias_column-2-alias-h2'>Alias</h2>
                                </div>
                                <div className='cvu_alias_column-2-alias-name'>
                                    <h3 className='cvu_alias_column-2-alias-h3' id='alias_user'>{cargandoUser ? <>Cargando</> : <>{user.username}</>}</h3>
                                </div>
                            </div>
                            <div className='cvu_alias_column-2-alias-arrow'>
                                <button className='cvu_alias_column-2-alias-arrow-size' onClick={() => copiarAlPortapapeles("alias_user")}>COPIAR</button>
                            </div> 
                        </div>
                        <div className='cvu_alias_column-2-alias-modificar'>
                            <button className='cvu_alias_column-2-alias-modificar-bttn'>Modificar mi alias</button>
                            <div className='perfil_column-2-alias-modificar-arrow'>
                                <button className='perfil_column-2-alias-modificar-arrow-size'>&gt;</button>
                            </div>
                        </div>
                    </section>
                    <div className='cvu_alias_column-2-bttns'>
                        <div className='cvu_alias_column-2-bttn-volver'>
                            <button className='cvu_alias_column-2-bttn-volver-bttn' onClick={() => navigate("/perfil")}>VOLVER A MI PERFIL</button>
                        </div>
                        <div className='cvu_alias_column-2-bttn-volver'>
                            <button className='cvu_alias_column-2-bttn-volver-bttn' onClick={() => navigate("/dashboard")}>VOLVER A DASHBOARD</button>
                        </div>
                    </div>
                    
                </section>
            </div>

  )
}

export default Cvu_Alias
