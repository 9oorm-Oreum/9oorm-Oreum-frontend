import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

const SelectBlock = styled.select<{ value: string }>`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16em;
  width: 100%;
  height: 47px;
  padding: 0 9px;
  border: 1px solid #bababa;
  border-radius: 10px;
  color: ${(props) => (props.value === '' ? '#bababa' : 'black')};
  & option[value=''] {
    display: none;
  }
`;

const SelectContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 0 solid #bababa;
  border-top: 5.5px solid #bababa;
  border-left: 5.5px solid transparent;
  border-right: 5.5px solid transparent;
  position: absolute;
  right: 9px;
  top: 18px;
  bottom: 18px;
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
  }, [range]);

  return (
    <SelectContainer>
      <SelectBlock value={value || ''} onChange={(e) => handleSelect(e)}>
        <option value='' disabled>
          {children}
        </option>
        {options.map((option) => {
          return <option value={option} key={option}>{`${option}${children}`}</option>;
        })}
      </SelectBlock>
      <Triangle />
    </SelectContainer>
  );
};

export default Select;
