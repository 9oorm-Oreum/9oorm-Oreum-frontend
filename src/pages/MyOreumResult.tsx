import Title from '../components/myOreumResult/Title';
import styled from 'styled-components';
import MyOreumName from '../components/myOreumResult/MyOreumName';
import { useEffect } from 'react';

export default function MyOreumResultPage() {
  useEffect(() => {
    fetch('https://9oorm-oreum-backend.shop/oreums/1')
      .then((r) => r.json())
      .then((d) => console.log(d));
  }, []);

  return (
    <Container>
      <Title content='손은서' />
      <StyledMyOreumName content='거문오름' />
      {/* <OreumType /> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMyOreumName = styled(MyOreumName)`
  margin-top: 27px;
`;
