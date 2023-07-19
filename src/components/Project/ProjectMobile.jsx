import ProjectCards from "./ProjectCards";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

function ProjectMobile() {
  const [armazena, setArmazena] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/posts?populate=*";
    fetch(url)
      .then((res) => res.json())
      .then((post) => {
        const temporario = post.data.filter(
          (separa) => separa.attributes.favorite === "Yes"
        );
        setArmazena(temporario);
      });
  }, []);

  console.log(armazena);

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
      <div>
        {armazena.map((post, i) => (
          <div key={i}>
            {(() => {
              if (post.id % 2 !== 0) {
                return (
                  <SwiperSlide>
                    <ProjectCards
                      imgProject={
                        "http://localhost:1337" +
                        post.attributes.coverImg.data.attributes.url
                      }
                      title={post.attributes.title}
                      cardText={post.attributes.description}
                      linkText={`/AllProjects/DesktopPage/${post.id}`}
                    />
                  </SwiperSlide>
                );
              } else {
                return (
                  <SwiperSlide>
                    <ProjectCards
                      imgProject={
                        "http://localhost:1337" +
                        post.attributes.coverImg.data.attributes.url
                      }
                      title={post.attributes.title}
                      cardText={post.attributes.description}
                      linkText={`/AllProjects/MobilePage/${post.id}`}
                    />
                  </SwiperSlide>
                );
              }
            })()}
          </div>
        ))}
      </div>
    </Swiper>
  );
}

export default ProjectMobile;
