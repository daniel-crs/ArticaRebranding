import "./notFound.css";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

function NotFound() {
  return (
    <div id="container">
      <div>
        <h1 className="custom404">404</h1>
        <h2>OOPS... Esta página não foi encontrada</h2>
        <p>
          Retorne para a página inicial do site clicando neste botão a baixo
        </p>
      </div>

      <Link to={"/"}>
        <Button className="button-project">Clique aqui</Button>
      </Link>
    </div>
  );
}

export default NotFound;
