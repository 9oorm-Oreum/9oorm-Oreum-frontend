import styled from 'styled-components';

export default function MyOreumResultTitle({ content }: { content: string }) {
  return (
    <Container>
      <div className='name'>{content}</div>
      <div className='common'>의 오름은?</div>
    </Container>
  );
}

const Container = styled.h1`
  display: flex;
  gap: 9px;
  font-family: 'Binggrae Samanco';
  font-style: normal;
  font-weight: 700;
  align-items: center;

  .name {
    font-size: 64px;
    color: #f59d06;
  }

  .common {
    font-size: 48px;
    color: #000000;
  }
`;
