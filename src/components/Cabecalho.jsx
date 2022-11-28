import './cabecalho.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src="../img/logo.svg" alt="Logo" id="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" id="button-hamburguer"/>
                
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <navbar-nav>
                        <Nav>
                            <nav-item>
                                <Nav.Link className="navbar-style-link"  id="ativa" href="#home">Home</Nav.Link>
                            </nav-item>

                            <nav-item>
                                <Nav.Link className="navbar-style-link" href="#Sobre Nós">Sobre Nós</Nav.Link>
                            </nav-item>

                            <nav-item>
                                <Nav.Link className="navbar-style-link" href="#Serviços">Serviços</Nav.Link>
                            </nav-item>

                            <nav-item>
                                <Nav.Link className="navbar-style-link" href="#Projetos">Projetos</Nav.Link>
                            </nav-item>

                            <nav-item>
                                <Nav.Link className="navbar-style-link" href="#Contatos">Contatos</Nav.Link>
                            </nav-item>
                        </Nav>
                    </navbar-nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Cabecalho;