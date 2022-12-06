import React, {useEffect, useState} from 'react'
import './invertir_dinero.css'
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import {Link, useNavigate} from "react-router-dom";
import {httpGet} from "../../../utils/httpFunctions";
import {BeatLoader} from "react-spinners";
import TableCripto from './TableCripto';

function Invertir_dinero({token}) {
    const accionesEjemplo = ["Tesla TSLA, Google GOOG, Apple AAPL, Amazon AMZN"]

    let [total, setTotal] = useState(0);
    let [color, setColor] = useState("#3b6ce1");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cargandoCotizaciones, setCargandoCotizaciones] = useState(false)
    const [cotizaciones, setCotizaciones] = useState([])
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(false);
    const [cantidadPagina2, setCantidadPagina2] = useState(7);
    const [nroPagina2, setNroPagina2] = useState(0);
    const [Portfolio, setPortfolio] = useState(false)
    const [cargandoPortfolio, setCargandoPortfolio] = useState(false)


    useEffect(() => {
        setCargandoUser(true)
        httpGet("auth/users/me", token).then(res => {
            setCargandoUser(false);
            setUser(res)
            console.log(res)
        })
    }, [])
    
    useEffect(() => {
        setCargandoPortfolio(true)
        httpGet(`auth/instrumentos/portfolio?nroPag=${nroPagina2}&pageSize=${cantidadPagina2}`).then(res => {
            setCargandoPortfolio(false);
            setPortfolio(res)
            calcularTotal(res)
        })
    }, [])


    useEffect(() => {
        setCargandoCotizaciones(true)
        let instrumentosSymbol = ["TSLA", "GOGL", "AAPL", "AMZN"];
        let promises = []
        instrumentosSymbol.forEach(instrmento => {
            promises.push(httpGet("auth/instrumentos/lastprice?symbol=" + instrmento))
        })
        Promise.all(promises).then(res => {

            let promiseResult = res
            let cotizacionesForState = []

            for (let i = 0; i < instrumentosSymbol.length; i++) {
                cotizacionesForState.push({
                    symbol: instrumentosSymbol[i],
                    price: promiseResult[i]
                })
            }
            setCotizaciones(cotizacionesForState)
            setCargandoCotizaciones(false)
        })
    }, [])

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
                                        <>$ {total}</>}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className='container_buttons'>
                            <button onClick={() => navigate("/perfil/compraraccion")} className='buttonleftcolum'>Comprar instrumento</button>
                        </div>
                        <div className='container_buttons'>
                            <button onClick={() => navigate("/perfil/portfolio")} className='buttonleftcolum'>Ver mi portfolio</button>
                        </div>
                    </div>
                    <div className='container_buttonback'>
                        <button className='buttonback' onClick={() => navigate("/dashboard")}>VOLVER ATRAS</button>
                    </div>
                </div>
                <div className='container_right'>
                    {cargandoCotizaciones &&
                    <p>spiner</p>
                    }
                    {!cargandoCotizaciones &&
                    <TableCripto cotizaciones={cotizaciones}/>
                    }
                </div>
            </div>

  )
}

export default Invertir_dinero
