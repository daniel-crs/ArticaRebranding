import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

function ProjectDesktop() {
  return (
    <section>
      <Row>
        <Col md={6}>
          <img
            className="custom-img-project-desktop"
            src="../../img/img-test-4.webp"
            alt=""
          />
        </Col>
        <Col md={6}>
          <div>
            <h2 className="custom-project-title-desktop">
              Pesto Itallian Food
            </h2>
            <p className="custom-Card-project-text-desktop">
              Pesto e um restaurante italiano delicioso que te traz uma
              experiência idêntica a de comer na própria Itália. Certamente um
              dos melhores restau-rantes de São paula. Um lugar perfeito para
              levar sua família e relaxar...
            </p>

            <Link to="/AllProjects/Pesto">
              <Button className="button-project-desktop">Ver projeto</Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Row id="space-between-project-cards-desktop">
        <Col md={6}>
          <div>
            <h2 className="custom-project-title-desktop">ClayPhone</h2>
            <p className="custom-Card-project-text-desktop">
              ClayPhone é um aplicativo desen-volvido para te ajudar a organizar
              os seus horários de forma simples e fácil. Pensado para deixar sua
              usabilidade a melhor possível para você.
            </p>

            <Link to="/AllProjects/ClayPhone">
              <Button className="button-project-desktop">Ver projeto</Button>
            </Link>
          </div>
        </Col>

        <Col md={6}>
          <img
            className="custom-img-project-desktop"
            src="../../img/img-test-1.jpg"
            alt=""
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <img
            className="custom-img-project-desktop"
            src="../../img/img-test-5.png"
            alt=""
          />
        </Col>
        <Col md={6}>
          <div>
            <h2 className="custom-project-title-desktop">Free Delivery</h2>
            <p className="custom-Card-project-text-desktop">
              Um aplicativo especializado em de-liveries dos mais variados
              produtos com muita eficiência e os valores mais competitivos do
              mercado. Não perca a oportunidade e veja seus preço.
            </p>
            <Button className="button-project-desktop">Ver projeto</Button>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ProjectDesktop;
