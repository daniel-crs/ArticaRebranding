import "./projectInfo.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ProjectInfo() {
  return (
    <section className="bg-projectInfo">
      <Container>
        <div className="container-projectInfo">
          <h2>Projetos</h2>
          <div>
            <p className="text-projectInfo">
              Uma pequena seleção dos nossos projetos para matar sua
              curiosidade.
            </p>
          </div>
          <Button className="button-project">Todos nossos projetos</Button>
        </div>
      </Container>
    </section>
  );
}

export default ProjectInfo;
