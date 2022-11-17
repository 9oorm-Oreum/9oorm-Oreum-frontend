import styled from 'styled-components';
import MyOreumImage from '../common/MyOreumImage';

interface MyOreumInfoProps {
  type: { name: string; description: string };
  xpos: number;
  ypos: number;
}

export default function MyOreumInfo({ type, xpos, ypos }: MyOreumInfoProps) {
  return (
    <Container>
      <OreumTypeSection>
        <OreumTypeTitle>
          <span>내 오름은 </span>
          <span className='type-name'>{type.name}</span>
          <span>이에요</span>
        </OreumTypeTitle>
        <MyOreumImage isSmall className='image' />
        <div className='type-description'>{type.description}</div>
      </OreumTypeSection>
      <OreumPositionSection></OreumPositionSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 69px;
`;

const OreumTypeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OreumTypeTitle = styled.div`
  font-family: 'Binggrae Samanco';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 22px;

  .type-name {
    color: #f59d06;
  }
`;

const OreumPositionSection = styled.section``;
