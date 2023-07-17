import "../../components/Project/mobileProject.css";
import "./customCards.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/posts";
    fetch(url)
      .then((res) => res.json())
      .then((post) => {
        setData(post.data);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <Header />

      <Container>
        <div id="info-forms">
          <h2>Projetos</h2>
          <p>Veja alguns de nossos projetos</p>
        </div>

        <section>
          <Row>
            {data.map((post, i) => (
              <Col sm={12} md={6} xl={4}>
                <div key={i} className="space-between-cards">
                  {(() => {
                    if (post.attributes.device === "Desktop") {
                      return (
                        <Card className="containerCardProject">
                          <Link to={`/AllProjects/DesktopPage/${post.id}`}>
                            <Card.Img
                              className="custom-img-project"
                              variant="top"
                              src={post.attributes.coverImg}
                            />
                          </Link>
                          <Card.Body className="pb-5 custom-Card-title">
                            <Link
                              to={`/AllProjects/DesktopPage/${post.id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <Card.Title>
                                <h3>{post.attributes.title}</h3>
                              </Card.Title>
                            </Link>
                            <Card.Text className="custom-Card-project-text">
                              <p>
                                {post.attributes.description.substring(0, 170)}
                              </p>
                            </Card.Text>
                            <div className="spaceProjectBtn">
                              <Link to={`/AllProjects/DesktopPage/${post.id}`}>
                                <Button className="button-project">
                                  Ver projetos
                                </Button>
                              </Link>
                            </div>
                          </Card.Body>
                        </Card>
                      );
                    } else {
                      return (
                        <Card className="containerCardProject">
                          <Link to={`/AllProjects/MobilePage/${post.id}`}>
                            <Card.Img
                              className="custom-img-project"
                              variant="top"
                              src={post.attributes.coverImg}
                            />
                          </Link>
                          <Card.Body className="pb-5 custom-Card-title">
                            <Link
                              to={`/AllProjects/MobilePage/${post.id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <Card.Title>
                                <h3>{post.attributes.title}</h3>
                              </Card.Title>
                            </Link>
                            <Card.Text className="custom-Card-project-text">
                              <p>
                                {post.attributes.description.substring(0, 170)}
                              </p>
                            </Card.Text>
                            <div className="spaceProjectBtn">
                              <Link to={`/AllProjects/MobilePage/${post.id}`}>
                                <Button className="button-project">
                                  Ver projetos
                                </Button>
                              </Link>
                            </div>
                          </Card.Body>
                        </Card>
                      );
                    }
                  })()}
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>

      <Footer />
    </div>
  );
}

export default Contact;
