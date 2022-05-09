import React from 'react';
import {useNavigate } from "react-router-dom";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
function NavbarApp() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">NombreProyecto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/main")}>Home</Nav.Link>
            <NavDropdown title="Medios de pago" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">MercadoPago</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Tarjeta</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Quienes somos</Nav.Link>
            <Nav.Link onClick={() => navigate("/main")}>
              Contacto
            </Nav.Link>
          </Nav>
          <Nav.Link onClick={() => navigate("/login")}>Iniciar sesión</Nav.Link>
          <Nav.Link onClick={() => navigate("/register")}>Registrarse</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavbarApp