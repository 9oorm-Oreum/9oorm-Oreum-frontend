import styled from 'styled-components';

export default function MyOreumName({ content }: { content: string }) {
  return <Container>{content}</Container>;
}

const Container = styled.div`
  font-family: 'Binggrae Samanco';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 22px;
  color: #000000;
  padding: 14px 30px;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 30px;
`;
