import Header from "../../../../components/Header";
import Info from "../components/InfoProject";
import Challenge from "../components/Challenge";
import DesktopBtn from "../components/DesktopButton";
import Footer from "../../../../components/Footer";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Desktop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const url = "http://localhost:1337/api/posts/" + id;
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
              img1="../../../img/img-test-4.webp"
              img2="../../../img/img-test-4.webp"
              img3="../../../img/img-test-4.webp"
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
