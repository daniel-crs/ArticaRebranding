import "./footer.css";

import ArticaInfo from "./ArticaInfo";
import Sitemap from "./Sitemap";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <section className="footer-bg">
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <ArticaInfo />
          </Col>
          <Col sm={12} lg={6}>
            <Sitemap />
          </Col>
        </Row>

        <div className="icon-container">
          <div>
            <a href="#home">
              <BsWhatsapp className="icon-logo whatsapp" />
            </a>
          </div>

          <div>
            <a href="#home">
              <BsLinkedin className="icon-logo linkedin" />
            </a>
          </div>

          <div>
            <a href="#home">
              <CgMail className="icon-logo gmail" />
            </a>
          </div>
        </div>

        <div className="copyright-footer">
          © 2022 Artica | todos os direitos reservados.
        </div>
      </Container>
    </section>
  );
}

export default Footer;
