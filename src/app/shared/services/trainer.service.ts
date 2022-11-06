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
      userName:'',
      connected: false,
      pokemonTeam: []
    }
  );

  setUser(user: User) {
    this.user.subscribe(userSub => {
      if(!userSub.userName){
        userSub.userName = user.login
      }
    })
    this.user.next({...user});
  }

  addPokemon(pokemon: Pokemon) {
    const addedPokemon = {...pokemon}
    this.user.value.pokemonTeam.push(addedPokemon)
    this.user.next({...this.user.value})
  }

  updatePokemonName(index: number, name: string){
    this.user.value.pokemonTeam[index].name = name;
    this.user.next({...this.user.value});
  }

  getPokemonTeam(){
    return JSON.parse(JSON.stringify(this.user.value.pokemonTeam))
  }

  updateUserName(userNameCtrl: string) {
    this.user.next({...this.user.value, userName: userNameCtrl});
  }
}
