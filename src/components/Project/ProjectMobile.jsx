import ProjectCards from "./ProjectCards";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function ProjectMobile() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination, Navigation]}
      loop
    >
      <SwiperSlide>
        <ProjectCards
          imgProject="../../img/img-test-1.jpg"
          title="ClayPhone"
          cardText="ClayPhone é um aplicativo para te ajudar a organizar os seus
            horários de forma simples. Pensado para deixar sua usa-bilidade
            a melhor possível para você."
          linkText="/AllProjects/ClayPhone"
        />
      </SwiperSlide>

      <SwiperSlide>
        <ProjectCards
          imgProject="../../img/img-test-5.png"
          title="Free Delivery"
          cardText="Um aplicativo especializado em deliveries dos mais variados produtos com muita
            eficiência e os valores mais competitivos do mercado. Não perca..."
        />
      </SwiperSlide>

      <SwiperSlide>
        <ProjectCards
          imgProject="../../img/img-test-4.webp"
          title="Pesto Itallian Food"
          cardText="Pesto e um restaurante italiano que te traz uma experiência idêntica a
            de comer na própria Itália. Certamente um dos melhores restaurantes de São Paulo..."
          linkText="/AllProjects/Pesto"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default ProjectMobile;
