import { OreumType } from '../../api/types';

interface OreumTypeInfo {
  name: string;
  description: string;
}

export const OREUM_TYPE_INFO: Record<OreumType, OreumTypeInfo> = {
  HORSESHOE: {
    name: '말굽형 오름',
    description: `말굽형 오름은 제주에 총 174개가 있어요
      산 정상부에 원형 분화구를 갖고 있거나 
      분화구만으로 이뤄졌어요`,
  },
  CONE: {
    name: '원추형 오름',
    description: `원추형 오름은 제주에 총 103개가 있어요
      분화구가 매워져 있거나 심하게 침식되어 
      뾰족한 형태를 띄어요`,
  },
  CIRCLE: {
    name: '원형 오름',
    description: `원형오름은 제주에 총 52개가 있어요
      산 정상부에 원형 분화구를 갖고 있거나
      분화구만으로 이뤄졌어요`,
  },
  COMPLEX: {
    name: '복합형 오름',
    description: `복합형 오름은 제주에 총 39개가 있어요
      화구가 2개 이상으로 
      조합되어 있는 오름이에요`,
  },
};
