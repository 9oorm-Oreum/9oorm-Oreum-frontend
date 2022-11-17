import styled from 'styled-components';

export default function MyOreumImage({ className }: { className?: string }) {
  return <Container className={className}>MyOreumImage</Container>;
}

const Container = styled.div`
  height: 243px;
  background-color: gray;
  width: 100%;
`;
