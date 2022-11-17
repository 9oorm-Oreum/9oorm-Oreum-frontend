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
  height: 100vh;
  background-color: #c9e0de;
  display: flex;
`;
