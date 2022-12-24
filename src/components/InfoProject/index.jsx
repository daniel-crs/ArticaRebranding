import "./projectInfo.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function InfoProject() {
  return (
    <Container fluid className="bg-projectInfo">
      <div className="container-projectInfo">
        <h2>Projetos</h2>
        <div>
          <p className="text-projectInfo">
            Uma pequena seleção dos nossos projetos para matar sua curiosidade.
          </p>
        </div>
        <Button className="button-project">Todos nossos projetos</Button>
      </div>
    </Container>
  );
}

export default InfoProject;
