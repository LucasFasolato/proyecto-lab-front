import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './login.css'
import {useNavigate } from "react-router-dom";
import Navbarr from '../../components/Navbar/navbar';
function Login() {
    const navigate = useNavigate();
  return (
      <div>
        <Navbarr/>
        <div className='content-form'>
            <h1>INICIAR SESIÓN</h1>
            <div className='display-form'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>
                    <div className='display-button'>
                        <div className='display-button-register'>      
                            <Button variant="secondary" type="button" onClick={() => navigate("/register")}>
                            Registrarse
                            </Button>                      
                        </div>
                        <div className='display-button-sig'>
                            <Button variant="primary" type="submit" onClick={() => navigate("/home")}>
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

export default Login