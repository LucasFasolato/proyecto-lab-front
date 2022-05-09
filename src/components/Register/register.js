import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './../Login/login.css'
import {useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
import NavbarApp from '../NavbarApp/navbarApp';
import {httpPost} from "./../../utils/httpFunctions";


function Register() {
    const navigate = useNavigate();
    const rePassword = useRef();
    const [email, setEmail] = useState ("");
    const [name, setName] = useState ("");
    const [password, setPassword] = useState ("");
    const [repassword, setRepassword] = useState ("");
    function enableInput() {
        console.log("INPUT HABILITADO");
      }

    function createUser () {
        const data = {
            mail: email,
            nombreUsuario: name,
            password: password,
            id: "11"
        }
        const datajson = JSON.stringify(data);   
        httpPost("users", datajson);
    }

  return (
      <div>
        <NavbarApp/>
        <div className='content-form'>
            <h1>REGISTRARSE</h1>
            <div className='display-form'>
                <Form  onSubmit={(e) => createUser(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Correo"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" placeholder="Nombre de usuario" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña"  value={password} onChange={(e) => {enableInput();setPassword(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar contraseña" ref={rePassword} value={repassword} onChange={(e) => setRepassword(e.target.value)}/>
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
        </div> 
      </div>
    
  )
}

export default Register