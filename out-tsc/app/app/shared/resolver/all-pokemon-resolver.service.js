import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AllPokemonResolver = class AllPokemonResolver {
    constructor(allPokemon) {
        this.allPokemon = allPokemon;
    }
    resolve() {
        return this.allPokemon.getAllPokemons();
    }
};
AllPokemonResolver = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AllPokemonResolver);
export { AllPokemonResolver };
//# sourceMappingURL=all-pokemon-resolver.service.js.map