import "./project.css";

import ProjectInfo from "./ProjectInfo";
import ProjectCard from "./ProjectCard";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Container from "react-bootstrap/Container";

function Project() {
  function returnMobile() {
    return true;
  }

  return (
    <Container>
      {returnMobile() ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          loop
          className="mySwiper"
        >
          <SwiperSlide>
            <ProjectCard
              imgProject="../../img/img-test-1.jpg"
              title="ClayPhone"
              cardText="ClayPhone é um aplicativo para te ajudar a organizar os seus
            horários de forma simples. Pensado para deixar sua usa-bilidade
            a melhor possível para você."
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard
              imgProject="../../img/img-test-5.png"
              title="Free Delivery"
              cardText="Um aplicativo especializado em deliveries dos mais variados produtos com muita
            eficiência e os valores mais competitivos do mercado. Não perca..."
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard
              imgProject="../../img/img-test-4.webp"
              title="Pesto Itallian Food"
              cardText="Pesto e um restaurante italiano que te traz uma experiência idêntica a
            de comer na própria Itália. Certamente um dos melhores restaurantes de São Paulo..."
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <ProjectInfo />
      )}
    </Container>
  );
}

export default Project;
