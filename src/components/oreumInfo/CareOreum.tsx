import styled from 'styled-components';
import MyOreumImage from '../common/MyOreumImage';

export default function CareOreum() {
  return (
    <Container>
      <MyOreumImage isSmall className='image' />
      <OreumTypeTitle>
        <span>오름을 </span>
        <span className='type-name'>어떻게 돌봐야 </span>
        <span>하나요?</span>
      </OreumTypeTitle>
      <Description>
        오름에는 적절한 관심이 필요해요. 과도한 관심은 오름의 훼손을 가속화 해요. 일정기간 출입을 통제하는
        자연휴식년제가 필요해지기도 한답니다. 과소한 관심으로 골프장 건설과 같은 각종 개발 사업으로 이어져 오름이 사라질
        수 있어요.
      </Description>
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
  font-size: 30em;
  line-height: 22px;
  margin-top: 8px;
  .type-name {
    color: #f59d06;
  }
`;

const Description = styled.section`
  background-color: white;
  width: 100%;
  font-family: Pretendard;
  font-size: 15em;
  line-height: 25px;
  font-weight: 400;
  padding: 34px 19px;
  border-radius: 30px;
  margin-top: 40px;
`;
