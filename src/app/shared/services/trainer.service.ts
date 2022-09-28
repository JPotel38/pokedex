import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/user';
import {Pokemon} from "../interfaces/pokemon";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  user: BehaviorSubject<User> = new BehaviorSubject(
    {
      login: '',
      password: '',
      connected: false,
      pokemonTeam: []
    }
  );

  setUser(user: User) {
    console.log(user)

    this.user.next({...user});
  }

  setPokemonTeam( pokemonTeam: Array<Pokemon>) {
    console.log(this.user.value)
    this.user.next({...this.user.value, pokemonTeam})
  }
}
