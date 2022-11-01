import {Pokemon} from './pokemon';

export interface User {
  login: string;
  password: string;
  userName: string;
  pokemonTeam?: Array<Pokemon>;
  connected: boolean;
}
