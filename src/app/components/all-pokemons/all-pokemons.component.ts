import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AllPokemonService} from '../../shared/services/all-pokemon.service';
import {Pokemon} from "../../shared/interfaces/pokemon";

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss'],
})
export class AllPokemonsComponent implements OnInit {
  p: number = 1;
  pokemonArray: Array<Pokemon>

  constructor(
    public readonly allPokemon: AllPokemonService,
    public readonly router: Router
  ) {
    this.pokemonArray = this.allPokemon.getAllPokemons();
  }

  ngOnInit() {
  }

  goToDetails(id: number) {
    this.router.navigate([`pokemon-details/${id}`]);
  }

}
