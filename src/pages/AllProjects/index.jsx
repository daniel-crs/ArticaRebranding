import "../../components/Project/mobileProject.css";
import "./customCards.css";

import Header from "../../components/Header";
import ProjectCards from "../../components/Project/ProjectCards";
import Footer from "../../components/Footer";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div id="info-forms">
              <h2>Projetos</h2>
              <p>Veja alguns de nossos projetos</p>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div id="filter-button-space">
              <Button className="button-project">Ver projeto</Button>
            </div>
          </Col>
        </Row>

        <section>
          <Row>
            <Col sm={12} md={6} xl={4}>
              <div className="space-between-cards">
                <ProjectCards
                  imgProject="../../img/img-test-1.jpg"
                  title="ClayPhone"
                  cardText="ClayPhone é um aplicativo para te ajudar a organizar os seus
                horários de forma simples. Pensado para deixar sua usa-bilidade
                a melhor possível para você."
                />
              </div>
            </Col>

            <Col sm={12} md={6} xl={4}>
              <div className="space-between-cards">
                <ProjectCards
                  imgProject="../../img/img-test-5.png"
                  title="Free Delivery"
                  cardText="Um aplicativo especializado em deliveries dos mais variados produtos com muita
                eficiência e os valores mais competitivos do mercado. Não perca..."
                />
              </div>
            </Col>

            <Col sm={12} md={6} xl={4}>
              <div className="space-between-cards">
                <ProjectCards
                  imgProject="../../img/img-test-4.webp"
                  title="Pesto Itallian Food"
                  cardText="Pesto e um restaurante italiano que te traz uma experiência idêntica a
                de comer na própria Itália. Certamente um dos melhores restaurantes de São Paulo..."
                />
              </div>
            </Col>

            <Col sm={12} md={6} xl={4}>
              <div className="space-between-cards">
                <ProjectCards
                  imgProject="../../img/img-test-1.jpg"
                  title="ClayPhone"
                  cardText="ClayPhone é um aplicativo para te ajudar a organizar os seus
                horários de forma simples. Pensado para deixar sua usa-bilidade
                a melhor possível para você."
                />
              </div>
            </Col>

            <Col sm={12} md={6} xl={4}>
              <div className="space-between-cards">
                <ProjectCards
                  imgProject="../../img/img-test-5.png"
                  title="Free Delivery"
                  cardText="Um aplicativo especializado em deliveries dos mais variados produtos com muita
                eficiência e os valores mais competitivos do mercado. Não perca..."
                />
              </div>
            </Col>

            <Col sm={12} md={6} xl={4}>
              <div className="space-between-cards">
                <ProjectCards
                  imgProject="../../img/img-test-4.webp"
                  title="Pesto Itallian Food"
                  cardText="Pesto e um restaurante italiano que te traz uma experiência idêntica a
                de comer na própria Itália. Certamente um dos melhores restaurantes de São Paulo..."
                />
              </div>
            </Col>
          </Row>
        </section>
      </Container>

      <Footer />
    </div>
  );
}

export default Contact;
