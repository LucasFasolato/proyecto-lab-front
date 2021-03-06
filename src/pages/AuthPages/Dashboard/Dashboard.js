import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import Dashboard_actividad_li from '../../../components/Dashboard_actividad_li/dashboard_actividad-li';
import {httpGet} from "../../../utils/httpFunctions";
import {Link, useNavigate} from "react-router-dom";
import Arrow_Down from './../../../imgs/Arrow_down.png'
import {CircleLoader, ClipLoader, PropagateLoader, PuffLoader, BeatLoader
} from "react-spinners";

function Dashboard({setIsLoggedIn, isLoggedIn}) {
    let [color, setColor] = useState("#3b6ce1");
    const navigate = useNavigate();
    const [transferencias, setTransferencias] = useState(null)
    const [cargandoTransferencias, setCargandoTransferencias] = useState(false)
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(false);

    useEffect(() => {
        setCargandoUser(true)
        httpGet("users/me").then(res => {
            setCargandoUser(false);
            setUser(res)
            console.log(res)
        })
    }, [])

    useEffect(() => {
        setCargandoTransferencias(true)
        httpGet("transfer/me").then(res => {
            setCargandoTransferencias(false);
            setTransferencias(res)
            console.log(res)
        })
    }, [])

    function tipoTransf(transf) {
        return transf.emisor.userId == user.userId ? "emisor" : "receptor";
    }

    return (
        <>
            <div className='dashboard_column-2'>
                <section className='dashboard_column-2-content'>
                    <section className='column-2-left'>
                        <section className='column-2-left-fondos'>
                            <div className='column-2-left-fondos-info'>
                                <div className='column-2-left-fondos-info-content'>
                                    <div className='column-2-left-fondos-data'>
                                        <p className='column-2-left-fondos-data-p'>Dinero disponible</p>
                                        <h1 className='column-2-left-fondos-data-h1'>
                                            {cargandoUser ?
                                                <div className="dashboard-fondo-loading">
                                                    <BeatLoader
                                                        color={color} loading={cargandoTransferencias}
                                                                    size={10}/>
                                                </div>
                                                :
                                                <>$ {user.fondo}</>}
                                        </h1>
                                    </div>
                                    <div className='column-2-left-fondos-data'>
                                        <button className='column-2-left-fondos-cvu'
                                            onClick={() => navigate("/perfil/cvu")}>CVU y Alias
                                        </button>
                                    </div>
                                </div>
                                
                                <hr/>
                                <div className='column-2-left-fondos-inv'>
                                    <div className='column-2-left-fondos-inv-left'>
                                        <p className='column-2-left-fondos-inv-p'>Invertido</p>
                                    </div>
                                    <div className='column-2-left-fondos-inv-right'>
                                        <p className='column-2-left-fondos-inv-p'>$ 0</p>
                                    </div>

                                </div>
                            </div>
                            <hr/>
                            <div className='column-2-left-fondos-bttns'>
                                <div className='column-2-left-fondos-bttns-content'>
                                    <div className='column-2-left-fondos-bttns-size'>
                                        <button className='column-2-left-fondos-bttn'
                                                onClick={() => navigate("/perfil/ingresardinero")}>Ingresar dinero
                                        </button>
                                    </div>
                                    <div className='column-2-left-fondos-bttns-size'>
                                        <button className='column-2-left-fondos-bttn'
                                                onClick={() => navigate("/perfil/transferirdinero")}>Transferir dinero
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='column-2-left-reportesaldo'>
                            <div className='column-2-left-reportesaldo-content'>
                                <div className='column-2-left-reportesaldo-left'>
                                    <div className='column-2-left-reportesaldo-left-img'>
                                        <img className='column-2-left-reportesaldo-left-img-size' src={Arrow_Down} alt="Flecha para abajo"/>
                                    </div>
                                    <p className='column-2-left-reportesaldo-left-p'>Reporte saldo al 31/12</p>
                                </div>
                                <div className='column-2-left-reportesaldo-right'>
                                    <button className='column-2-left-reportesaldo-right-bttn'>Pedir reporte</button>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className='column-2-right'>
                        <section className='column-2-right-actividad'>
                            <div className='column-2-right-actividad-title'>
                                <h2 className='column-2-right-actividad-h2'>Tu actividad</h2>
                            </div>
                            <hr/>
                            <div className='column-2-right-actividad-searchbar'>
                                <input className='column-2-right-actividad-input' type='text' placeholder='Buscar'/>
                            </div>
                            <div className='column-2-right-actividad-content'>
                                {cargandoTransferencias ?
                                    <div className="dashboard-transferencias-loading">
                                        <BeatLoader color={color} loading={cargandoTransferencias} size={10}/>
                                    </div> :
                                    transferencias &&
                                    transferencias.map(transf => {
                                        return (
                                            <div key={transf.transferId} className='column-2-right-actividad-li'>
                                                <Dashboard_actividad_li fecha={transf.createdAt}
                                                                        cantidad={transf.cantidadTransferida}
                                                                        mailEmisor={transf.emisor.mail}
                                                                        mailReceptor={transf.receptor.mail}
                                                                        tipo={tipoTransf(transf)}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>


                            <hr/>
                        </section>
                    </section>
                </section>
                <hr/>
                <div className='dashboard_terms'>
                    <p className='dashboard_terms-p'>
                        <span>Lucas Daniel Fasolato ?? ??ltimo ingreso: 6 abr 2022 ?? 12:17 hs.</span>
                        <br/>
                        <span>Mercado Pago ofrece servicios de pago y no est?? autorizado por el Banco Central a operar como entidad financiera. </span>
                        <span>Los fon   dos acreditados en cuentas de pago no constituyen dep??sitos en una entidad financiera ni est??n garantizados conforme legislaci??n aplicable a dep??sitos en entidades financieras.</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
