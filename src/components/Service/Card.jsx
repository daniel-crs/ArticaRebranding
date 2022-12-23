import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FiSmartphone } from "react-icons/fi";
import { BsLaptop } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";

function ServiceCards({ title, subtitle, cardText }) {
  return (
    <div className="text-center">
      <Row>
        <Col sm={12} md={4}>
          <div className="container-icon">
            <FiSmartphone className="icon" />
          </div>
          <h3 className="custom-card-service">Aplicativos</h3>
          <p className="container-services-info-size">
            Desenvolvimento de aplicativos móveis para Android e iOS.
          </p>
          <div className="justify-content-center">
            <hr className="bottom-bar-service"></hr>
          </div>
        </Col>

        <Col sm={12} md={4}>
          <div className="container-icon space-top justify-content-center">
            <BsLaptop className="icon" />
          </div>
          <h3 className="custom-card-service">Web Sites</h3>
          <p className="container-services-info-size">
            Sites modernos e responsivos para lojas virtuais ou outros projetos.
          </p>
          <hr className="bottom-bar-service"></hr>
        </Col>

        <Col sm={12} md={4}>
          <div className="container-icon space-top">
            <MdDesignServices className="icon" />
          </div>
          <h3 className="custom-card-service">Design</h3>
          <p className="container-services-info-size">
            Desenvolvemos logos e desgins para sites e aplicativos.
          </p>
          <hr className="bottom-bar-service"></hr>
        </Col>
      </Row>
    </div>
  );
}

export default ServiceCards;
