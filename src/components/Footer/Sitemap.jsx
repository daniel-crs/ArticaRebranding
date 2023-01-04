import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sitemap() {
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
              <p id="ativa" className="sitemap-footer-info">
                Home
              </p>
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
              <p className="sitemap-footer-info">Projetos</p>
            </Link>
          </Col>
          <Col sm={4} lg={4}>
            <Link to="/Contact">
              <p className="sitemap-footer-info">Contatos</p>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Sitemap;
