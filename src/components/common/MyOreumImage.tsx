import styled from 'styled-components';

export default function MyOreumImage({ className, isSmall }: { className?: string; isSmall?: boolean }) {
  return (
    <Container className={className} isSmall={isSmall}>
      MyOreumImage
    </Container>
  );
}

const Container = styled.div<{ isSmall?: boolean }>`
  background-color: gray;
  width: ${({ isSmall }) => (isSmall ? '240px' : '100%')};
  height: ${({ isSmall }) => (isSmall ? '104px' : '243px')};
`;
