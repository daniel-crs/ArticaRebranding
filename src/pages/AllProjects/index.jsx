import "../../components/Project/mobileProject.css";
import "./customCards.css";

import Header from "../../components/Header";
import ProjectCards from "../../components/Project/ProjectCards";
import Footer from "../../components/Footer";

import useFetch from "../../kooks/useFetch";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const { data } = useFetch("http://localhost:1337/api/posts?${query}");

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
                  <ProjectCards
                    imgProject={post.attributes.coverImg}
                    title={post.attributes.title}
                    cardText={post.attributes.description}
                    linkText="/AllProjects/ClayPhone"
                  />
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
