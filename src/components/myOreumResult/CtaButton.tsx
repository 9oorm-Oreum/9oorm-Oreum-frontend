import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function CtaButton({ children, className }: CtaButtonProps) {
  return <Container className={className}>{children}</Container>;
}

const Container = styled.button`
  width: 100%;
  font-family: 'Binggrae Samanco';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 22px;
  color: #000000;
  background-color: #fdc265;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px 14px;
`;
