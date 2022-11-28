import "./footer.css";

import FooterArtica from "./FooterArtica";
import FooterSitemap from "./FooterSitemap";
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
        <Row className="flex-container">
          <Col sm={12} lg={6}>
            <FooterArtica />
          </Col>
          <Col sm={12} lg={6}>
            <FooterSitemap />
          </Col>
        </Row>

        <div className="icon-container">
          <div>
            <BsWhatsapp className="icon-logo whatsapp" />
          </div>

          <div>
            <BsLinkedin className="icon-logo linkedin" />
          </div>

          <div>
            <CgMail className="icon-logo gmail" />
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
