import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TrainerService} from "../../../shared/services/trainer.service";

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss'],
})
export class PokemonContainerComponent {
  pokemonId = this.activatedRoute.snapshot.params.id;

  constructor(
    private activatedRoute: ActivatedRoute,
    public trainerService: TrainerService,
  ) {
  }

  previousPokemon(): void {
    --this.pokemonId;
  }

  nextPokemon(): void {
    ++this.pokemonId;
  }
}
