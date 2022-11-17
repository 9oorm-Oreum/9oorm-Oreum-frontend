import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getMyOreum } from '../../api';
import { MyOreumResponse } from '../../api/types';
import MyOreumImage from '../common/MyOreumImage';
import { OREUM_TYPE_INFO } from '../myOreumResult/constants';

export default function MyOreumInfo() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const kakao = (window as any).kakao;

  const { id } = useParams();
  const { data: myOreum } = useQuery<Pick<MyOreumResponse, 'type' | 'xpos' | 'ypos'>>(
    ['myOreum', id],
    async () => {
      if (!id) throw new Error('잘못된 접근입니다');
      const { type, ypos, xpos } = await getMyOreum(+id);
      return { type, ypos, xpos };
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
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.380648, 126.579557),
      level: 11,
    };
    const map = new kakao.maps.Map(container, options);
    const markerImage = new kakao.maps.MarkerImage(
      'https://user-images.githubusercontent.com/73823388/202508198-a3c89f34-456f-4b0e-b3f0-d8a99c02fde5.png',
      new kakao.maps.Size(22.93, 27.33),
    );
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(myOreum?.ypos ?? -1, myOreum?.xpos ?? -1),
      image: markerImage, // 마커이미지 설정
    });
    marker.setMap(map);
  }, []);

  return (
    <Container>
      <OreumTypeSection>
        <OreumTypeTitle>
          내 오름은
          <span className='type-name'> {myOreum ? OREUM_TYPE_INFO[myOreum?.type].name : ''}</span>
          이에요
        </OreumTypeTitle>
        <MyOreumImage isSmall className='image' />
        <div className='type-description'>{myOreum ? OREUM_TYPE_INFO[myOreum?.type].description : ''}</div>
      </OreumTypeSection>
      <OreumPositionSection>
        <OreumPositionTitle>
          내 오름,<span className='where'> 어디</span>에 있을까요?
        </OreumPositionTitle>
        <div
          id='map'
          style={{
            width: '100%',
            height: '113px',
          }}
        ></div>
      </OreumPositionSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 69px;
`;

const OreumTypeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image {
    margin-top: 11px;
  }

  .type-description {
    background-color: #ffffff;
    border-radius: 30px;
    padding: 13.5px 31.5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;
    white-space: pre-line;
    text-align: center;
    margin-top: 11px;
  }
`;

const OreumTypeTitle = styled.div`
  font-family: 'Binggrae Samanco';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 22px;
  letter-spacing: -0.408px;

  .type-name {
    color: #f59d06;
  }
`;

const OreumPositionSection = styled.section`
  margin-top: 58px;
  margin-bottom: 63px;
  width: 100%;
  height: 100%;
  padding: 0 29px;

  #map {
    margin-top: 18px;
    border-radius: 30px;
  }
`;

const OreumPositionTitle = styled.div`
  font-family: 'Binggrae Samanco';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #000000;

  .where {
    color: #f59d06;
  }
`;
