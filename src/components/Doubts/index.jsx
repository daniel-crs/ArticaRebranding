import "./doubts.css";
import DoubtsCard from "./Card";

import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function Doubts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/questions";
    fetch(url)
      .then((res) => res.json())
      .then((questions) => {
        setData(questions.data);
      });
  }, []);

  console.log(data);

  return (
    <Container>
      <div>
        <h2 className="doubts-title">Ainda tem duvidas ?</h2>
        <p className="doubts-text">
          Aqui vai algumas dúvidas frequentes que nossos clientes tem.
        </p>
      </div>

      <div>
        {data.map((question, i) => (
          <div key={i}>
            <DoubtsCard
              question={question.attributes.doubt}
              answer={question.attributes.answer}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Doubts;
