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

function Dashboard({setIsLoggedIn, isLoggedIn, token}) {
    let [color, setColor] = useState("#3b6ce1");
    const navigate = useNavigate();
    const [transferencias, setTransferencias] = useState(null)
    const [cantidadPagina, setCantidadPagina] = useState(10)
    const [nroPagina, setNroPagina] = useState(1)
    const [cargandoTransferencias, setCargandoTransferencias] = useState(false)
    const [cargandoMasTransferencias, setCargandoMasTransferencias] = useState(false)
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(false);

    const myDiv = document.getElementById("column-2-right-actividad-content")

    const onScroll = () => {
        // console.log(Math.round(myDiv.scrollHeight - myDiv.scrollTop));
        // console.log(Math.round(myDiv.clientHeight));
        if (Math.round(myDiv.scrollHeight - myDiv.scrollTop) === Math.round(myDiv.clientHeight)) {
            scrolled();
        }

    };

    function scrolled() {
        if (token) {
            httpGet(`auth/transfer/me?nroPag=${nroPagina}&pageSize=${cantidadPagina}`, token).then(res => {
                setTransferencias(prevState => {
                    return [...prevState, ...res]
                })
            })
        }

    }

    useEffect(() => {
        if (token != null) {
            httpGet("auth/users/me", token).then(res => {
                console.log("ADSADASDASD")
                setUser(res)
                console.log(res)
            })
        }

    }, [])

    useEffect(() => {
        if (token) {
            httpGet(`auth/transfer/me?nroPag=${nroPagina}&pageSize=${cantidadPagina}`, token).then(res => {
                setTransferencias(res)
            })
        }

    }, [])

    function tipoTransf(transf) {
        return transf.emisor.userId == user.userId ? "emisor" : "receptor";
    }

    // myDiv.addEventListener('scroll', () => {  
    //     if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {  
    //       console.log('scrolled to bottom')  
    //     }  
    //   })


    // function showButton(e) {
    //     return (
    //         <div className='dashboard_div-moreoptions'>
    //             <button className='dashboard_bttn-moreoptions'>Ver más transferencias</button>
    //         </div>
    //     )
    // }


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
                                        <img className='column-2-left-reportesaldo-left-img-size' src={Arrow_Down}
                                             alt="Flecha para abajo"/>
                                    </div>
                                    <p className='column-2-left-reportesaldo-left-p'>Reporte saldo al 31/12</p>
                                </div>
                                <div className='column-2-left-reportesaldo-right'>
                                    <button className='column-2-left-reportesaldo-right-bttn'><a
                                        href='http://168.138.228.14:8080/api/auth/transfer/export/pdf'>Pedir
                                        reporte</a></button>
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
