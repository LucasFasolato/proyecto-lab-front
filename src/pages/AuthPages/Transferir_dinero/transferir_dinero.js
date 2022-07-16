import React, {useEffect, useState} from 'react'
import './transferir_dinero.css'
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import {useNavigate} from "react-router-dom";
import {httpPost} from "../../../utils/httpFunctions";

function Transferir_dinero() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [destinatario, setDestinatario] = useState("")
    const [cantidad, setCantidad] = useState("")

    const createTransfer = (e) => {
        e.preventDefault()
        httpPost('transfer', {cantidadTransferida: destinatario, cbuReceptor: Number(cantidad)}, false)
            .then((res) => {
                console.log(res)
            }).catch((err)=> alert.show('No se ha podido realizar la transferencia.',{
                type: "error"
            }))
      }
    
  return (

            <div className='transferirdinero_column-2'>
                <section className='transferirdinero_column-2-content'>
                    <section className='transferirdinero_column-2-transf'>
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
                        
                    </section>
                    <div className='transferirdinero_column-2-bttn-volver'>
                        <button className='transferirdinero_column-2-bttn-volver-bttn' onClick={() => navigate("/dashboard")}>VOLVER A MI PERFIL</button>
                    </div>
                </section>
            </div>

  )
}

export default Transferir_dinero
