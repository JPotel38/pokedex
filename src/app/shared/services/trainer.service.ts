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
    if(!user.pokemonTeam){
    this.user.next({...user});
    } else {
      this.setPokemonTeam(user, user.pokemonTeam)
    }
  }

  setPokemonTeam(user:User, pokemonTeam: Array<Pokemon>) {
    this.user.next({...user, pokemonTeam})
  }
}
