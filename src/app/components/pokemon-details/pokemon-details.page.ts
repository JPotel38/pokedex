import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StoneEnum} from 'src/app/shared/enums/stone.enum';
import {Pokemon} from '../../shared/interfaces/pokemon';
import {AllPokemonService} from '../../shared/services/all-pokemon.service';
import {TrainerService} from "../../shared/services/trainer.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  pokemonId: number;
  pokemon: Pokemon;
  level: number;
  team: Array<Pokemon> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private allPokemonService: AllPokemonService,
    private router: Router,
    public trainerService: TrainerService,
  ) {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
    this.pokemon = this.allPokemonService.getDetailsPokemon(this.pokemonId);
  }

  ngOnInit() {
  }

  playAudio(): void {
    const audio = new Audio();
    audio.src = this.pokemon.audio;
    document.getElementById('img').classList.toggle('shake');
    audio.load();
    audio.play();
  }

  manageLevel(e): void {
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
    const evolution = (Number(this.pokemonId) + this.pokemon.stone.indexOf(stone) + 1).toString();
    this.router.navigate([`pokemon-details/${evolution}`]);
  }

  addPokemonToTeam(pokemon: Pokemon) {
    this.trainerService.addPokemon(pokemon);
  }

  redirectToSignin() {
    this.router.navigate(['/signin'])
  }
}
