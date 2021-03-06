import {GenderEnum} from '../enums/gender.enum';
import {TypesEnum} from '../enums/types.enum';
import {StoneEnum} from '../enums/stone.enum';

export interface Pokemon {
  id: number;
  name: string;
  evolutionLevel?: number;
  stone?: Array<StoneEnum>;
  exchange?: boolean;
  types: Array<TypesEnum>;
  gender?: GenderEnum;
  height: string;
  weight: string;
  color: Array<string>;
  img: string;
  audio: string;
  description: string;
  attacks: Array<string>;
}
