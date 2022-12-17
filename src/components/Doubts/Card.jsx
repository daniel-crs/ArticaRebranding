import Accordion from "react-bootstrap/Accordion";
import { FiPlus } from "react-icons/fi";

function DoubtsCard({ question, answer }) {
  return (
    <Accordion className="space-between-doubts-cards">
      <Accordion.Item className="doubts-accordion-principal" eventKey="0">
        <Accordion.Header>
          <FiPlus className="plus-icon" />{" "}
          <p className="doubts-card-question">{question}</p>
        </Accordion.Header>
        <Accordion.Body className="doubts-accordion-conteudo">
          <p className="doubts-card-answer">{answer}</p>
        </Accordion.Body>
      </Accordion.Item>
      <hr className="bottom-bar-doubts-cards"></hr>
    </Accordion>
  );
}

export default DoubtsCard;
