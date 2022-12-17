import "./working.css";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import WorkingCard from "./Card";
import Container from "react-bootstrap/Container";

function Working() {
  return (
    <Container>
      <h2 className="how_we_work">Como Trabalhamos</h2>
      <hr className="how_we_work_hr"></hr>

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
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination, Navigation]}
        loop
        className="mySwiper"
      >
        <SwiperSlide>
          <WorkingCard
            title="01"
            subtitle="Reuniões"
            cardText="Vamos realizar reuniões para entender os objetivos e funcionalidades que você deseja que tenha no seu projeto. Desta forma poderemos estipilar o valor do projeto precisar baseada no tempo para implementar."
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkingCard
            title="02"
            subtitle="Orçamento"
            cardText="Após a primeira reunião, nos iremos calcular seu orçamento baseado nas funcionalidades que deveram estar presentes no seu projeto."
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkingCard
            title="03"
            subtitle="Prototipo "
            cardText="Baseado nas reuniões, nesta etapa faremos protótipos do seu projeto para validar o design com você antes de desenvolver. "
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkingCard
            title="04"
            subtitle="Sub-title"
            cardText="Ainda por vir o texto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkingCard
            title="05"
            subtitle="Sub-title"
            cardText="Ainda por vir o texto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkingCard
            title="06"
            subtitle="Sub-title"
            cardText="Ainda por vir o texto"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Working;