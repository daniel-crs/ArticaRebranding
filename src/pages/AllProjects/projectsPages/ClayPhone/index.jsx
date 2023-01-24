import Header from "../../../../components/Header";
import MobileImg from "../components/MobileImg";
import Info from "../components/InfoProject";
import Challenge from "../components/Challenge";
import MobileBtn from "../components/MobileButton";
import Footer from "../../../../components/Footer";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ClayPhone() {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <MobileImg
              img1="../../../img/img-test-2.png"
              img2="../../../img/img-test-2.png"
              img3="../../../img/img-test-2.png"
              img4="../../../img/img-test-2.png"
            />
          </Col>
          <Col sm={12} md={6}>
            <Info
              projectInfoTitle="ClayPhone"
              projectInfoText="ClayPhone é um aplicativo dese-nvolvido
                para te ajudar a organizar os seus horários de forma simples
                e fácil. Entendimento para deixar sua usabilidade a melhor
                possível para você."
            />
          </Col>
        </Row>

        <div>
          <Challenge
            challengeText="Devido à abundância de clientes, constantemente
            interessados pelas delícias do restaurante pesto. Tivemos o grande desafio
            de criar um site repleto de funcionalidades, mas que fosse muito bem
            otimizado para garantir  velocidade e confiabilidade a este site. "
          />
        </div>

        <div>
          <MobileBtn />
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default ClayPhone;
