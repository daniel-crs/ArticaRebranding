import "./working.css";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CustomCard from "./CustomCard";
import Container from "react-bootstrap/Container";

function Working() {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
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
          <CustomCard title="01" subtitle="Subtitle" cardText="Agora vai" />
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard title="01" subtitle="Subtitle" cardText="Agora vai" />
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard title="01" subtitle="Subtitle" cardText="Agora vai" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Working;
