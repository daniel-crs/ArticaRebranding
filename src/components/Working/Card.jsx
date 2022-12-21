import Card from "react-bootstrap/Card";

function WorkingCard({ title, subtitle, cardText }) {
  return (
    <Card className="containerCard customCard">
      <Card.Body>
        <Card.Title className="number-color">{title}</Card.Title>
        <Card.Subtitle className="custom-Card-subtitle">
          {subtitle}
        </Card.Subtitle>
        <Card.Text className="custom-Card-text">{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkingCard;
