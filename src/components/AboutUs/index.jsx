import "./aboutUs.css";

import Container from "react-bootstrap/Container";

import { useState, useEffect } from "react";

function AboutUs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/biografias";
    fetch(url)
      .then((res) => res.json())
      .then((biografia) => {
        setData(biografia.data);
      });
  }, []);

  console.log(data);

  return (
    <Container>
      {data.map((bio, i) => (
        <div key={i} id="about-us-Target">
          <h2 className="about-us-title">{bio.attributes.title}</h2>
          <p className="about-us-text">{bio.attributes.text}</p>
        </div>
      ))}
    </Container>
  );
}

export default AboutUs;
