import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import Dashboard_actividad_li from '../../../components/Dashboard_actividad_li/dashboard_actividad-li';
import {httpGet} from "../../../utils/httpFunctions";
import {Link, useNavigate} from "react-router-dom";
import Arrow_Down from './../../../imgs/Arrow_down.png'
import {
    CircleLoader, ClipLoader, PropagateLoader, PuffLoader, BeatLoader
} from "react-spinners";
import {useAuth0} from "@auth0/auth0-react";

function Dashboard() {
    let [total, setTotal] = useState(0);
    let [color, setColor] = useState("#3b6ce1");
    const navigate = useNavigate();
    const [transferencias, setTransferencias] = useState(null)
    const [cantidadPagina, setCantidadPagina] = useState(10)
    const [nroPagina, setNroPagina] = useState(0)
    const [cargandoTransferencias, setCargandoTransferencias] = useState(false)
    const [cargandoMasTransferencias, setCargandoMasTransferencias] = useState(false)
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(false);
    const {isAuthenticated} = useAuth0()
    const myDiv = document.getElementById("column-2-right-actividad-content")
    const [Portfolio, setPortfolio] = useState([])
    const [cargandoPortfolio, setCargandoPortfolio] = useState(false)
    const [cantidadPagina2, setCantidadPagina2] = useState(7);
    const [nroPagina2, setNroPagina2] = useState(0);


    const onScroll = () => {
        // console.log(Math.round(myDiv.scrollHeight - myDiv.scrollTop));
        // console.log(Math.round(myDiv.clientHeight));
        if (Math.round(myDiv.scrollHeight - myDiv.scrollTop) === Math.round(myDiv.clientHeight)) {
            scrolled();
        }

    };

    function scrolled() {
        if (isAuthenticated) {
            httpGet(`auth/transfer/me?nroPag=${nroPagina}&pageSize=${cantidadPagina}`).then(res => {
                setTransferencias(prevState => {
                    return [...prevState, ...res]
                })
            })
        }

    }

    useEffect(() => {
        setCargandoPortfolio(true)
        httpGet(`auth/instrumentos/portfolio?nroPag=${nroPagina2}&pageSize=${cantidadPagina2}`).then(res => {
            setCargandoPortfolio(false);
            setPortfolio(res)
            calcularTotal(res)
        })
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            httpGet("auth/users/me").then(res => {
                setUser(res)
                console.log(res)
            })
        }

    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            httpGet(`auth/transfer/me?nroPag=${nroPagina}&pageSize=${cantidadPagina}`).then(res => {
                setTransferencias(res)
            })
        }

    }, [])

    let handlePdfRequest = (e) => {
        httpGet("auth/transfer/export/pdf", true).then(res => {
            window.download(res)
        })
    }

    function tipoTransf(transf) {
        return transf.emisor.userId == user.userId ? "emisor" : "receptor";
    }
    function calcularTotal (res) {
        res.forEach(port => {{
            let intcant = parseFloat(port.actualQuaintity,10);
            let intprecio = parseFloat(port.currentPrice,10);
                if(port.result > 0) {
                    setTotal(total + intprecio * intcant);
                }
                console.log(total)
        }})
    }
    
        

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let newdate = day + "/" + month + "/" +  year;

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
                                        <button className='column-2-left-inv-bttn'
                                                onClick={() => navigate("/perfil/invertirdinero")}>Invertir dinero
                                        </button>

                                    </div>
                                    <div className='column-2-left-fondos-inv-right'>
                                        <p className='column-2-left-fondos-inv-p'>Invertido</p>
                                        <p className='column-2-left-fondos-inv-p2'>$ {total}</p>
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
                                        <img className='column-2-left-reportesaldo-left-img-size' src={Arrow_Down}
                                             alt="Flecha para abajo"/>
                                    </div>
                                    <p className='column-2-left-reportesaldo-left-p'>Reporte saldo al {newdate}</p>
                                </div>
                                <div className='column-2-left-reportesaldo-right'>
                                    <button onClick={handlePdfRequest} className='column-2-left-reportesaldo-right-bttn'>
                                        Pedir reporte</button>
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
                            <div className='column-2-right-actividad-content' id="column-2-right-actividad-content"
                                 onScroll={onScroll}>
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
                                                                        avatarEmisor={transf.emisor.avatar}
                                                                        avatarReceptor={transf.receptor.avatar}
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
                        <span>Lucas Daniel Fasolato · Último ingreso: 6 abr 2022 · 12:17 hs.</span>
                        <br/>
                        <span>Mercado Pago ofrece servicios de pago y no está autorizado por el Banco Central a operar como entidad financiera. </span>
                        <span>Los fon   dos acreditados en cuentas de pago no constituyen depósitos en una entidad financiera ni están garantizados conforme legislación aplicable a depósitos en entidades financieras.</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
