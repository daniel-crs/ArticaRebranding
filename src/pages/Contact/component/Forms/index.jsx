import { Container } from "react-bootstrap";

import "./forms.css";

function QuestionForms() {
  return (
    <Container>
      <div id="info-forms">
        <h2>Entre em Contato</h2>
        <p>Preencha o formulários abaixo</p>
      </div>

      <form>
        <fieldset id="bg-fieldset">
          <div className="space-between-inputs">
            <label For="name" className="custom-label">
              Nome
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="custom-input"
              placeholder="Digite seu nome:"
            />
          </div>

          <div className="space-between-inputs">
            <label For="email" className="custom-label">
              E-mail
            </label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              className="custom-input"
              placeholder="Digite seu e-mail:"
            />
          </div>

          <div className="space-between-inputs">
            <label For="servicos" className="custom-label">
              Serviços
            </label>
            <br />
            <select name="servicos" id="servicos" className="custom-input">
              <option value="site">Website</option>
              <option value="aplicativos">Aplicativos mobile</option>
              <option value="software">Software</option>
              <option value="logos">Logomarcas e design</option>
            </select>
          </div>

          <div className="space-between-inputs">
            <label For="mensagem" className="custom-label">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              id="mensagem"
              className="custom-textarea"
            ></textarea>
          </div>

          <div id="button-space">
            <input type="button" value="Enviar" id="custom-button" />
          </div>
        </fieldset>
      </form>
    </Container>
  );
}

export default QuestionForms;
