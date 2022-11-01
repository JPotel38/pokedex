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
    this.user.next({...user});
  }

  addPokemon(pokemon: Pokemon) {
    this.user.value.pokemonTeam.push(pokemon)
    this.user.next({...this.user.value})
  }

  updatePokemonName(index: number, name: string){
    this.user.value.pokemonTeam[index].name = name;
    this.user.next({...this.user.value});
  }

  getPokemonTeam(){
    return this.user.value.pokemonTeam
  }
}
