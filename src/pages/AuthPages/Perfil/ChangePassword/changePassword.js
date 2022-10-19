import React, {useEffect, useState} from 'react'
import './changePassword.css'
import {useNavigate} from "react-router-dom";
import {httpPut,httpGet} from "../../../../utils/httpFunctions";
import {CircleLoader, ClimbingBoxLoader, PropagateLoader} from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Changepassword({token}) {

    let [color, setColor] = useState("#3b6ce1");
    const [actualPassword, setActualPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [reNewPassword, setReNewPassword] = useState("")
    const [modificandoPassword, setModificandoPassword] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(true);

    useEffect(() => {
        setCargandoUser(true)
        httpGet("auth/users/me",token).then(res => {
            setCargandoUser(false);
            setUser(res)
            console.log(res)
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
        setTimeout(() => setModificandoPassword(false) , 100);
    }


    const modifyPassword = (e) => {
        setModificandoPassword(true);
        // CAMBIAR ESTO, PONGO MAIL PQ NO SE COMO TRAER LA CONTRASEÑA
        if(String(actualPassword)!==String(user.mail)) {
            toast.warning("La contraseña actual no es correcta.", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            setTimeout(() => setModificandoPassword(false) , 100);
        } else {
            if(String(newPassword)!==String(reNewPassword))
            {
                toast.warning("Las contraseñas no son iguales. Confirme el ingreso de su nueva contraseña", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                setTimeout(() => setModificandoPassword(false) , 100);
            } else {
                if((newPassword.length < 8)||(reNewPassword.length < 8)) {
                    toast.warning("La contraseña debe contener mínimo 8 caracteres.", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    setTimeout(() => setModificandoPassword(false) , 100);
                } else {
                    if((newPassword===reNewPassword) && (String(actualPassword)===String(user.mail))) {
                        e.preventDefault()
                        httpPut('users/edit/me', {password: String(newPassword)}, false)
                            .then((res) => {
                                setModificandoPassword(false)
                                console.log(res)
                                if (res.statusCode === "200" ){
                                    localStorage.clear();
                                    localStorage.setItem('user', window.btoa(user.username + ":" + newPassword.toString()));
                                    changed();
                                } else {
                                    rechazada();
                                }
                            }).catch((err)=> rechazada())
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
                                    <h3 className='changePassword_column-2-transf-h3'>Ingrese su mail</h3>
                                    <input type="text" className='changePassword_column-2-transf-input' placeholder='Ingrese el mail de su cuenta' 
                                    value={actualPassword} onChange={(e) => setActualPassword(e.target.value)}/>
                                </div>
                                <div className='changePassword_column-2-transf-monto'>
                                    <h3 className='changePassword_column-2-transf-h3'>Contraseña nueva</h3>
                                    <input type="password" className='changePassword_column-2-transf-input' placeholder='Ingrese la contraseña nueva'
                                    value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                                </div>
                                <div className='changePassword_column-2-transf-monto'>
                                    <h3 className='changePassword_column-2-transf-h3'>Confirmar contraseña</h3>
                                    <input type="password" className='changePassword_column-2-transf-input' placeholder='Reingrese la contraseña nueva'
                                    value={reNewPassword} onChange={(e) => setReNewPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className='changePassword_column-2-bttn-enviar'>
                                <button type='submit' className='changePassword_column-2-bttn-enviar-bttn'>CONFIRMAR CONTRASEÑA</button>
                            </div>
                        </form>
                        }
                        {modificandoPassword &&
                        <div className='changePassword_column-2-transf-modificando'>
                            <h2 className='changePassword_column-2-transf-h2'>Modificando contraseña...</h2>
                            <div className="changePassword-loading">
                                <PropagateLoader color={color} loading={modificandoPassword} size={10}/>
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
