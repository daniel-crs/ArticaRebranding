import "./desktopImg.css";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function DesktopImage({ img1, img2, img3 }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      loop
    >
      <SwiperSlide>
        <img src={img1} className="imgCustom" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img2} className="imgCustom" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img3} className="imgCustom" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default DesktopImage;
