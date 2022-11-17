import { useEffect } from 'react';
import styled from 'styled-components';
import MyOreumImage from '../common/MyOreumImage';

interface MyOreumInfoProps {
  name: string;
  description: string;
  ypos: number;
  xpos: number;
}

export default function MyOreumInfo({ name, description, ypos, xpos }: MyOreumInfoProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const kakao = (window as any).kakao;

  useEffect(() => {
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
      position: new kakao.maps.LatLng(ypos, xpos),
      image: markerImage, // 마커이미지 설정
    });
    marker.setMap(map);
  }, []);

  return (
    <Container>
      <OreumTypeSection>
        <OreumTypeTitle>
          내 오름은
          <span className='type-name'> {name}</span>
          이에요
        </OreumTypeTitle>
        <MyOreumImage isSmall className='image' />
        <div className='type-description'>{description}</div>
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
`;

const OreumTypeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .image {
    margin-top: 11px;
  }
  .type-description {
    background-color: #ffffff;
    border-radius: 30px;
    padding: 13.5px 31.5px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    font-size: 17em;
    line-height: 28px;
    white-space: pre-line;
    text-align: center;
    margin-top: 11px;
    width: 100%;
  }
`;

const OreumTypeTitle = styled.div`
  font-family: 'Binggrae Samanco';
  font-style: normal;
  font-weight: 700;
  font-size: 30em;
  line-height: 30px;
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
  #map {
    margin-top: 18px;
    border-radius: 30px;
  }
`;

const OreumPositionTitle = styled.div`
  font-family: 'Binggrae Samanco';
  font-style: normal;
  font-weight: 700;
  font-size: 30em;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #000000;

  .where {
    color: #f59d06;
  }
`;
