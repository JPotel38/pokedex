import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Pokemon} from '../interfaces/pokemon';
import {AllPokemonsService} from "../services/all-pokemons.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  pokemonId: number;
  pokemon: Pokemon;

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly allPokemonsService: AllPokemonsService
  ) {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.pokemon = this.allPokemonsService.getDetailsPokemon(this.pokemonId);
  }

  playAudio() {
    const audio = new Audio();
    audio.src = this.pokemon.audio;
    audio.load();
    audio.play();
  }
}
