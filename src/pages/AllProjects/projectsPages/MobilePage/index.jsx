import Header from "../../../../components/Header";
import Info from "../components/InfoProject";
import Challenge from "../components/Challenge";
import "../components/MobileButton";
import MobileImg from "../components/MobileImg";
import Footer from "../../../../components/Footer";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MobilePage() {
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
        setImg(vetorImgs);
        setData(post.data);
      });
  }, [id]);

  console.log(data);

  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <MobileImg imgs={img} />
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

        <div className="elements-center">
          <a href={data?.attributes?.googleStoreLink || ""}>
            <button type="button" className="mobileCustomBtn">
              Google Store
            </button>
          </a>

          <div id="space-between-mobile-buttons">
            <a href={data?.attributes?.appleStoreLink || ""}>
              <button type="button" className="mobileCustomBtn">
                Apple store
              </button>
            </a>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
