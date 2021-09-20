export interface Pokemon {
  id: number;
  name: string;
  evolutionLevel?: number;
  type: string;
  gender: string;
  height: string;
  weight: string;
  color: string;
  img: string;
  audio: string;
  description: string;
  attacks: Array<string>;
}
