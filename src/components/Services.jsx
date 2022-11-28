import "./services.css";

import { FiSmartphone } from "react-icons/fi";
import { BsLaptop } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { Container } from "react-bootstrap";

function Services() {
  return (
    <Container fluid>
      <section id="service-division">
        <div className="justify-content-center">
          <h2>Serviços</h2>
          <p className="services-info">Torne suas ideias em realidade.</p>
        </div>

        <div className="container text-center">
          <div className="row pintar">
            <div className="col-sm-12 col-lg-4 division-service">
              <div className="container-icon">
                <FiSmartphone className="icon" />
              </div>
              <h3>Aplicativos</h3>
              <p className="container-services-info-size">
                Desenvolvimento de aplicativos móveis para Android e iOS.
              </p>
              <hr></hr>
            </div>

            <div className="col-sm-12 col-lg-4 division-service">
              <div className="container-icon">
                <BsLaptop className="icon" />
              </div>
              <h3>Web Sites</h3>
              <p className="container-services-info-size">
                Sites modernos e responsivos para lojas virtuais ou outros
                projetos.
              </p>
              <hr></hr>
            </div>

            <div className="col-sm-12 col-lg-4">
              <div className="container-icon">
                <MdDesignServices className="icon" />
              </div>
              <h3>Design</h3>
              <p className="container-services-info-size">
                Desenvolvemos logos e desgins para sites e aplicativos.
              </p>
              <hr></hr>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Services;
