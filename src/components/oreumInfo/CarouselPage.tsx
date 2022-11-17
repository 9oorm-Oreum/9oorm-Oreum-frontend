import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import MyOreumInfo from './MyOreumInfo';
import { OREUM_TYPE_INFO } from '../myOreumResult/constants';

export default function CarouselPage() {
  return (
    <CarouselBlock>
      <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ type: 'bullets' }}>
        <SwiperSlide>
          <MyOreumInfo
            type={{ name: OREUM_TYPE_INFO.CIRCLE.name, description: OREUM_TYPE_INFO.CIRCLE.description }}
            xpos={1}
            ypos={11}
          />
        </SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </CarouselBlock>
  );
}

const CarouselBlock = styled.div`
  width: 100%;
  height: 600px;
  background-color: yellow;
  padding: 57px 29px 23px 29px;
  .swiper-pagination {
    bottom: 0;
  }
  .swiper-pagination-bullet-active {
    background-color: #49a098;
  }
  .swiper-pagination-bullets {
    bottom: 0;
  }
  .swiper {
    background-color: pink;
    height: 100%;
  }
`;
