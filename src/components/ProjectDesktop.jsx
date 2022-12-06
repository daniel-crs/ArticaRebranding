import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ProjectDesktop() {
  return (
    <section>
      <Row>
        <Col md={6}>
          <img
            className="custom-img-project"
            src="../../img/img-test-4.webp"
            alt=""
          />
        </Col>
        <Col md={6}>
          <div>
            <h2 className="custom-project-title">Pesto Itallian Food</h2>
            <p className="custom-Card-project-text">
              Pesto e um restaurante italiano delicioso que te traz uma
              experiência idêntica a de comer na própria Itália. Certamente um
              dos melhores restau-rantes de São paula. Um lugar perfeito para
              levar sua família e relaxar...
            </p>
            <Button className="button-project">Ver projeto</Button>
          </div>
        </Col>
      </Row>

      <Row id="space-between-project-cards">
        <Col md={6}>
          <div>
            <h2 className="custom-project-title">ClayPhone</h2>
            <p className="custom-Card-project-text">
              ClayPhone é um aplicativo desen-volvido para te ajudar a organizar
              os seus horários de forma simples e fácil. Pensado para deixar sua
              usabilidade a melhor possível para você.
            </p>
            <Button className="button-project">Ver projeto</Button>
          </div>
        </Col>

        <Col md={6}>
          <img
            className="custom-img-project"
            src="../../img/img-test-1.jpg"
            alt=""
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <img
            className="custom-img-project"
            src="../../img/img-test-5.png"
            alt=""
          />
        </Col>
        <Col md={6}>
          <div>
            <h2 className="custom-project-title">Free Delivery</h2>
            <p className="custom-Card-project-text">
              Um aplicativo especializado em de-liveries dos mais variados
              produtos com muita eficiência e os valores mais competitivos do
              mercado. Não perca a oportunidade e veja seus preço.
            </p>
            <Button className="button-project">Ver projeto</Button>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ProjectDesktop;
