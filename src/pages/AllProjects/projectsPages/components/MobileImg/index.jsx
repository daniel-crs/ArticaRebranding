import "./mobileImage.css";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function MobileImg({ imgs }) {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        loop
      >
        {imgs.map((img, i) => (
          <div key={i}>
            <SwiperSlide>
              <img src={img} className="imgCustomMobile" alt="" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileImg;
