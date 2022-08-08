import {Injectable} from '@angular/core';
import {AllPokemonService} from '../services/all-pokemon.service';
import {Pokemon} from '../interfaces/pokemon';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllPokemonResolver {

  constructor(private allPokemon: AllPokemonService) {
  }

  resolve(): Array<Pokemon> {
    return this.allPokemon.getAllPokemons();
  }
}
