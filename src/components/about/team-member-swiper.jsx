import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../../utils/use-window-size";
import staffList from "../../settings/staff-list";
import TeamMemberCard from "./team-member-card";

const TeamMemberSwiper = () => {
  const { width } = useWindowSize();
  const [slidersPerView, setSlidersPerView] = useState(1);

  useEffect(() => {
    if (!width) return;

    if (width <= 768) setSlidersPerView(1);
    else if (width <= 1024) setSlidersPerView(2);
    else if (width <= 1280) setSlidersPerView(3);
    else setSlidersPerView(4);
  }, [width]);

  return (
    <Swiper
      slidesPerView={slidersPerView}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {staffList.map((data) => (
        <SwiperSlide key={data.id}>
          <TeamMemberCard data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamMemberSwiper;
