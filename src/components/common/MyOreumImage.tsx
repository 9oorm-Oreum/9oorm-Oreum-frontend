import styled from 'styled-components';

export default function MyOreumImage({ className, isSmall }: { className?: string; isSmall?: boolean }) {
  return (
    <Container className={className} isSmall={isSmall}>
      MyOreumImage
    </Container>
  );
}

const Container = styled.div<{ isSmall?: boolean }>`
  height: 243px;
  background-color: gray;
  width: ${({ isSmall }) => (isSmall ? '240px' : '100%')};
`;
