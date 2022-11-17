import React from 'react';
import styled from 'styled-components';
import Select from '../components/home/Select';

const HomeBlock = styled.div`
  background-color: #49a098;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1px;

  @media screen and (max-width: 350px) {
    font-size: 0.9px;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.8px;
  }
`;
const Header = styled.header`
  background-color: #eeeeee;
  height: 14%;
`;
const Icon = styled.div`
  background-color: #aaaaaa;
  height: 18%;
`;
const Main = styled.main`
  background-color: #bbbbbb;
  height: 26%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const InputContainer = styled.div`
  background-color: #cccccc;
  height: 40%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10%;
  &:first-child {
    flex-basis: 1;
  }
  &:last-child {
    flex-basis: 2;
  }
  & > div {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    width: 50%;
  }
`;

const InputBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > h3 {
    font-family: 'Pretendard';
    color: white;
    font-size: 18em;
    font-weight: 700;
  }

  & > input {
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 16em;
    width: 100%;
    height: 60%;
    padding: 0 9px;
    border: 1px solid #bebebe;
    border-radius: 10px;
    box-sizing: border-box;
  }

  & > input::placeholder {
    color: #bababa;
  }

  & > div {
    height: 100%;
    display: flex;
    gap: 9px;
  }
`;

const Button = styled.button`
  background-color: #362c1b;
  height: 40%;
  border-radius: 50em;
  width: 100%;
  font-family: 'BinggraeSamancoBold';
  color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 33em;
`;

export default function HomePage() {
  return (
    <HomeBlock>
      <Header></Header>
      <Icon></Icon>
      <Main>
        <InputContainer>
          <InputBlock>
            <h3>닉네임</h3>
            <input type='직접 입력' placeholder='직접 입력' />
          </InputBlock>
          <InputBlock>
            <h3>생일</h3>
            <div>
              <Select>월</Select>
              <Select>일</Select>
            </div>
          </InputBlock>
        </InputContainer>
        <Button>나만의 오름 만들기</Button>
      </Main>
    </HomeBlock>
  );
}
