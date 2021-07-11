import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../interfaces/pokemon';
import {Router} from '@angular/router';
import {AllPokemonsService} from '../../services/all-pokemons.service';
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
    public readonly allPokemon: AllPokemonsService,
    public readonly router: Router
  ) {
  }

  ngOnInit() {
    this.pokemonArray = this.allPokemon.getAllPokemons();
  }

  goToDetails(id: number) {
    this.router.navigate([`pokemon-details/${id}`]);
  }
}
