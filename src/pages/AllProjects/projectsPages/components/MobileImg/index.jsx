import "./mobileImage.css";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// import required modules
import { EffectCards } from "swiper";

function MobileImg({ img1, img2, img3, img4 }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      {(() => {
        if (windowSize.innerWidth < 768) {
          return (
            <Swiper
              slidesPerView={4}
              spaceBetween={50}
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
          );
        } else {
          return (
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
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
          );
        }
      })()}
    </div>
  );
}

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

export default MobileImg;
