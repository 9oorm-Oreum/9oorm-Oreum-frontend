import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? '#bababa' : '#362c1b')};
  height: 73px;
  border-radius: 10px;
  width: 100%;
  font-family: 'BinggraeSamancoBold';
  color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 33px;
  line-height: 22px;
  padding: 20px 14px;
`;

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({ onClick, disabled, children }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled === undefined ? false : disabled}>
      {children}
    </StyledButton>
  );
}
