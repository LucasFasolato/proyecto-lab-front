import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './../Login/login.css'
import {useNavigate} from "react-router-dom";
import {useRef, useState} from 'react';
import {httpPost} from "../../utils/httpFunctions";
import {ClipLoader} from "react-spinners";


function Register() {
    const [errores, setErrores] = useState(false)
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#000000");
    const navigate = useNavigate();
    const rePassword = useRef();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    function enableInput() {
        console.log("INPUT HABILITADO");
    }

    async function handleRegister(e) {
        e.preventDefault();
        setLoading(true);
        const data = {
            mail: email,
            username: name,
            password: password
        }
        const dataJson = JSON.stringify(data);
        let response = await httpPost("users/register", dataJson, true)
        if (response.request.status == 201) {
            setLoading(false)
            console.log("creado")
            console.log(response);
            navigate("/login");
            setErrores(false)
        } else {
            console.log(response)
            console.log("invalido")
            setLoading(false)
            setErrores(true)
        }

    }

    return (
        <div>
            <div className='content-form'>
                <h1>REGISTRARSE</h1>
                {loading &&
                <div className="sweet-loading">

                    <ClipLoader color={color} loading={loading} size={150}/>
                </div>
                }
                {errores &&
                <>
                    <div>ERRORES</div>
                    <div>ERRORES</div>
                    <div>ERRORES</div>
                    <div>ERRORES</div>
                </>

                }
                {!loading &&
                <div className='display-form'>
                    <Form onSubmit={(e) => handleRegister(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Correo" value={email}
                                          onChange={(e) => setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control type="text" placeholder="Nombre de usuario" value={name}
                                          onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => {
                                enableInput();
                                setPassword(e.target.value)
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRePassword">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Confirmar contraseña" ref={rePassword}
                                          value={repassword} onChange={(e) => setRepassword(e.target.value)}/>
                        </Form.Group>
                        <div className='display-button'>
                            <div className='display-button-register'>
                                <Button variant="secondary" type="button" onClick={() => navigate("/login")}>
                                    Iniciar sesión
                                </Button>
                            </div>
                            <div className='display-button-sig'>
                                <Button variant="primary" type="submit">
                                    Siguiente
                                </Button>
                            </div>

                        </div>

                    </Form>
                </div>
                }
            </div>
        </div>

    )
}

export default Register
