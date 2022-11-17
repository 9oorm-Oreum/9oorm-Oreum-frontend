import { type } from 'os';
import { OreumType } from '../../api/types';

interface OreumTypeInfo {
  name: string;
  description: string;
}

export const OREUM_TYPE_INFO: Record<OreumType, OreumTypeInfo> = {
  HORSESHOE: {
    name: '말굽',
    description:
      '총 174개가 존재해요. 분화구의 일부분이 침식되어 무너져 말굽 형태를 띤답니다. 분화 당시의 풍향에 따라 무너지는 방향이 달라진다고 해요.',
  },
  CONE: {
    name: '원추',
    description:
      '총 103개가 존재해요. 분화구가 매워져 있거나 심하게 침식되어 뾰족한 형태의 오름이에요. 화구가 없고 삿갓을 덮은 듯한 모양이 특징이에요.',
  },
  CIRCLE: {
    name: '원형',
    description:
      '총 52개가 존재해요. 산 정상부에 원형 분화구인 굼부리를 갖고 있거나 분화구만으로 이뤄졌어요. 대표적인 화산의 이미지와 유사한 형태의 오름이에요.',
  },
  COMPLEX: {
    name: '복합',
    description:
      '총 39개가 존재해요. 화구가 2개 이상으로 조합되어 있는 오름이에요. 다른 유형의 오름에 비해 형태가 더 복잡해요.',
  },
};
