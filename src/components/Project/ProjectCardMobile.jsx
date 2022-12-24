import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCardMobile({ imgProject, title, cardText }) {
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
        <div className="row justify-content-center">
          <Button className="button-project">Ver projeto</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardMobile;
