import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../shared/interfaces/pokemon';
import {Router} from '@angular/router';
import {AllPokemonService} from '../../shared/services/all-pokemon.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss'],
})
export class AllPokemonsComponent implements OnInit {
  pokemonArray: Array<Pokemon>;
  pokemon: Observable<any>;

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
}
