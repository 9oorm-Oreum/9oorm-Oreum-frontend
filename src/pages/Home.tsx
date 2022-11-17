import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '../components/home/Select';
import { postMyOreum } from '../api';
import { useNavigate } from 'react-router-dom';
import Button from '../components/home/Button';

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
  @media screen and (max-width: 300px) {
    font-size: 0.7px;
  }
`;
const Header = styled.header`
  background-color: #eeeeee;
  height: 15%;
`;
const Icon = styled.div`
  background-color: #aaaaaa;
  height: 35%;
`;
const Main = styled.main`
  padding: 0 15px;
  display: flex;
  height: 35%;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 25px;
  margin-bottom: 7%;
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
    font-family: Pretendard;
    color: white;
    font-size: 18em;
    font-weight: 700;
  }

  & > label {
    height: 60%;
  }

  & input {
    font-family: Pretendard;
    font-weight: 500;
    font-size: 16em;
    width: 100%;
    height: 47px;
    padding: 0 9px;
    border: 1px solid #bababa;
    border-radius: 10px;
    background-color: #fafafa;
  }

  & input::placeholder {
    color: #bababa;
  }

  & > div {
    display: flex;
    gap: 9px;
  }
`;

export default function HomePage() {
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [name, setName] = useState<string>('');
  const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await postMyOreum({
      nickname: name,
      month,
      day,
    });

    navigate(`./result/${response.data.myOreumId}`);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <HomeBlock>
      <Header></Header>
      <Icon></Icon>
      <Main>
        <InputContainer>
          <InputBlock>
            <h3>이름</h3>
            <input type='직접 입력' placeholder='직접 입력' maxLength={4} id='name' onChange={handleInput} />
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
        <Button onClick={handleClick} disabled={name === '' || month === '' || day === ''}>
          나만의 오름보기
        </Button>
      </Main>
    </HomeBlock>
  );
}
