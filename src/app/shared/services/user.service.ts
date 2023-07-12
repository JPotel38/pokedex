import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from '../interfaces/user';
import {Pokemon} from "../interfaces/pokemon";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>({login: "", password: "", userName: "", pokemonTeam: []});
  usersArray: User[] = [];

  storeUser(user: User): void {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem("user"));
  }

  addPokemon(pokemon: Pokemon): void {
    this.currentUser$.subscribe(user => {
        user.pokemonTeam.push(pokemon);
      }
    );
    this.usersList$.next({...this.usersList$.value})
  }

  updatePokemonName(index: number, name: string): void {
    this.currentUser$.subscribe(user => user.pokemonTeam[index].name = name);
    this.usersList$.next({...this.usersList$.value});
  }

  getPokemonTeam(): Array<Pokemon> {
    let pokemonTeam = [];
    this.currentUser$.subscribe(user => {
      pokemonTeam = user.pokemonTeam
    });
    return pokemonTeam;
  }

  // updateUserName(userNameCtrl: string): void {
  //   this.usersList.next({...this.usersList.value, userName: userNameCtrl});
  // }
}
