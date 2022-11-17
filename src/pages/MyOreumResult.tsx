import Title from '../components/myOreumResult/Title';
import styled from 'styled-components';
import MyOreumName from '../components/myOreumResult/MyOreumName';
import CtaButton from '../components/myOreumResult/CtaButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMyOreum } from '../api';
import { useQuery } from 'react-query';
import MyOreumImage from '../components/common/MyOreumImage';
import { OREUM_TYPE_INFO } from '../components/myOreumResult/constants';
import { MyOreumResponse } from '../api/types';

export default function MyOreumResultPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: myOreum } = useQuery<Pick<MyOreumResponse, 'nickname' | 'name' | 'type' | 'myOreumId'>>(
    ['myOreum', id],
    async () => {
      console.log('get');
      if (!id) throw new Error('잘못된 접근입니다');
      const { nickname, name, type, myOreumId } = await getMyOreum(+id);
      return { nickname, name, type, myOreumId };
    },
    {
      enabled: !!id,
      onSuccess: () => {
        console.log(myOreum);
      },
    },
  );

  useEffect(() => {
    if (id && isNaN(+id)) navigate('/');
  }, [id]);

  return (
    <Container>
      <StyledTitle content={myOreum?.nickname ?? ''} />
      <StyledMyOreumName content={myOreum?.name ?? ''} />
      <OreumType>{myOreum?.type ? OREUM_TYPE_INFO[myOreum.type].name : ''}</OreumType>
      <StyledMyOreumImage />
      <Description> {`제주도에 실제로 있는 나만의 오름이에요\n오름에 대해 더 알아볼까요?`}</Description>
      <StyledCtaButton onClick={() => navigate(`/info/${myOreum?.myOreumId}`)}>나만의 오름 알아보기</StyledCtaButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #49a098;
  padding: 0 15px;
`;

const StyledMyOreumName = styled(MyOreumName)`
  margin-top: 27px;
`;

const OreumType = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 12px;
`;

const StyledMyOreumImage = styled(MyOreumImage)`
  margin-top: 9px;
`;

const StyledTitle = styled(Title)`
  margin-top: 59px;
`;

const Description = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  line-height: 160%;
  color: #ffffff;
  white-space: pre-line;
  text-align: center;
  margin-top: 24px;
`;

const StyledCtaButton = styled(CtaButton)`
  margin-top: 103px;
  margin-bottom: 56px;
`;
