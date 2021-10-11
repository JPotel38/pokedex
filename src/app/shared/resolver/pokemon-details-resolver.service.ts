import { Injectable } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AllPokemonService} from '../services/all-pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsResolver implements Resolve<Pokemon> {

  constructor(private allPokemon: AllPokemonService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Pokemon {
    return this.allPokemon.getDetailsPokemon(route.paramMap.get('id'));
  }
}
