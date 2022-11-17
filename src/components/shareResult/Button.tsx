import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 54px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: #180202;
  background-color: #c9e0de;
`;

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

export default function Button({ children, handleClick }: ButtonProps) {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}
