import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../../shared/interfaces/pokemon';
import {AllPokemonService} from '../../shared/services/all-pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  pokemonId: number;
  pokemon: Pokemon;
  level: number;
  alert: any;

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly allPokemonService: AllPokemonService,
    public readonly router: Router
  ) {
    this.pokemonId = parseInt(this.activatedRoute.snapshot.params.id, 10);
  }


  ngOnInit() {
    this.pokemon = this.allPokemonService.getDetailsPokemon(this.pokemonId);
  }

  playAudio() {
    document.getElementById('img').classList.add('shake');
    const audio = new Audio();
    audio.src = this.pokemon.audio;
    audio.load();
    audio.play();
    setTimeout(() => {
      document.getElementById('img').classList.remove('shake');
    }, 1000);
  }

  goBackToPokedex() {
    this.router.navigate([`/`]);
  }

  manageLevel(e) {
    this.level = e.detail.value;
  }

  previousPokemon() {
    this.pokemonId--;
    this.router.navigate([`pokemon-details/${this.pokemonId.toString()}`]);
  }

  nextPokemon() {
    this.pokemonId++;
    this.router.navigate([`pokemon-details/${this.pokemonId.toString()}`]);
  }

  useStone(stone) {
    const evolution = this.pokemonId + this.pokemon.stone.indexOf(stone) + 1;
    this.router.navigate([`pokemon-details/${evolution.toString()}`]);

  }
}
