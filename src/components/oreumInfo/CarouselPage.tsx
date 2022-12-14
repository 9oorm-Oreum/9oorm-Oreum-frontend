import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import MyOreumInfo from './MyOreumInfo';
import CareOreum from './CareOreum';
import ProtectOreum from './ProtectOreum';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MyOreumResponse } from '../../api/types';
import { getMyOreum } from '../../api';
import { useEffect } from 'react';
import { OREUM_TYPE_INFO } from '../myOreumResult/constants';

export default function CarouselPage() {
  const { id } = useParams();
  const { data: myOreum } = useQuery<Pick<MyOreumResponse, 'type' | 'xpos' | 'ypos' | 'myOreumId' | 'left' | 'right'>>(
    ['myOreum', id],
    async () => {
      if (!id) throw new Error('잘못된 접근입니다');
      const { type, ypos, xpos, myOreumId, left, right } = await getMyOreum(+id);
      console.log('query', left, right);
      return { type, ypos, xpos, myOreumId, left, right };
    },
    {
      enabled: !!id,
      onSuccess: (data) => {
        console.log(data);
      },
    },
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (id && isNaN(+id)) navigate('/');
  }, [id]);

  return (
    <CarouselBlock>
      <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ type: 'bullets' }}>
        <SwiperSlide>
          {myOreum && (
            <MyOreumInfo
              name={OREUM_TYPE_INFO[myOreum.type].name}
              description={OREUM_TYPE_INFO[myOreum.type].description}
              xpos={+myOreum.xpos}
              ypos={+myOreum.ypos}
              imageInfo={{ type: myOreum.type, left: myOreum.left, right: myOreum.right }}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {myOreum && <CareOreum imageInfo={{ type: myOreum.type, left: myOreum.left, right: myOreum.right }} />}
        </SwiperSlide>
        <SwiperSlide>
          {myOreum && (
            <ProtectOreum
              myOreumId={myOreum?.myOreumId ?? -1}
              imageInfo={{ type: myOreum.type, left: myOreum.left, right: myOreum.right }}
            />
          )}
        </SwiperSlide>
      </Swiper>
    </CarouselBlock>
  );
}

const CarouselBlock = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
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
    bottom: 100px;
  }
  .swiper {
    height: 100%;
  }
`;
