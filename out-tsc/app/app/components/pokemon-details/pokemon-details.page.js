import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PokemonDetailsPage = class PokemonDetailsPage {
    constructor(activatedRoute, allPokemonService, router, trainerService) {
        this.activatedRoute = activatedRoute;
        this.allPokemonService = allPokemonService;
        this.router = router;
        this.trainerService = trainerService;
        this.team = [];
        this.pokemonId = this.activatedRoute.snapshot.params.id;
        this.pokemon = this.allPokemonService.getDetailsPokemon(this.pokemonId);
    }
    ngOnInit() {
    }
    playAudio() {
        const audio = new Audio();
        audio.src = this.pokemon.audio;
        document.getElementById('img').classList.add('shake');
        this.shaking();
        audio.load();
        audio.play();
    }
    shaking() {
        setTimeout(() => {
        }, 1000);
    }
    manageLevel(e) {
        this.level = e.detail.value;
    }
    previousPokemon() {
        this.pokemonId--;
        this.router.navigate([`pokemon-details/${this.pokemonId.toString()}`]);
    }
    nextPokemon() {
        this.pokemonId++;
        this.router.navigate([`pokemon-details/${this.pokemonId.toString()}`]);
    }
    useStone(stone) {
        const evolution = Number(this.pokemonId) + this.pokemon.stone.indexOf(stone) + 1;
        this.router.navigate([`pokemon-details/${evolution.toString()}`]);
    }
    addPokemonToTeam(pokemon) {
        this.trainerService.addPokemon(pokemon);
    }
    redirectToSignin() {
        this.router.navigate(['/signin']);
    }
};
PokemonDetailsPage = __decorate([
    Component({
        selector: 'app-pokemon-details',
        templateUrl: './pokemon-details.page.html',
        styleUrls: ['./pokemon-details.page.scss'],
    })
], PokemonDetailsPage);
export { PokemonDetailsPage };
//# sourceMappingURL=pokemon-details.page.js.map