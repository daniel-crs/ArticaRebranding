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
            <a id="ativa" className="sitemap-footer-info" href="#home">
              Home
            </a>
          </Col>
          <Col sm={4} lg={4}>
            <a className="sitemap-footer-info" href="#home">
              Sobre Nós
            </a>
          </Col>
          <Col sm={4} lg={4}>
            <a className="sitemap-footer-info" href="#home">
              Serviços
            </a>
          </Col>
        </Row>

        <Row>
          <Col sm={4} lg={4}>
            <a className="sitemap-footer-info" href="#home">
              Projetos
            </a>
          </Col>
          <Col sm={4} lg={4}>
            <a className="sitemap-footer-info" href="#home">
              Contatos
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Sitemap;
