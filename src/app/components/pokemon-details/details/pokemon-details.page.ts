import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StoneEnum} from 'src/app/shared/enums/stone.enum';
import {Pokemon} from '../../../shared/interfaces/pokemon';
import {AllPokemonService} from '../../../shared/services/all-pokemon.service';
import {TrainerService} from "../../../shared/services/trainer.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnChanges {
  public pokemonId: number;
  public pokemon: Pokemon;
  public level: number;
  public team: Array<Pokemon> = [];
  @Input()
  public navigate: number;
  @Output() evolve: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private allPokemonService: AllPokemonService,
    private router: Router,
    public trainerService: TrainerService,
  ) {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
    this.pokemon = this.allPokemonService.getDetailsPokemon(this.pokemonId);
  }

  ngOnChanges(): void {
    this.router.navigate([`pokemon-details/${this.navigate}`]);
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

  useStone(stone: StoneEnum): void {
    const evolution = (Number(this.pokemonId) + this.pokemon.stone.indexOf(stone) + 1).toString();
    this.router.navigate([`pokemon-details/${evolution}`]);
  }

  addPokemonToTeam(pokemon: Pokemon): void {
    this.trainerService.addPokemonToTeam(pokemon);
  }

  redirectToSignin(): void {
    this.router.navigate(['/signin'])
  }

  nextPokemon() {
    this.evolve.emit()
  }
}
