import "./mobileImage.css";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function MobileImg({ img1, img2, img3, img4 }) {
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
        <SwiperSlide>
          <img src={img1} className="imgCustomMobile" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img2} className="imgCustomMobile" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} className="imgCustomMobile" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img4} className="imgCustomMobile" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MobileImg;
