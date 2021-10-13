import {Pokemon} from './pokemon';

export interface User {
  login: string;
  password: string;
  pokemonTeam?: Array<Pokemon>;
}
