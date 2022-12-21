import "./doubts.css";

import { Container } from "react-bootstrap";
import DoubtsCard from "./Card";

function Doubts() {
  return (
    <Container>
      <div>
        <h2 className="doubts-title">Ainda tem duvidas ?</h2>
        <p className="doubts-text">
          vai algumas dúvidas frequentes que nossos clientes tem.
        </p>
      </div>

      <div>
        <DoubtsCard
          question="Minha ideia é mantida em segredo durante o desenvolvimento ?"
          answer="Confidencialidade sera garantido por contrato, portanto suas ideia serão tratadas com total sigilo por nossa equipe de profissionais de tecnologia."
        />

        <DoubtsCard
          question="Meu site continuara recebendo ma-nutenção com o tempo ?"
          answer="Confidencialidade sera garantido por contrato, portanto suas ideia serão tratadas com total sigilo por nossa equipe de profissionais de tecnologia."
        />

        <DoubtsCard
          question="Eu posso adicionar coisas durante o desenvolvimento ?"
          answer="Confidencialidade sera garantido por contrato, portanto suas ideia serão tratadas com total sigilo por nossa equipe de profissionais de tecnologia."
        />

        <DoubtsCard
          question="O que e preciso para eu ter meu próprio aplicativo ?"
          answer="Confidencialidade sera garantido por contrato, portanto suas ideia serão tratadas com total sigilo por nossa equipe de profissionais de tecnologia."
        />

        <DoubtsCard
          question="Para o meu site estar na internet, eu preciso pagar uma mensalidade ?"
          answer="Confidencialidade sera garantido por contrato, portanto suas ideia serão tratadas com total sigilo por nossa equipe de profissionais de tecnologia."
        />
      </div>
    </Container>
  );
}

export default Doubts;
