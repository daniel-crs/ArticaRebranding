import "./working.css";

import WorkingCard from "./Card";
import Info from "./InfoCard";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Container from "react-bootstrap/Container";

function Working() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/work-lists";
    fetch(url)
      .then((res) => res.json())
      .then((workList) => {
        setData(workList.data);
      });
  }, []);

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
        <div>
          {data.map((work, i) => (
            <div key={i}>
              <SwiperSlide>
                <WorkingCard
                  title={work.id}
                  subtitle={work.attributes.title}
                  cardText={work.attributes.text}
                />
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </Container>
  );
}

export default Working;
