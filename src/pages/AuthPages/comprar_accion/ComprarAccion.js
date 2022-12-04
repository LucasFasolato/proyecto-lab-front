import React, {useEffect, useState} from 'react'
import './comprarAccion.css'
import {useNavigate, useParams} from "react-router-dom";
import {httpPut, httpGet, httpPost} from "../../../utils/httpFunctions";
import {CircleLoader, ClimbingBoxLoader, ClipLoader, PropagateLoader} from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ComprarAccion({token}) {

    let [color, setColor] = useState("#3b6ce1");

    const [montoTotal, setMontoTotal] = useState(null)
    const [symbolName, setSymbolName] = useState("")
    const [instrumentPrice, setInstrumentPrice] = useState(null)
    const [cantidadInstrumentos, setCantidadInstrumentos] = useState("")
    const [comprarAccion, setComprarAccion] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(true);
    const [cargandoInstrumento, setCargandoInstrumento] = useState(false)
    const [symbolNameError, setSymbolNameError] = useState("")
    const {paramSymbol} = useParams()

    useEffect(() => {
        if (paramSymbol) {
            setSymbolName(paramSymbol)
            setCargandoInstrumento(true)
            httpGet("auth/instrumentos/lastprice?symbol="+paramSymbol).then(res => {
                setInstrumentPrice(res)
                setCargandoInstrumento(false)
                setSymbolNameError("")
            }).catch(err => {
                setSymbolNameError("Instrumento no encontrado")
                setCargandoInstrumento(false)
                setInstrumentPrice("")
            })
        }
    }, [])


    const lostFocusHandler = (e) => {
        setCargandoInstrumento(true)
        httpGet("auth/instrumentos/lastprice?symbol="+symbolName).then(res => {
            setInstrumentPrice(res)
            setCargandoInstrumento(false)
            setSymbolNameError("")
        }).catch(err => {
            setSymbolNameError("Instrumento no encontrado")
            setCargandoInstrumento(false)
            setInstrumentPrice("")
        })
    }

    useEffect(() => {
        setCargandoUser(true)
        httpGet("auth/users/me",token).then(res => {
            setCargandoUser(false);
            setUser(res)
        })
    }, [])


    const handleCantidadInput = (e) => {
        setCantidadInstrumentos(e.target.value)
        setMontoTotal((e.target.value * instrumentPrice).toFixed(2))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (symbolNameError !== "" || symbolName == "") {
            toast.error("Debe ingresar un símbolo antes de comprar", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            setSymbolNameError("No puede estar vacío")
            return
        }

        const data = {
            symbol: symbolName,
            quantity: cantidadInstrumentos
        }
        httpPost("auth/instrumentos/buy",data).then(res => {
            toast.success("Compra realizada existosamente", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            navigate("/perfil/portfolio")
        }).catch(err => {
            toast.error("Hubo un error en la compra", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        })
    }

    const changed = () => {
        toast.success("Contraseña modificada correctamente", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };


    const rechazada = () => {
        toast.error("Contraseña no modificada", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        setTimeout(() => setComprarAccion(false) , 100);
    }


    return (
        <div className='comprarAccion_column-2'>
            <section className='comprarAccion_column-2-content'>
                <section className='comprarAccion_column-2-transf'>
                    {!comprarAccion &&
                    <form className='comprarAccion_column-2-transf-form' onSubmit={handleSubmit}>
                        <div className='comprarAccion_column-2-transf-info'>
                            <div className='comprarAccion_column-2-transf-title'>
                                <h2 className='comprarAccion_column-2-transf-h2'>Comprar instrumento</h2>
                            </div>
                            <div className='comprarAccion_column-2-transf-dest'>
                                <h3 className='comprarAccion_column-2-transf-h3'>Ingrese el simbolo del instrumento</h3>
                                <div className='comprarACcion_isntrumento_spinner_container'>
                                    <ClipLoader
                                        color={color}
                                        loading={cargandoInstrumento}
                                        size={25}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                </div>

                                {!cargandoInstrumento &&
                                    <><input type="text" className='comprarAccion_column-2-transf-input' placeholder='Ej: TSLA'
                                             value={symbolName} onChange={(e) => setSymbolName(e.target.value)}
                                             onBlur={(e) => lostFocusHandler(e)}/>
                                        <p className='comprarAccion_error_msg'>{symbolNameError}</p></>
                                }
                            </div>
                            <div className='comprarAccion_column-2-transf-monto'>
                                <h3 className='comprarAccion_column-2-transf-h3'>Cantidad </h3>
                                <input type="text" className='comprarAccion_column-2-transf-input' placeholder='Ej: 10'
                                       value={cantidadInstrumentos} onChange={(e) => handleCantidadInput(e)}/>
                            </div>

                            <div className='comprarAccion_column-2-transf-monto'>
                                <h3 className='comprarAccion_column-2-transf-h3'>Valor actual</h3>
                                <div className='comprarACcion_isntrumento_spinner_container'>
                                    <ClipLoader
                                        color={color}
                                        loading={cargandoInstrumento}
                                        size={25}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                </div>
                                {!cargandoInstrumento &&
                                <><input disabled={true} type="text" className='comprarAccion_column-2-transf-input'
                                         value={instrumentPrice} /></>
                                }
                            </div>
                            <div className='comprarAccion_column-2-transf-monto'>
                                <h3 className='comprarAccion_column-2-transf-h3'>Monto total </h3>
                                <input disabled={true} type="text" className='comprarAccion_column-2-transf-input'
                                       value={montoTotal}/>
                            </div>
                        </div>
                        <div className='comprarAccion_column-2-bttn-enviar'>
                            <button type='submit' className='comprarAccion_column-2-bttn-enviar-bttn'>COMPRAR</button>
                        </div>
                    </form>
                    }
                    {comprarAccion &&
                    <div className='comprarAccion_column-2-transf-modificando'>
                        <h2 className='comprarAccion_column-2-transf-h2'>Modificando contraseña...</h2>
                        <div className="comprarAccion-loading">
                            <PropagateLoader color={color} loading={comprarAccion} size={10}/>
                        </div>
                    </div>
                    }
                </section>
                <div className='transferirdinero_column-2-bttn-volver'>
                    <button className='transferirdinero_column-2-bttn-volver-bttn' onClick={() => navigate("/perfil")}>VOLVER A MI PERFIL</button>
                </div>
            </section>
        </div>

    )
}

export default ComprarAccion
