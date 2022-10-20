import React, {useEffect, useState} from 'react'
import './resenaUser.css'
import {Link, useNavigate} from "react-router-dom";
import {httpGet,httpPost} from "../../../../utils/httpFunctions";
import {formatDate, makeAvatarUrl} from "../../../../utils/helpers";
import {BeatLoader} from "react-spinners";
import placeholder from "./../placeholder.jpg";
import StartRating from '../../../../components/StartRating/startRating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ResenaUSer({isLoggedIn, setIsLoggedIn}) {
    let [color, setColor] = useState("#3b6ce1");
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(true);
    const [enviandoResena, setEnviandoResena] = useState(true);
    const [starRating, setStarRating] = useState(0);
    const [comment, setComment] = useState("");

    useEffect(() => {
        setCargandoUser(true)
        httpGet("auth/users/me").then(res => {
            setCargandoUser(false);
            setUser(res)
            console.log(res)
        })
    }, [])

    const enviada = () => {
        toast.success("Reseña enviada correctamente", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    const rechazada = () => {
        toast.error("Error al subir su reseña", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }


    const createResena = (e) => {
        setEnviandoResena(true);
        console.log(starRating)
        console.log(comment)
        e.preventDefault()
        if(comment.length >= 10)
        {
            if(starRating != 0) {
                httpPost('resena', {resena: comment, puntuacion: starRating}, false)
                    .then((res) => {
                        setEnviandoResena(false)
                        console.log(res)
                        if (res.request.status === 201) {
                            enviada()
                        } else {
                            rechazada()
                        }


                    }).catch((err)=> alert.show('No se ha podido realizar la transferencia.',{
                        type: "error"
                    }))
            }   else {
                toast.error("La valoracion no puede ser 0. Por favor ingrese una valoracion y vuelva a intentar", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
        }   else {
            toast.error("El comentario debe tener más de 10 caracteres", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    }
        

    return (

        <div className='resenauser_column-2'>
            <section className='resenauser_column-2-content'>
                <section className='resenauser_column-2-user'>
                    <div className='resenauser_column-2-user-val'>
                        <h3 className='resenauser_column-2-user-h3'>Valoración</h3>
                        <div className='resenauser_column-2-user-stars'>
                            <StartRating setStarRating={setStarRating}/>
                        </div>
                        <div className='resenauser_column-2-user-stars-value'>{starRating}/5</div>
                    </div>
                    <div className='resenauser_column-2-user-comment'>
                        <h3 className='resenauser_column-2-user-h3'>Comentario</h3>
                        <textarea className='resenauser_column-2-user-input' placeholder='Deja tu opinión sobre la página' type="text" onChange={(e) => setComment(e.target.value)}/>
                    </div>
                    
                    <div className='resenauser_column-2-user-changepassword'>
                        <button className='resenauser_column-2-user-changepassword-bttn' onClick={(e) => createResena(e)}>
                            Enviar
                        </button>
                    </div>
                </section>
            </section>
        </div>

    )
}

export default ResenaUSer
