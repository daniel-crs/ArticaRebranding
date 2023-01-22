import Header from "../../../../components/Header";
import DesktopImg from "../components/DesktopImg";
import Info from "../components/InfoProject";
import Challenge from "../components/Challenge";
import DesktopBtn from "../components/DesktopButton";
import Footer from "../../../../components/Footer";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Pesto() {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <DesktopImg
              img1="../../../img/img-test-4.webp"
              img2="../../../img/img-test-4.webp"
              img3="../../../img/img-test-4.webp"
            />
          </Col>
          <Col sm={12} md={6}>
            <Info
              projectInfoTitle="Pesto Itallian Food"
              projectInfoText="Pesto e um restaurante italiano delicioso que te traz uma experiência
            idêntica a de comer na própria Itália. Certamente um dos melhores
            restau-rantes de São paula. Um lugar perfeito para levar sua família aos
            finais de semana para relaxar com estilo."
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
          <DesktopBtn />
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default Pesto;
