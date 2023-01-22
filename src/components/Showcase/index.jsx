import "./showcase.css";

import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";

function Showcase() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Container fluid className="masthead">
      <div>
        <div id="container-showcase">
          <h1>Desenvolvimento</h1>
          <h1 className="color-h1-blue">Web e Mobile</h1>
          <p id="layout-info">
            Especializados nas tecnologias mais modernas para atender quais quer
            necessidades que você tenha.
          </p>
          {(() => {
            if (windowSize.innerWidth < 768) {
              return (
                <button type="button" className="btn-about-us">
                  Sobre nós
                </button>
              );
            } else {
              return null;
            }
          })()}
        </div>
      </div>
    </Container>
  );
}

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

export default Showcase;
