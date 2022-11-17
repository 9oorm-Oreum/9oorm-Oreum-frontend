import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ disabled: boolean; active: boolean }>`
  background-color: ${(props) => (props.disabled ? '#bababa' : '#362c1b')};
  border-radius: 10px;
  width: 100%;
  font-family: 'BinggraeSamancoBold';
  color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 33em;
  line-height: 22px;
  padding: 20px 14px;
  color: ${(props) => props.active && 'black'};
  background-color: ${(props) => props.active && '#fdc265'};
`;

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({ onClick, disabled, children }: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled === undefined ? false : disabled}
      active={disabled === undefined}
    >
      {children}
    </StyledButton>
  );
}
