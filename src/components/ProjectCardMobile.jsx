import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCardMobile({ imgProject, title, cardText }) {
  return (
    <Card className="containerCardProject customCardProject">
      <Card.Img className="custom-img-project" variant="top" src={imgProject} />
      <Card.Body>
        <Card.Title className="custom-Card-project">{title}</Card.Title>
        <Card.Text className="custom-Card-project-text">{cardText}</Card.Text>
        <Button className="button-project">Ver projeto</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardMobile;
