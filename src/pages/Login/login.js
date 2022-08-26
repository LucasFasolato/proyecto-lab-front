import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './login.css'
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {httpGet, httpPost, login} from "../../utils/httpFunctions";
import {CircleLoader, ClipLoader, GridLoader} from "react-spinners";
import axios from "axios";


function Login({setIsLoggedIn, isLoggedIn}) {
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#3b6ce1");
    const redirect = useLocation().state;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(false);
    const navigate = useNavigate();

    // LIBRERIA PARA EL SPINER
    // https://www.davidhu.io/react-spinners/


    const handleEmail = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        let response = await login(username, password);
        if (response.request.status == 200) {
            localStorage.setItem('user', window.btoa(username + ":" + password));
            setIsLoggedIn(true);
            setLoading(false);
            setErrors(false)
            navigate("/dashboard")
        } else {
            setLoading(false);
            setIsLoggedIn(false);
            setErrors(true);
        }

    }

    return (
        <div>
            {isLoggedIn && <Navigate to={"/dashboard"}/>}
            {loading &&
            <div className="login-loading">
                <CircleLoader color={color} loading={loading} size={150}/>
            </div>
            }
            {!loading &&
            <div className='content-form'>
                <h1>INICIAR SESIÓN</h1>
                <div className='display-form'>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control onChange={handleEmail} value={username} type="email"
                                          placeholder="Ingrese su correo"/>
                            <Form.Text className="text-muted">
                                No compartiremos tu email con nadie.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control onChange={handlePassword} value={password} type="password"
                                          placeholder="Ingrese su contraseña"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Recordarme"/>
                        </Form.Group>
                        <div className='display-button'>
                            <div className='display-button-register'>
                                <Button variant="secondary" type="button" onClick={() => navigate("/register")}>
                                    Registrarse
                                </Button>
                            </div>
                            <div className='display-button-sig'>
                                <Button variant="primary" type="submit">
                                    Ingresar
                                </Button>
                            </div>
                            {errors && "credenciales invalidas"}
                        </div>
                    </Form>
                </div>
            </div>
            }
        </div>

    )
}

export default Login
