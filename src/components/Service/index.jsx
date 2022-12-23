import "./services.css";

import ServiceCards from "./Card";

import Container from "react-bootstrap/Container";

function Service() {
  return (
    <Container fluid>
      <section id="service-division">
        <div className="justify-content-center">
          <h2 className="custom-card-service">Serviços</h2>
          <p className="services-info">Torne suas ideias em realidade.</p>
        </div>

        <ServiceCards />
      </section>
    </Container>
  );
}

export default Service;
