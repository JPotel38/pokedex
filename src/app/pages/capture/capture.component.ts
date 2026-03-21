import {Component, OnDestroy, OnInit} from '@angular/core';
import {AllPokemonService} from "../../shared/services/all-pokemon.service";
import {Pokemon} from "../../shared/interfaces/pokemon";
import {UserService} from "../../shared/services/user.service";
import {Subscription} from "rxjs";
import {User} from "../../shared/interfaces/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss'],
})
export class CaptureComponent implements OnInit, OnDestroy {
  public randomPokemon: Pokemon;
  public alreadyCatch: boolean;
  public currentUser: User;
  private allPokemonArray: Array<Pokemon>;
  private totalWeight: number;
  private normalizedChoices: Pokemon[];
  private userServiceSubscription: Subscription;

  constructor(public allPokemonService: AllPokemonService,
              public userService: UserService,
              public readonly router: Router) {

  }

  ngOnInit() {
    this.userServiceSubscription = this.userService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    this.allPokemonArray = this.allPokemonService.getAllPokemons();
    this.totalWeight = this.allPokemonArray.reduce((sum, pokemon) => sum + pokemon.encounterRate, 0);
    this.normalizedChoices = this.allPokemonArray.map(pokemon => {
      return {
        ...pokemon,
        normalizedWeight: pokemon.encounterRate / this.totalWeight,
      };
    });
    this.launchEncounter();
  }

  ngOnDestroy() {
    if (this.userServiceSubscription) this.userServiceSubscription.unsubscribe();
  }

  launchEncounter() {
    this.alreadyCatch = false;
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

  addPokemon(pokemon: Pokemon): void {
    if (this.currentUser.userName) {
      this.currentUser.pokemonTeam.push(pokemon);
      this.alreadyCatch = true;
      this.storePokemonToTeam(pokemon);
      this.launchEncounter();
    } else {
      this.router.navigate(['login'])
    }
  }

  storePokemonToTeam(pokemon: Pokemon) {
    const currentUser: User = this.userService.getStoredUser();
    currentUser.pokemonTeam.push(pokemon);
    localStorage.setItem('user', JSON.stringify(currentUser));
  }

}
