import "./working.css";

import WorkingCard from "./Card";
import Info from "./InfoCard";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Container from "react-bootstrap/Container";

function Working() {
  return (
    <Container>
      <Info />

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination, Navigation]}
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
