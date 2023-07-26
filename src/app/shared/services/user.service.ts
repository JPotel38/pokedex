import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/user';
import {Pokemon} from "../interfaces/pokemon";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>({
    login: "",
    password: "",
    userName: "",
    pokemonTeam: []
  });

  storeUser(user: User): void {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem("user"));
  }

  logOut() {
    this.currentUser$.next(undefined);
  }

  updateUserName(userNameCtrl: string): void {
    this.currentUser$.subscribe(user => user.userName = userNameCtrl);
  }

  addPokemon(pokemon: Pokemon): void {
    this.currentUser$.subscribe(user => {
        user.pokemonTeam.push(pokemon);
      }
    );
  }

  updatePokemonName(index: number, name: string): void {
    this.currentUser$.subscribe(user => user.pokemonTeam[index].chosenName = name);
  }

  getPokemonTeam(): Array<Pokemon> {
    let pokemonTeam = [];
    this.currentUser$.subscribe(user => {
      pokemonTeam = user.pokemonTeam
    });
    return pokemonTeam;
  }

  deletePokemon(index: number): void {
    this.currentUser$.subscribe(user => user.pokemonTeam.splice(index, 1));
  }

}
