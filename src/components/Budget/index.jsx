import "./budget.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Budget() {
  return (
    <section>
      <Container fluid className="bg-budget">
        <div className="container-budget">
          <h2>Quer um orçamento?</h2>
          <div>
            <p className="text-budget">
              Nos diga o que você deseja realizar agora mesmo. Basta clicar em
              fazer orçamento e logo estaremos com ele pronto para você.
            </p>
          </div>
          <Button className="button-budget justify-content-left">
            Todos nossos projetos
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Budget;
