import "./budget.css";

import { Link } from "react-router-dom";

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
        <Link to={"/Contact"}>
          <Button className="button-budget">Fazer orçamento</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Budget;
