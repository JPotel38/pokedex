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

  constructor(public allPokemonService: AllPokemonService,
              public userService: UserService) {
    this.userObservable$ = this.userService.currentUser$;

  }

  ngOnInit() {
  }

  launchEncounter() {
    this.randomPokemon = this.computeEncounter(this.allPokemonService.getAllPokemons());
  }

  computeEncounter(allPokemonArray) {
    const totalWeight = allPokemonArray.reduce((sum, pokemon) => sum + pokemon.encounterRate, 0);
    const randomNum = Math.random() * totalWeight;

    let cumulativeWeight = 0;
    for (let i = 0; i < allPokemonArray.length; i++) {
      cumulativeWeight += allPokemonArray[i].encounterRate;
      if (randomNum <= cumulativeWeight) {
        return allPokemonArray[i];
      }
    }

    return null;
  }


}
