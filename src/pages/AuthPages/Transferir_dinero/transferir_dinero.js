import React, {useEffect, useState} from 'react'
import './transferir_dinero.css'
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import {useNavigate} from "react-router-dom";
import {httpPost} from "../../../utils/httpFunctions";
import {CircleLoader, ClimbingBoxLoader, PropagateLoader} from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Transferir_dinero({token}) {

    let [color, setColor] = useState("#3b6ce1");
    const [estadoTransferencia, setEstadoTransferencia] = useState(false)
    const [enviandoTransferencia, setEnviandoTransferencia] = useState(false);
    const navigate = useNavigate();
    const [destinatario, setDestinatario] = useState("")
    const [cantidad, setCantidad] = useState("")

    const enviada = () => {
        toast.success("Transferencia enviada correctamente", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    const rechazada = () => {
        toast.error("Transferencia no realizada", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }


    const createTransfer = (e) => {
        setEnviandoTransferencia(true);
        e.preventDefault()
        httpPost('auth/transfer', {cantidadTransferida: Number(cantidad), cbuReceptor: destinatario})
            .then((res) => {
                setEnviandoTransferencia(false)
                console.log(res)
                if (res.request.status === 201) {
                    enviada()
                } else {
                    rechazada()
                }


            }).catch((err)=> alert.show('No se ha podido realizar la transferencia.',{
                type: "error"
            }))
      }
    
  return (

            <div className='transferirdinero_column-2'>
                <section className='transferirdinero_column-2-content'>
                    <section className='transferirdinero_column-2-transf'>
                        {!enviandoTransferencia &&
                        <form className='transferirdinero_column-2-transf-form' onSubmit={(e) => createTransfer(e)}>
                            <div className='transferirdinero_column-2-transf-info'>
                                <div className='transferirdinero_column-2-transf-title'>
                                    <h2 className='transferirdinero_column-2-transf-h2'>Transferir dinero</h2>
                                </div>
                                <div className='transferirdinero_column-2-transf-dest'>
                                    <h3 className='transferirdinero_column-2-transf-h3'>Destinatario</h3>
                                    <input type="text" className='transferirdinero_column-2-transf-input' placeholder='Ingrese CVU/CBU o Alias del destinatario' 
                                    value={destinatario} onChange={(e) => setDestinatario(e.target.value)}/>
                                </div>
                                <div className='transferirdinero_column-2-transf-monto'>
                                    <h3 className='transferirdinero_column-2-transf-h3'>Cantidad</h3>
                                    <input type="text" className='transferirdinero_column-2-transf-input' placeholder='Ingrese la cantidad de dinero a transferir' 
                                    value={cantidad} onChange={(e) => setCantidad(e.target.value)}/>
                                </div>
                                
                            </div>
                            <div className='transferirdinero_column-2-bttn-enviar'>
                                <button type='submit' className='transferirdinero_column-2-bttn-enviar-bttn'>CONFIRMAR TRANSFERENCIA</button>
                            </div>
                        </form>
                        }
                        {enviandoTransferencia &&
                        <div className='transferirdinero_column-2-transf-title'>
                            <h2 className='transferirdinero_column-2-transf-h2'>Enviando transferencia...</h2>
                            <div className="creando-transferencia-loading">
                                <PropagateLoader color={color} loading={enviandoTransferencia} size={17}/>
                            </div>
                        </div>
                        }
                        
                    </section>
                    <div className='transferirdinero_column-2-bttn-volver'>
                        <button className='transferirdinero_column-2-bttn-volver-bttn' onClick={() => navigate("/dashboard")}>VOLVER AL DASHBOARD</button>
                    </div>
                </section>
            </div>

  )
}

export default Transferir_dinero
