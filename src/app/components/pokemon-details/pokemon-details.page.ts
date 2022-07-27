import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { StoneEnum } from 'src/app/shared/enums/stone.enum';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private allPokemonService: AllPokemonService,
    private router: Router
  ) {
    this.pokemonId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    this.pokemon = this.allPokemonService.getDetailsPokemon(this.pokemonId.toString());
  }

  ngOnInit() {
  }

  playAudio(): void {
    document.getElementById('img').classList.add('shake');
    this.shaking();
    const audio = new Audio();
    audio.src = this.pokemon.audio;
    audio.load();
    audio.play();
  }

  shaking(): Promise<void> {
    return new Promise(_ => {
      setTimeout(() => {
        document.getElementById('img').classList.remove('shake');
      }, 1000);
    });
  }

  manageLevel(e: { detail: { value: number } }): void {
    this.level = e.detail.value;
  }

  previousPokemon(): void {
    this.pokemonId--;
    this.router.navigate([`pokemon-details/${this.pokemonId.toString()}`]);
  }

  nextPokemon(): void {
    this.pokemonId++;
    this.router.navigate([`pokemon-details/${this.pokemonId.toString()}`]);
  }

  useStone(stone: StoneEnum): void {
    const evolution = this.pokemonId + this.pokemon.stone.indexOf(stone) + 1;
    this.router.navigate([`pokemon-details/${evolution.toString()}`]);
  }
}
