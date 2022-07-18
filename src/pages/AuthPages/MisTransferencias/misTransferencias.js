import React, {useEffect, useState} from 'react';
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import Dashboard_actividad_li from '../../../components/Dashboard_actividad_li/dashboard_actividad-li';
import {httpGet} from "../../../utils/httpFunctions";
import {Link, useNavigate} from "react-router-dom";
import {CircleLoader, ClipLoader, PropagateLoader, PuffLoader, BeatLoader} from "react-spinners";
import './misTransferencias.css';

function MisTransferencias(props) {
    let [color, setColor] = useState("#3b6ce1");
    const navigate = useNavigate();
    const [transferencias, setTransferencias] = useState(null)
    const [transferenciasRecibidas, setTransferenciasRecibidas] = useState(null)
    const [transferenciasEmitidas, setTransferenciasEmitidas] = useState(null)
    // const [mostrarAllTransferencias, setMostrarAllTransferencias] = useState(true)
    // const [mostrarTransferenciasRecibidas, setMostrarTransferenciasRecibidas] = useState(false)
    // const [mostrarTransferenciasEmitidas, setMostrarTransferenciasEmitidas] = useState(false)
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

    useEffect(() => {
        setCargandoTransferencias(true)
        httpGet("transfer/recibidas").then(res => {
            setCargandoTransferencias(false);
            setTransferenciasRecibidas(res)
            console.log(res)
        })
    }, [])

    useEffect(() => {
        setCargandoTransferencias(true)
        httpGet("transfer/emitidas").then(res => {
            setCargandoTransferencias(false);
            setTransferenciasEmitidas(res)
            console.log(res)
        })
    }, [])

    function tipoTransf(transf) {
        return transf.emisor.userId == user.userId ? "emisor" : "receptor";
    }

    function showTransfer () {
        return (
            <>
            {cargandoTransferencias ?
                <div className="dashboard-transferencias-loading">
                    <BeatLoader color={color} loading={cargandoTransferencias} size={10}/>
                </div> :
                transferencias &&
                transferencias.map(transf => {
                    return (
                        <div key={transf.transferId} className='column-2-actividad-li'>
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
            </>
        
        )
    }

    return (
        <>
            <div className='dashboard_column-2'>
                <section className='dashboard_column-2-content'>
                    <section className='column-2'>
                        <section className='column-2-actividad'>
                            <div className='column-2-actividad-title'>
                                <div className='column-2-actividad-text'>
                                    <h2 className='column-2-actividad-h2'>Tus transferencias</h2>
                                </div>
                                
                                <div className='column-2-actividad-bttns'>
                                    <button className='column-2-actividad-bttn-size' onClick={() => setTransferencias(transferenciasEmitidas)}>
                                        Emitidas
                                    </button>
                                    <button className='column-2-actividad-bttn-size' onClick={() => setTransferencias(transferenciasRecibidas)}>
                                        Recibidas
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className='column-2-actividad-searchbar'>
                                <input className='column-2-actividad-input' type='text' placeholder='Buscar transferencias'/>
                            </div>
                            <div className='column-2-actividad-content'>
                                {showTransfer()}
                            </div>
                            <hr/>
                        </section>
                    </section>
                </section>
                <hr/>
                <div className='dashboard_terms'>
                    <p className='dashboard_terms-p'>
                        <span>Lucas Daniel Fasolato · Último ingreso: 6 abr 2022 · 12:17 hs.</span>
                        <br/>
                        <span>Mercado Pago ofrece servicios de pago y no está autorizado por el Banco Central a operar como entidad financiera. </span>
                        <span>Los fon   dos acreditados en cuentas de pago no constituyen depósitos en una entidad financiera ni están garantizados conforme legislación aplicable a depósitos en entidades financieras.</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default MisTransferencias;
