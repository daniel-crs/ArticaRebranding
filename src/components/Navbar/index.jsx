import "./navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Cabecalho() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="../img/logo.svg" alt="Logo" id="logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-dark"
          id="button-hamburguer"
        />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <navbar-nav>
            <Nav>
              <nav-item>
                <Nav.Link href="#home">
                  <p className="navbar-style-link" id="ativa">
                    Home
                  </p>
                </Nav.Link>
              </nav-item>

              <nav-item>
                <Nav.Link href="#Sobre Nós">
                  <p className="navbar-style-link">Sobre Nós</p>
                </Nav.Link>
              </nav-item>

              <nav-item>
                <Nav.Link href="#Serviços">
                  <p className="navbar-style-link">Serviços</p>
                </Nav.Link>
              </nav-item>

              <nav-item>
                <Nav.Link href="#Projetos">
                  <p className="navbar-style-link">Projetos</p>
                </Nav.Link>
              </nav-item>

              <nav-item>
                <Nav.Link href="#Contatos">
                  <p className="navbar-style-link">Contatos</p>
                </Nav.Link>
              </nav-item>
            </Nav>
          </navbar-nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Cabecalho;
