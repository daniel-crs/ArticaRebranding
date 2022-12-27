import "./budget.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Budget() {
  return (
    <Container fluid className="bg-budget">
      <div className="container-budget">
        <h2>Quer um orçamento?</h2>
        <div>
          <p className="text-budget">
            Clique em fazer orçamento e conte o que você deseja realizar.
          </p>
        </div>
        <Button className="button-budget">Fazer orçamento</Button>
      </div>
    </Container>
  );
}

export default Budget;
