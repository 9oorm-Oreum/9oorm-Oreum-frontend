import styled from 'styled-components';

export default function MyOreumResultTitle({ content, className }: { content: string; className?: string }) {
  return (
    <Container className={className}>
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
    font-size: 64em;
    color: #f59d06;
  }

  .common {
    font-size: 48em;
    color: #000000;
  }
`;
