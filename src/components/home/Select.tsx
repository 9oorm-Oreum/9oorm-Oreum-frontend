import { ReactNode, useState } from 'react';
import styled from 'styled-components';

const SelectBlock = styled.select<{ value: string }>`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16em;
  width: 100%;
  height: 100%;
  padding: 0 9px;
  border: 1px solid #bebebe;
  border-radius: 10px;
  color: ${(props) => (props.value === '' ? '#bababa' : 'black')};
  & option[value=''] {
    display: none;
  }
`;

interface SelectProps {
  children: ReactNode;
}

const Select = ({ children }: SelectProps) => {
  const [selected, setSelected] = useState('');
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  return (
    <SelectBlock value={selected || ''} onChange={(e) => handleSelect(e)}>
      <option value='' disabled>
        {children}
      </option>
      <option value='1'>1월</option>
      <option value='2'>2월</option>
    </SelectBlock>
  );
};

export default Select;
