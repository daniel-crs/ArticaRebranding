import "./project.css";

import ProjectInfo from "./ProjectInfo";
import ProjectMobile from "./ProjectMobile";
import ProjectDesktop from "./ProjectDesktop";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";

function Project() {
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
    <Container>
      <ProjectInfo />

      {(() => {
        if (windowSize.innerWidth < 768) {
          return <ProjectMobile />;
        } else {
          return <ProjectDesktop />;
        }
      })()}
    </Container>
  );
}

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

export default Project;
