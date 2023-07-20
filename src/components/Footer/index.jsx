import "./footer.css";

import ArticaInfo from "./ArticaInfo";
import Sitemap from "./Sitemap";
import CurrentYear from "./App";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { useState, useEffect } from "react";

function Footer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/social-medias";
    fetch(url)
      .then((res) => res.json())
      .then((social) => {
        setData(social.data);
      });
  }, []);

  console.log(data);

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

        <div>
          {data.map((social, i) => (
            <div key={i}>
              <div className="icon-container">
                <div>
                  <a href={social.attributes.whatsappLink}>
                    <BsWhatsapp className="icon-logo whatsapp" />
                  </a>
                </div>

                <div>
                  <a href={social.attributes.linkedinLink}>
                    <BsLinkedin className="icon-logo linkedin" />
                  </a>
                </div>

                <div>
                  <a href={social.attributes.emailLink}>
                    <CgMail className="icon-logo gmail" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="copyright-footer">
          <CurrentYear />
        </div>
      </Container>
    </section>
  );
}

export default Footer;
