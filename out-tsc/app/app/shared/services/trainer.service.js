import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let TrainerService = class TrainerService {
    constructor() {
        this.user = new BehaviorSubject({
            login: '',
            password: '',
            connected: false,
            pokemonTeam: []
        });
    }
    setUser(user) {
        this.user.next({ ...user });
    }
    addPokemon(pokemon) {
        this.user.value.pokemonTeam.push(pokemon);
        this.user.next({ ...this.user.value });
    }
    getPokemonTeam() {
        return this.user.value.pokemonTeam;
    }
};
TrainerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TrainerService);
export { TrainerService };
//# sourceMappingURL=trainer.service.js.map