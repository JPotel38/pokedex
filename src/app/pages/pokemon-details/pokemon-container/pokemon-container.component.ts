import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss'],
})
export class PokemonContainerComponent {
  public pokemonId = this.activatedRoute.snapshot.params.id;

  constructor(
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
  ) {
  }

  previousPokemon(): void {
    --this.pokemonId;
  }

  nextPokemon(): void {
    ++this.pokemonId;
  }
}
