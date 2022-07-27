import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AllPokemonService} from '../../shared/services/all-pokemon.service';
import {Pokemon} from '../../shared/interfaces/pokemon';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss'],
})
export class AllPokemonsComponent implements OnInit {
  pokemonArrayByPages: Array<Pokemon>;

  constructor(
    public readonly allPokemon: AllPokemonService,
    public readonly router: Router
  ) {
  }

  ngOnInit() {
  }

  goToDetails(id: number) {
    this.router.navigate([`pokemon-details/${id}`]);
  }

  setPage(pokemonArrayByPages: any) {
    console.log({pokemonArrayByPages})
    this.pokemonArrayByPages = pokemonArrayByPages;
  }

}
