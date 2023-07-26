import {Component, OnInit} from '@angular/core';
import {AllPokemonService} from "../../shared/services/all-pokemon.service";
import {Pokemon} from "../../shared/interfaces/pokemon";
import {UserService} from "../../shared/services/user.service";
import {Subject} from "rxjs";
import {User} from "../../shared/interfaces/user";

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss'],
})
export class CaptureComponent implements OnInit {
  public randomPokemon: Pokemon;
  public userObservable$: Subject<User>;
  private allPokemonArray: Array<Pokemon>;
  private totalWeight: number;
  private normalizedChoices: Pokemon[];

  constructor(public allPokemonService: AllPokemonService,
              public userService: UserService) {
    this.userObservable$ = this.userService.currentUser$;

  }

  ngOnInit() {
  this.allPokemonArray = this.allPokemonService.getAllPokemons();
    this.totalWeight = this.allPokemonArray.reduce((sum, pokemon) => sum + pokemon.encounterRate, 0);
    this.normalizedChoices = this.allPokemonArray.map(pokemon => {
      return {
        ...pokemon,
        normalizedWeight: pokemon.encounterRate / this.totalWeight,
      };
    });
  }

  launchEncounter() {
    this.randomPokemon = this.computeEncounter();
  }

  computeEncounter() {
    for (let i = this.normalizedChoices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.normalizedChoices[i], this.normalizedChoices[j]] = [this.normalizedChoices[j], this.normalizedChoices[i]];
    }
    const randomNum = Math.random();
    let cumulativeWeight = 0;

    for (let i = 0; i < this.normalizedChoices.length; i++) {
      cumulativeWeight += this.normalizedChoices[i].normalizedWeight;
      if (randomNum <= cumulativeWeight) {
        return this.normalizedChoices[i];
      }
    }

    return null;

  }


}
