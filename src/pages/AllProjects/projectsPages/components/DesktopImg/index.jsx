import "./desktopImg.css";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function DesktopImage({ imgs }) {
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
      {imgs.map((img, i) => (
        <div key={i}>
          <SwiperSlide>
            <img src={img} className="imgCustom" alt="" />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}

export default DesktopImage;
