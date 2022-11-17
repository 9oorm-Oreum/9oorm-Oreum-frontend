import styled from 'styled-components';
import { OreumType } from '../../api/types';
import {
  imgConeType,
  imgRedFlowerSticker,
  imgHanrabongSticker,
  imgCircleType,
  imgStoneSticker,
  imgYellowFlowerSticker,
  imgComplexType,
  imgHorseShoeType,
} from '../../assets';

export default function MyOreumImage({
  className,
  isSmall,
  type,
  left,
  right,
}: {
  type: OreumType;
  left: number;
  right: number;
  className?: string;
  isSmall?: boolean;
}) {
  const getTypeImage = (type: OreumType) => {
    switch (type) {
      case 'CIRCLE':
        return imgCircleType;
      case 'CONE':
        return imgConeType;
      case 'COMPLEX':
        return imgComplexType;
      case 'HORSESHOE':
        return imgHorseShoeType;
    }
  };

  const getStickerImage = (id: number) => {
    switch (id) {
      case 0:
        return;
      case 1:
        return imgHanrabongSticker;
      case 2:
        return imgRedFlowerSticker;
      case 3:
        return imgStoneSticker;
      case 4:
        return imgYellowFlowerSticker;
    }
  };

  console.log('test', getStickerImage(left), getStickerImage(right));

  return (
    <Container className={className} isSmall={isSmall} id='sticker'>
      <Oreum src={getTypeImage(type)} isSmall={isSmall} />
      {left ? <LeftDecoration src={getStickerImage(left)} isSmall={isSmall} /> : <></>}
      {right ? <RightDecoration src={getStickerImage(right)} isSmall={isSmall} /> : <></>}
    </Container>
  );
}

const Container = styled.div<{ isSmall?: boolean }>`
  width: ${({ isSmall }) => (isSmall ? '240px' : '390px')};
  height: ${({ isSmall }) => (isSmall ? '140px' : '243px')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Oreum = styled.img<{ isSmall?: boolean }>`
  /* position: absolute; */
  width: ${({ isSmall }) => (isSmall ? '194.54px' : '287.34px')};
  height: ${({ isSmall }) => (isSmall ? '120.21px' : '177.56px')};
  /* top: ${({ isSmall }) => (isSmall ? '12px' : '36px')};
  left: ${({ isSmall }) => (isSmall ? '27px' : '51px')}; */
`;

const LeftDecoration = styled.img<{ isSmall?: boolean }>`
  position: absolute;
  width: ${({ isSmall }) => (isSmall ? '49.44px' : '80px')};
  height: ${({ isSmall }) => (isSmall ? '49.44px' : '80px')};
  top: ${({ isSmall }) => (isSmall ? '30.54px' : '92px')};
  left: ${({ isSmall }) => (isSmall ? '52.34px' : '92px')};
`;

const RightDecoration = styled.img<{ isSmall?: boolean }>`
  position: absolute;
  width: ${({ isSmall }) => (isSmall ? '49.44px' : '80px')};
  height: ${({ isSmall }) => (isSmall ? '49.44px' : '80px')};
  top: ${({ isSmall }) => (isSmall ? '83.06px' : '151px')};
  left: ${({ isSmall }) => (isSmall ? '145.65px' : '243px')};
`;
