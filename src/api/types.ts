export interface MyOreumRequestBody {
  nickname: string;
  month: string;
  day: string;
}

export interface MyOreumResponse {
  nickname: string;
  name: string;
  type: OreumType;
  myOreumId: number;
  xpos: string;
  ypos: string;
  zpos: string;
  left: number;
  right: number;
}

export type OreumType = 'HORSESHOE' | 'CONE' | 'CIRCLE' | 'COMPLEX';
