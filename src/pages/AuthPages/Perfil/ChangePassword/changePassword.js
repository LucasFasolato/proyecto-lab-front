import React, {useEffect, useState} from 'react'
import './changePassword.css'
import Dashboard_menu from '../../../../components/Dashboard_menu/dashboard_menu';
import {useNavigate} from "react-router-dom";
import {httpPut,httpGet} from "../../../../utils/httpFunctions";
import {CircleLoader, ClimbingBoxLoader, PropagateLoader} from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Changepassword() {

    let [color, setColor] = useState("#3b6ce1");
    const [estadoPassword, setEstadoPassword] = useState(false)
    const [actualPassword, setActualPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [reNewPassword, setReNewPassword] = useState("")
    const [modificandoPassword, setModificandoPassword] = useState(false);
    const navigate = useNavigate();
    const [destinatario, setDestinatario] = useState("")
    const [cantidad, setCantidad] = useState("")

    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(true);

    useEffect(() => {
        setCargandoUser(true)
        httpGet("users/me").then(res => {
            setCargandoUser(false);
            setUser(res)
            console.log(res)
            toast.success("Usuario cargado correctamente", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        })
    }, [])

    const changed = () => {
        toast.success("Contraseña modificada correctamente", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    const rechazada = () => {
        toast.error("Contraseña no modificada", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }


    const modifyPassword = (e) => {
        setModificandoPassword(true);
        if((newPassword==="")||(reNewPassword==="")||(newPassword.length < 8)||(reNewPassword.length < 8)) {
            toast.error("Error. La contraseña debe contener mínimo 8 caracteres.", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
        else {
            // CAMBIAR ESTO, PONGO MAIL PQ NO SE COMO TRAER LA CONTRASEÑA
            if((newPassword===reNewPassword) && (actualPassword===user.mail)) {
                e.preventDefault()
                httpPut('users/edit/me', {password: newPassword})
                    .then((res) => {
                        setModificandoPassword(false)
                        console.log(res)
                        if (res.request.status === 201) {
                            changed()
                        } else {
                            rechazada()
                        }
                    }).catch((err)=> alert('No se ha podido modificar la contraseña.',{
                        type: "error"
                    }))
            } 
            else {
                if(newPassword!==reNewPassword)
                {
                    toast.error("Error. Las contraseñas no son iguales. Confirme el ingreso de su nueva contraseña", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                }
                else {
                    // CAMBIAR ESTO, PONGO MAIL PQ NO SE COMO TRAER LA CONTRASEÑA
                    if(actualPassword!==user.mail) {
                        toast.error("Error. La contraseña actual no es correcta.", {
                            position: toast.POSITION.BOTTOM_RIGHT,
                        });
                    }
                }  
            }
        }
      }
    
  return (
            <div className='changePassword_column-2'>
                <section className='changePassword_column-2-content'>
                    <section className='changePassword_column-2-transf'>
                        {!modificandoPassword &&
                        <form className='changePassword_column-2-transf-form' onSubmit={(e) => modifyPassword(e)}>
                            <div className='changePassword_column-2-transf-info'>
                                <div className='changePassword_column-2-transf-title'>
                                    <h2 className='changePassword_column-2-transf-h2'>Modificar contraseña</h2>
                                </div>
                                <div className='changePassword_column-2-transf-dest'>
                                    <h3 className='changePassword_column-2-transf-h3'>Contraseña actual</h3>
                                    <input type="text" className='changePassword_column-2-transf-input' placeholder='Ingrese la contraseña actual' 
                                    value={actualPassword} onChange={(e) => setActualPassword(e.target.value)}/>
                                </div>
                                <div className='changePassword_column-2-transf-monto'>
                                    <h3 className='changePassword_column-2-transf-h3'>Contraseña nueva</h3>
                                    <input type="text" className='changePassword_column-2-transf-input' placeholder='Ingrese la contraseña nueva' 
                                    value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                                </div>
                                <div className='changePassword_column-2-transf-monto'>
                                    <h3 className='changePassword_column-2-transf-h3'>Confirmar contraseña</h3>
                                    <input type="text" className='changePassword_column-2-transf-input' placeholder='Reingrese la contraseña nueva' 
                                    value={reNewPassword} onChange={(e) => setReNewPassword(e.target.value)}/>
                                </div>
                                
                            </div>
                            <div className='changePassword_column-2-bttn-enviar'>
                                <button type='submit' className='changePassword_column-2-bttn-enviar-bttn'>CONFIRMAR CONTRASEÑA</button>
                            </div>
                        </form>
                        }
                        {modificandoPassword &&
                        <div className='changePassword_column-2-transf-title'>
                            <h2 className='changePassword_column-2-transf-h2'>Modificando contraseña...</h2>
                            <div className="creando-changePassword-loading">
                                <PropagateLoader color={color} loading={modificandoPassword} size={17}/>
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

export default Changepassword
