import styled from 'styled-components';
import MyOreumImage from '../common/MyOreumImage';

export default function ProtectOreum() {
  return (
    <Container>
      <MyOreumImage isSmall className='image' />
      <OreumTypeTitle>
        <span>이렇게 </span>
        <span className='type-name'>오름을 보호</span>
        <span>해주세요!</span>
      </OreumTypeTitle>
      <DescriptionBlock>
        <Description>오름에 꾸준히 관심을 가져주세요.</Description>
        <Description>차량보다는 대중교통을 이용해 방문해주세요.</Description>
        <Description>만들어진 탐방로는 벗어나지 말아요.</Description>
        <Description>전문 등산 장비는 사용을 자제해 주세요.</Description>
      </DescriptionBlock>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 30px;
  width: 100%;
`;

const Description = styled.section`
  background-color: white;
  width: 100%;
  font-family: 'Pretendard';
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  padding: 10px 0;
  border-radius: 30px;
  text-align: center;
`;
