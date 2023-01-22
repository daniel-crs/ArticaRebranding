import "./navbar.css";

import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const location = useLocation();

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
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
                <Nav.Link href="/">
                  {(() => {
                    if (location.pathname === "/") {
                      return (
                        <p className="navbar-style-link" id="ativa">
                          Home
                        </p>
                      );
                    } else {
                      return <p className="navbar-style-link">Home</p>;
                    }
                  })()}
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
                <Nav.Link href="/AllProjects">
                  {(() => {
                    if (location.pathname === "/AllProjects") {
                      return (
                        <p className="navbar-style-link" id="ativa">
                          Projetos
                        </p>
                      );
                    } else {
                      return <p className="navbar-style-link">Projetos</p>;
                    }
                  })()}
                </Nav.Link>
              </nav-item>

              <nav-item>
                <Nav.Link href="/Contact">
                  {(() => {
                    if (location.pathname === "/Contact") {
                      return (
                        <p className="navbar-style-link" id="ativa">
                          Contatos
                        </p>
                      );
                    } else {
                      return (
                        <p className="navbar-style-link left-sapce">Contatos</p>
                      );
                    }
                  })()}
                </Nav.Link>
              </nav-item>
            </Nav>
          </navbar-nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
