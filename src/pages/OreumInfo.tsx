import styled from 'styled-components';
import { OREUM_TYPE_INFO } from '../components/myOreumResult/constants';
import MyOreumInfo from '../components/oreumInfo/MyOreumInfo';

export default function OreumInfoPage() {
  return (
    <Container>
      <MyOreumInfo
        type={{ name: OREUM_TYPE_INFO.CIRCLE.name, description: OREUM_TYPE_INFO.CIRCLE.description }}
        xpos={1}
        ypos={11}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c9e0de;
  display: flex;
`;
