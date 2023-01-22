import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sitemap() {
  const location = useLocation();

  return (
    <div>
      <div className="sitemap-footer-title">
        <h2>Sitemap</h2>
        <hr />
      </div>

      <div className="container-footer-info">
        <Row>
          <Col sm={4} lg={4}>
            <Link to="/">
              {(() => {
                if (location.pathname === "/") {
                  return (
                    <p className="sitemap-footer-info" id="ativa">
                      Home
                    </p>
                  );
                } else {
                  return <p className="sitemap-footer-info">Home</p>;
                }
              })()}
            </Link>
          </Col>
          <Col sm={4} lg={4}>
            <p className="sitemap-footer-info">Sobre Nós</p>
          </Col>
          <Col sm={4} lg={4}>
            <p className="sitemap-footer-info">Serviços</p>
          </Col>
        </Row>

        <Row>
          <Col sm={4} lg={4}>
            <Link to={"/AllProjects"}>
              {(() => {
                if (location.pathname === "/AllProjects") {
                  return (
                    <p className="sitemap-footer-info" id="ativa">
                      Projetos
                    </p>
                  );
                } else {
                  return <p className="sitemap-footer-info">Projetos</p>;
                }
              })()}
            </Link>
          </Col>
          <Col sm={4} lg={4}>
            <Link to="/Contact">
              {(() => {
                if (location.pathname === "/Contact") {
                  return (
                    <p className="sitemap-footer-info" id="ativa">
                      Contatos
                    </p>
                  );
                } else {
                  return <p className="sitemap-footer-info">Contatos</p>;
                }
              })()}
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Sitemap;
