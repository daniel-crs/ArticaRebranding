import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sitemap() {
  return (
    <div className="sitemap-container">
      <h2 className="sitemap-footer-title">Sitemap</h2>
      <Row className="sitemap-footer-info">
        <Col sm={4} md={4} lg={4}>
          <a href="#home">Home</a>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <a href="#home">Sobre Nós</a>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <a href="#home">Serviços</a>
        </Col>
      </Row>

      <Row className="sitemap-footer-info">
        <Col sm={4} md={4} lg={4}>
          <a href="#home">Projetos</a>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <a href="#home">Contatos</a>
        </Col>
      </Row>
    </div>
  );
}

export default Sitemap;
