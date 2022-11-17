import styled from 'styled-components';
import CarouselPage from '../components/oreumInfo/CarouselPage';

export default function OreumInfoPage() {
  return (
    <Container>
      <CarouselPage />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c9e0de;
  display: flex;
  font-size: 1px;
  @media screen and (max-width: 390px) {
    font-size: 0.9px;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.8px;
  }
  @media screen and (max-width: 300px) {
    font-size: 0.7px;
  }
`;
