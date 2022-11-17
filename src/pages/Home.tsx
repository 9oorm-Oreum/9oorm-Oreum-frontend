import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Select from '../components/home/Select';
import { postMyOreum } from '../api';
import { useNavigate } from 'react-router-dom';

const HomeBlock = styled.div`
  background-color: #49a098;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1px;

  @media screen and (max-width: 390px) {
    font-size: 0.9px;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.8px;
  }
`;
const Header = styled.header`
  background-color: #eeeeee;
  height: 14%;
`;
const Icon = styled.div`
  background-color: #aaaaaa;
  height: 20%;
`;
const Main = styled.main`
  height: 26%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const InputContainer = styled.div`
  height: 40%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 25px;
  & > div {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
`;

const InputBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  & + & {
    width: 60%;
  }
  & > h3 {
    font-family: 'Pretendard';
    color: white;
    font-size: 18em;
    font-weight: 700;
  }

  & > label {
    height: 60%;
  }

  & input {
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 16em;
    width: 100%;
    height: 100%;
    padding: 0 9px;
    border: 1px solid #bababa;
    border-radius: 10px;
    background-color: #fafafa;
  }

  & input::placeholder {
    color: #bababa;
  }

  & > div {
    height: 60%;
    display: flex;
    gap: 9px;
  }
`;

const Button = styled.button`
  background-color: #362c1b;
  height: 40%;
  border-radius: 10px;
  width: 100%;
  font-family: 'BinggraeSamancoBold';
  color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 33em;
`;

export default function HomePage() {
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const navigate = useNavigate();

  const handleClick = async () => {
    if (inputRef.current) {
      const response = await postMyOreum({
        nickname: inputRef.current.value,
        month,
        day,
      });

      console.log(response.data);
      navigate(`./result/${response.data.myOreumId}`);
    }
  };

  return (
    <HomeBlock>
      <Header></Header>
      <Icon></Icon>
      <Main>
        <InputContainer>
          <InputBlock>
            <h3>이름</h3>
            <label htmlFor='name'>
              <input type='직접 입력' placeholder='직접 입력' maxLength={4} id='name' ref={inputRef} />
            </label>
          </InputBlock>
          <InputBlock>
            <h3>생일</h3>
            <div>
              <Select range={12} setState={setMonth} value={month}>
                월
              </Select>
              <Select range={month !== '' ? date[parseInt(month, 10) - 1] : 0} setState={setDay} value={day}>
                일
              </Select>
            </div>
          </InputBlock>
        </InputContainer>
        <Button onClick={handleClick}>나만의 오름 만들기</Button>
      </Main>
    </HomeBlock>
  );
}
