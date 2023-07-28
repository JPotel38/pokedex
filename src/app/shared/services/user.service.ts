import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/user';
import {Pokemon} from "../interfaces/pokemon";
import {Router} from "@angular/router";

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

  constructor(public readonly router: Router) {
  }

  storeUser(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getStoredUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  logOut() {
    this.currentUser$.next({
      login: "",
      password: "",
      userName: "",
      pokemonTeam: []
    });
    this.router.navigate([`/`]);
  }

  updateUserName(userNameCtrl: string): void {
    this.currentUser$.subscribe(user => user.userName = userNameCtrl);
  }

  getPokemonTeam(): Array<Pokemon> {
    let pokemonTeam = this.getStoredUser().pokemonTeam;
    this.currentUser$.subscribe(user => {
      if (user) {pokemonTeam = this.getStoredUser().pokemonTeam}
    });
    return this.getStoredUser().pokemonTeam;
  }

}
