import Accordion from "react-bootstrap/Accordion";
import { FiPlus } from "react-icons/fi";

function DoubtsCard({ question, answer }) {
  return (
    <Accordion>
      <Accordion.Item className="doubts-accordion-principal" eventKey="0">
        <Accordion.Header>
          <FiPlus className="plus-icon" /> {question}
        </Accordion.Header>
        <Accordion.Body className="doubts-accordion-conteudo">
          {answer}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default DoubtsCard;
