export interface Pokemon {
  id: number;
  name: string;
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
