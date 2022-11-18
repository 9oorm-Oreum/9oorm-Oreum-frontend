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
  const { data: myOreum } = useQuery<
    Pick<MyOreumResponse, 'nickname' | 'name' | 'type' | 'myOreumId' | 'left' | 'right'>
  >(
    ['myOreum', id],
    async () => {
      if (!id) throw new Error('잘못된 접근입니다');
      const { nickname, name, type, myOreumId, left, right } = await getMyOreum(+id);
      return { nickname, name, type, myOreumId, left, right };
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
          imageUrl:
            'https://user-images.githubusercontent.com/52497708/202596769-d409bd63-0288-42c6-b140-30e68679e3e7.png',
          link: {
            webUrl: 'https://nayeongoreum.vercel.app/',
            mobileWebUrl: 'https://nayeongoreum.vercel.app',
          },
        },
        buttons: [
          {
            title: '친구 결과확인',
            link: {
              mobileWebUrl: `https://nayeongoreum.vercel.app/share/${myOreum?.myOreumId}/true`,
              webUrl: `https://nayeongoreum.vercel.app/share/${myOreum?.myOreumId}/true`,
            },
          },
          {
            title: '나의 오름찾기',
            link: {
              mobileWebUrl: 'https://nayeongoreum.vercel.app/',
              webUrl: 'https://nayeongoreum.vercel.app/',
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
      {myOreum && <StyledMyOreumImage type={myOreum.type} left={myOreum.left} right={myOreum.right} />}
      {!share && (
        <ButtonContainer>
          <ShareButton handleClick={() => saveSticker()}>스티커 저장</ShareButton>
          <ShareButton handleClick={() => shareKakao()}>카카오톡 공유</ShareButton>
        </ButtonContainer>
      )}
      <StyledButton onClick={() => navigate('../')}>처음으로</StyledButton>
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
`;

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  background-color: #fdc265;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #000000;
  font-family: 'Binggrae Samanco';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 22px;
  width: calc(100% - 30px);
  max-width: calc(390px - 30px);
  padding: 20px 14px;
`;
