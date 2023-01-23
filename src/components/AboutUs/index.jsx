import "./aboutUs.css";

import Container from "react-bootstrap/Container";

function AboutUs() {
  return (
    <Container>
      <div id="about-us-Target">
        <h2 className="about-us-title">Sobre nós</h2>
        <p className="about-us-text">
          Artica é uma equipe de desenvolvimento de software especializada nas
          mais modernas tecnologias para tornar sua ideia realidade. Trabalhamos
          com aplicativos, automatização, sites, ciência de dados e quaisquer
          outras áreas que você precise.
        </p>
      </div>
    </Container>
  );
}

export default AboutUs;
