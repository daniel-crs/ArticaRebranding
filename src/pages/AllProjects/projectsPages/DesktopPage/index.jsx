import Header from "../../../../components/Header";
import Info from "../components/InfoProject";
import Challenge from "../components/Challenge";
import "../components/DesktopButton";
import Footer from "../../../../components/Footer";
import DesktopImg from "../components/DesktopImg";

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
  const [img, setImg] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/posts/" + id + "?populate=*";
    fetch(url)
      .then((res) => res.json())
      .then((post) => {
        const vetorImgs = post.data.attributes.imgs.data.map(
          (img) => "http://localhost:1337" + img.attributes.url
        );
        setData(post.data);
        setImg(vetorImgs);
      });
  }, [id]);

  console.log(data);

  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <DesktopImg imgs={img} />
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

        <div className="space-button">
          <a href={data?.attributes?.siteLink || ""}>
            <button type="button" className="customBtnProject">
              Visite o site
            </button>
          </a>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
