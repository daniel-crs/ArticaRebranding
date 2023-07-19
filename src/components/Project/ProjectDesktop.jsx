import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function ProjectDesktop() {
  const [armazena, setArmazena] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/posts?populate=*";
    fetch(url)
      .then((res) => res.json())
      .then((post) => {
        const temporario = post.data.filter(
          (separa) => separa.attributes.favorite === "Yes"
        );
        setArmazena(temporario);
      });
  }, []);

  console.log(armazena);

  return (
    <section>
      {armazena.map((post, i) => (
        <div key={i}>
          {(() => {
            if (post.id % 2 !== 0) {
              return (
                <Row>
                  <Col md={6}>
                    <Link to={`/AllProjects/DesktopPage/${post.id}`}>
                      <img
                        className="custom-img-project-desktop"
                        src={
                          "http://localhost:1337" +
                          post.attributes.coverImg.data.attributes.url
                        }
                        alt=""
                      />
                    </Link>
                  </Col>
                  <Col md={6}>
                    <div>
                      <Link
                        to={`/AllProjects/DesktopPage/${post.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <h2 className="custom-project-title-desktop">
                          {post.attributes.title}
                        </h2>
                      </Link>
                      <p className="custom-Card-project-text-desktop">
                        {post.attributes.description}
                      </p>

                      <Link to={`/AllProjects/DesktopPage/${post.id}`}>
                        <Button className="button-project-desktop">
                          Ver projeto
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              );
            } else {
              return (
                <Row id="space-between-project-cards-desktop">
                  <Col md={6}>
                    <div>
                      <Link
                        to={`/AllProjects/MobilePage/${post.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <h2 className="custom-project-title-desktop">
                          {post.attributes.title}
                        </h2>
                      </Link>
                      <p className="custom-Card-project-text-desktop">
                        {post.attributes.description}
                      </p>

                      <Link to={`/AllProjects/MobilePage/${post.id}`}>
                        <Button className="button-project-desktop">
                          Ver projeto
                        </Button>
                      </Link>
                    </div>
                  </Col>

                  <Col md={6}>
                    <Link to={`/AllProjects/MobilePage/${post.id}`}>
                      <img
                        className="custom-img-project-desktop"
                        src={
                          "http://localhost:1337" +
                          post.attributes.coverImg.data.attributes.url
                        }
                        alt=""
                      />
                    </Link>
                  </Col>
                </Row>
              );
            }
          })()}
        </div>
      ))}
    </section>
  );
}

export default ProjectDesktop;
