import html2canvas from 'html2canvas';
import styled from 'styled-components';
import Title from '../components/myOreumResult/Title';
import MyOreumName from '../components/myOreumResult/MyOreumName';
import Button from '../components/shareResult/Button';
import CtaButton from '../components/myOreumResult/CtaButton';
import MyOreumImage from '../components/common/MyOreumImage';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MyOreumResponse } from '../api/types';
import { getMyOreum } from '../api';
import { OREUM_TYPE_INFO } from '../components/myOreumResult/constants';

export default function ShareResultPage() {
  const { id } = useParams();
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

  const saveSticker = (type: string) => {
    const sticker = document.getElementById('sticker');
    if (sticker) {
      html2canvas(sticker).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        if (type === 'save') {
          saveImage(image);
        } else {
          shareKakao(image);
        }
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

  const shareKakao = (imageUrl: string) => {
    if ((window as any).Kakao) {
      const kakao = (window as any).Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '오늘의 디저트',
          description: '아메리카노, 빵, 케익',
          imageUrl: '이미지 uri',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        itemContent: {
          profileText: 'Kakao',
          profileImageUrl:
            'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          titleImageUrl:
            'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          titleImageText: 'Cheese cake',
          titleImageCategory: 'Cake',
          items: [
            {
              item: 'Cake1',
              itemOp: '1000원',
            },
            {
              item: 'Cake2',
              itemOp: '2000원',
            },
            {
              item: 'Cake3',
              itemOp: '3000원',
            },
            {
              item: 'Cake4',
              itemOp: '4000원',
            },
            {
              item: 'Cake5',
              itemOp: '5000원',
            },
          ],
          sum: '총 결제금액',
          sumOp: '15000원',
        },
        buttons: [
          {
            title: '친구 결과 확인',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
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

  return (
    <Container>
      <StyledTitle content={myOreum?.nickname ?? ''} />
      <StyledMyOreumName content={myOreum?.name ?? ''} />
      <OreumType>{myOreum ? OREUM_TYPE_INFO[myOreum.type].name : ''}</OreumType>
      <StyledMyOreumImage />
      <ButtonContainer>
        <Button handleClick={() => saveSticker('save')}>스티커 저장</Button>
        <Button handleClick={() => saveSticker('share')}>카카오톡 공유</Button>
      </ButtonContainer>
      <StyledCtaButton onClick={() => navigate('/')}>처음으로</StyledCtaButton>
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

const StyledCtaButton = styled(CtaButton)`
  margin-top: 103px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 25px;
  gap: 15px;
  margin-top: 65px;
`;
