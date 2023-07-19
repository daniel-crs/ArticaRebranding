import Header from "../../../../components/Header";
import Info from "../components/InfoProject";
import Challenge from "../components/Challenge";
import DesktopBtn from "../components/DesktopButton";
import Footer from "../../../../components/Footer";
// import DesktopImg from "../components/DesktopImg";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Desktop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams("1");
  const [data, setData] = useState();

  useEffect(() => {
    const url = "http://localhost:1337/api/posts/" + id + "?populate=*";
    fetch(url)
      .then((res) => res.json())
      .then((post) => {
        setData(post.data);
      });
  });

  console.log(data);

  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col sm={12} md={6}>
            {/* <DesktopImg
              src={
                "http://localhost:1337" +
                  data?.attributes?.imgs.data.attributes.url || ""
              }
            /> */}
          </Col>
          <Col sm={12} md={6}>
            <Info
              projectInfoTitle={data?.attributes?.title || ""}
              projectInfoText={data?.attributes?.description || ""}
            />
          </Col>
        </Row>

        <div>
          <Challenge challengeText={data?.attributes?.challenger || ""} />
        </div>

        <div>
          <DesktopBtn />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
