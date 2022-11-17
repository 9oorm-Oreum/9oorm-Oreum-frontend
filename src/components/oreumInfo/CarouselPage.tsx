import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import MyOreumInfo from './MyOreumInfo';
import CareOreum from './CareOreum';
import ProtectOreum from './ProtectOreum';

export default function CarouselPage() {
  return (
    <CarouselBlock>
      <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ type: 'bullets' }}>
        <SwiperSlide>
          <MyOreumInfo />
        </SwiperSlide>
        <SwiperSlide>
          <CareOreum />
        </SwiperSlide>
        <SwiperSlide>
          <ProtectOreum />
        </SwiperSlide>
      </Swiper>
    </CarouselBlock>
  );
}

const CarouselBlock = styled.div`
  width: 100%;
  height: 85%;
  padding: 50px 29px 0 29px;
  background-color: #c9e0de;

  .swiper-pagination {
  }

  .swiper-pagination-bullet {
    background-color: white;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #49a098;
  }
  .swiper-pagination-bullets {
    bottom: 10px;
  }
  .swiper {
    height: 100%;
  }
`;
