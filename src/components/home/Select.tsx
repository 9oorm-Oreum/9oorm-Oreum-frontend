import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

const SelectBlock = styled.select<{ value: string }>`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16em;
  width: 100%;
  height: 100%;
  padding: 0 9px;
  border: 1px solid #bababa;
  border-radius: 10px;
  color: ${(props) => (props.value === '' ? '#bababa' : 'black')};
  & option[value=''] {
    display: none;
  }
`;

interface SelectProps {
  children: ReactNode;
  range: number;
  setState: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const Select = ({ children, range, setState, value }: SelectProps) => {
  const [options, setOptions] = useState<number[]>([]);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };
  useEffect(() => {
    const temp = [];
    for (let i = 1; i <= range; i++) temp.push(i);
    setOptions(temp);
    console.log(temp);
  }, [range]);

  return (
    <SelectBlock value={value || ''} onChange={(e) => handleSelect(e)}>
      <option value='' disabled>
        {children}
      </option>
      {options.map((option) => {
        return <option value={option} key={option}>{`${option}${children}`}</option>;
      })}
    </SelectBlock>
  );
};

export default Select;
