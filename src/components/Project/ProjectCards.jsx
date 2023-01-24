import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProjectCards({ imgProject, title, cardText, linkText }) {
  return (
    <Card className="containerCardProject">
      <Card.Img className="custom-img-project" variant="top" src={imgProject} />
      <Card.Body className="pb-5 custom-Card-title">
        <Card.Title>
          <h3>{title}</h3>
        </Card.Title>
        <Card.Text className="custom-Card-project-text">
          <p>{cardText}</p>
        </Card.Text>
        <div className="spaceProjectBtn">
          <Link to={linkText}>
            <Button className="button-project">Ver projetos</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
