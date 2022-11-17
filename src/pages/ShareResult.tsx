import html2canvas from 'html2canvas';
import styled from 'styled-components';
import Title from '../components/myOreumResult/Title';
import MyOreumName from '../components/myOreumResult/MyOreumName';
import MyOreumImage from '../components/common/MyOreumImage';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MyOreumResponse } from '../api/types';
import { getMyOreum } from '../api';
import { OREUM_TYPE_INFO } from '../components/myOreumResult/constants';
import { useEffect } from 'react';
import ShareButton from '../components/shareResult/Button';
import Button from '../components/home/Button';

export default function ShareResultPage() {
  const { id, share } = useParams();
  const { data: myOreum } = useQuery<Pick<MyOreumResponse, 'nickname' | 'name' | 'type' | 'myOreumId'>>(
    ['myOreum', id],
    async () => {
      if (!id) throw new Error('잘못된 접근입니다');
      const { nickname, name, type, myOreumId } = await getMyOreum(+id);
      return { nickname, name, type, myOreumId };
    },
    {
      enabled: !!id,
      onSuccess: (data) => {
        console.log(data);
      },
    },
  );
  const navigate = useNavigate();

  const saveSticker = () => {
    const sticker = document.getElementById('sticker');
    if (sticker) {
      html2canvas(sticker, { backgroundColor: null }).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        saveImage(image);
      });
    }
  };

  const saveImage = (uri: string) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = '나영오름 스티커.png';
    link.click();
    document.body.removeChild(link);
  };

  const shareKakao = () => {
    if ((window as any).Kakao) {
      const kakao = (window as any).Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY);
      }
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '나영오름',
          description: '나만의 오름 찾으러 가기',
          imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            webUrl: 'https://9oorm-oreum-frontend.vercel.app/',
            mobileWebUrl: 'https://9oorm-oreum-frontend.vercel.app/',
          },
        },
        buttons: [
          {
            title: '친구 결과 확인',
            link: {
              mobileWebUrl: `https://9oorm-oreum-frontend.vercel.app/share/${myOreum?.myOreumId}/true`,
              webUrl: `https://9oorm-oreum-frontend.vercel.app/share/${myOreum?.myOreumId}/true`,
            },
          },
          {
            title: '나의 오름 찾기',
            link: {
              mobileWebUrl: 'https://9oorm-oreum-frontend.vercel.app/',
              webUrl: 'https://9oorm-oreum-frontend.vercel.app/',
            },
          },
        ],
      });
    }
  };

  useEffect(() => {
    if (id && isNaN(+id)) navigate('/');
  }, [id]);

  return (
    <Container>
      <StyledTitle content={myOreum?.nickname ?? ''} />
      <StyledMyOreumName content={myOreum?.name ?? ''} />
      <OreumType>{myOreum ? OREUM_TYPE_INFO[myOreum.type].name : ''}</OreumType>
      <StyledMyOreumImage />
      {!share && (
        <ButtonContainer>
          <ShareButton handleClick={() => saveSticker()}>스티커 저장</ShareButton>
          <ShareButton handleClick={() => shareKakao()}>카카오톡 공유</ShareButton>
        </ButtonContainer>
      )}
      <Button onClick={() => navigate('../')}>처음으로</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #49a098;
  padding: 0 15px;
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

const StyledMyOreumName = styled(MyOreumName)`
  margin-top: 27px;
`;

const OreumType = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 17em;
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

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 25px;
  gap: 15px;
  margin-top: 5%;
  margin-bottom: 5%;
`;
